import json
import os
from app import app, db, Video, Comment

def parse_views(view_str):
    """Converts view strings like '1.2M views' or '850K' to an integer."""
    if not isinstance(view_str, str):
        return int(view_str) # Already a number
    view_str = view_str.lower().replace(' views', '').strip()
    if 'm' in view_str:
        return int(float(view_str.replace('m', '')) * 1_000_000)
    if 'k' in view_str:
        return int(float(view_str.replace('k', '')) * 1_000)
    return int(view_str.replace(',', ''))

def seed_data():
    """Seeds the database with video data from videos.json."""
    with app.app_context():
        # Clear existing data to prevent duplicates
        print("Deleting existing video and comment data...")
        db.session.query(Comment).delete()
        db.session.query(Video).delete()
        db.session.commit()
        print("Existing data deleted.")

        # Get the absolute path for videos.json
        basedir = os.path.abspath(os.path.dirname(__file__))
        video_path = os.path.join(basedir, 'videos.json')

        # Load from JSON
        print(f"Loading data from {video_path}...")
        with open(video_path, 'r', encoding='utf-8') as f:
            videos_data = json.load(f)

        for video_data in videos_data:
            # Convert the 'views' string (e.g., '1.2M views') to an integer
            if 'views' in video_data:
                video_data['views'] = parse_views(video_data['views'])

            # Create a new Video object for each item in the JSON
            # Note: The keys in video_data must match the column names in the Video model
            new_video = Video(**video_data)
            db.session.add(new_video)
        
        db.session.commit()
        print(f"Database seeded with {len(videos_data)} videos.")

if __name__ == '__main__':
    try:
        seed_data()
    except Exception as e:
        print(f"An error occurred during seeding: {e}")
        db.session.rollback()