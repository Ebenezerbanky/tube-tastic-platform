import json
import os
from datetime import datetime, timezone
from flask import Flask, jsonify, abort, request, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
# Enable CORS to allow requests from your frontend (running on a different "origin")
CORS(app)

# Get the absolute path of the directory where the script is located
basedir = os.path.abspath(os.path.dirname(__file__))

# --- Database Configuration ---
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///' + os.path.join(basedir, 'database.db'))
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# --- Database Models ---
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    avatar = db.Column(db.String(1), nullable=False)

    def to_dict(self):
        # Exclude password hash and SQLAlchemy internal state from the returned dictionary
        return {c.name: getattr(self, c.name) for c in self.__table__.columns if c.name != 'password_hash'}

class Video(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    channel = db.Column(db.String(100), nullable=False)
    channelId = db.Column(db.String(100))
    views = db.Column(db.Integer, default=0)
    time = db.Column(db.String(50))
    duration = db.Column(db.String(20))
    thumbnail = db.Column(db.String(200))
    videoUrl = db.Column(db.String(200), nullable=False)
    likes = db.Column(db.Integer, default=0)
    description = db.Column(db.Text)
    category = db.Column(db.String(50))
    comments = db.relationship('Comment', backref='video', lazy=True, order_by="Comment.timestamp.desc()")

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    author = db.Column(db.String(80), nullable=False) # In a real app, this would be a foreign key to the User model
    video_id = db.Column(db.Integer, db.ForeignKey('video.id'), nullable=False)
    timestamp = db.Column(db.DateTime, nullable=False, default=lambda: datetime.now(timezone.utc))

    def to_dict(self):
        d = {c.name: getattr(self, c.name) for c in self.__table__.columns}
        # Convert datetime to ISO 8601 string format for JSON serialization
        if d.get('timestamp'):
            d['timestamp'] = d['timestamp'].isoformat() + 'Z' # Add Z for UTC
        return d


# API Endpoint for the root URL
@app.route('/')
def index():
    return render_template('index.html')

# --- Video Endpoints ---

# API Endpoint to get all videos
@app.route('/api/videos', methods=['GET'])
def get_videos():
    videos = Video.query.all()
    return jsonify([video.to_dict() for video in videos])

# API Endpoint to get a single video by its ID
@app.route('/api/videos/<int:video_id>', methods=['GET'])
def get_video(video_id):
    video = db.session.get(Video, video_id)
    if video is None:
        return jsonify({"error": f"Video with id {video_id} not found"}), 404
    return jsonify(video.to_dict())

# --- Like and View Endpoints ---

@app.route('/api/videos/<int:video_id>/like', methods=['POST'])
def like_video(video_id):
    video = db.session.get(Video, video_id)
    if video is None:
        return jsonify({"error": "Video not found"}), 404

    video.likes = (video.likes or 0) + 1
    db.session.commit()

    return jsonify(video.to_dict())

@app.route('/api/videos/<int:video_id>/view', methods=['POST'])
def increment_view_count(video_id):
    video = db.session.get(Video, video_id)
    if video is None:
        return jsonify({"error": "Video not found"}), 404

    # In a real app, you'd have more sophisticated logic to prevent view count spamming.
    video.views = (video.views or 0) + 1
    db.session.commit()

    return jsonify(video.to_dict())

# --- Comment Endpoints ---

@app.route('/api/videos/<int:video_id>/comments', methods=['POST'])
def add_comment_to_video(video_id):
    # In a real app, you would first check if the user is logged in.
    video = db.session.get(Video, video_id)
    if video is None:
        return jsonify({"error": "Video not found"}), 404

    data = request.get_json()
    if not data or 'text' not in data or 'author' not in data:
        return jsonify({"error": "Missing comment data"}), 400

    new_comment = Comment(
        text=data['text'],
        author=data['author'],
        video_id=video_id
    )
    db.session.add(new_comment)
    db.session.commit()

    return jsonify(new_comment.to_dict()), 201

@app.route('/api/videos/<int:video_id>/comments', methods=['GET'])
def get_comments_for_video(video_id):
    video = db.session.get(Video, video_id)
    if video is None:
        return jsonify({"error": "Video not found"}), 404

    return jsonify([comment.to_dict() for comment in video.comments])

# --- Authentication Endpoints ---

@app.route('/api/register', methods=['POST'])
def register_user():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({"error": "Missing required fields"}), 400

    if db.session.query(User).filter_by(email=email).first():
        return jsonify({"error": "User with this email already exists"}), 409

    hashed_password = generate_password_hash(password)

    new_user = User(
        username=username,
        email=email,
        password_hash=hashed_password,
        avatar=username[0].upper()
    )
    db.session.add(new_user)
    db.session.commit()

    return jsonify(new_user.to_dict()), 201

@app.route('/api/login', methods=['POST'])
def login_user():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = db.session.query(User).filter_by(email=email).first()

    if not user or not check_password_hash(user.password_hash, password):
        return jsonify({"error": "Invalid email or password"}), 401

    return jsonify(user.to_dict()), 200
