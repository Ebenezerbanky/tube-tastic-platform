
        // Global state
        let currentUser = null;
        let currentVideo = null;
        let videos = [];
        let playlists = [];
        let comments = [];
        let watchHistory = [];
        let likedVideos = [];
        let watchLaterVideos = [];

        // Sample video data
        const sampleVideos = [
            {
                id: 1,
                title: "Building a Modern Web App with JavaScript",
                channel: "CodeMaster",
                channelId: "codemaster",
                views: "1.2M views",
                time: "3 days ago",
                duration: "15:30",
                thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                likes: 15420,
                description: "Learn how to build modern web applications using JavaScript, HTML5, and CSS3. This comprehensive tutorial covers best practices and advanced techniques.",
                uploadDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
                category: 'Amateur'
            },
            {
                id: 2,
                title: "CSS Grid vs Flexbox: Complete Guide",
                channel: "WebDev Pro",
                channelId: "webdevpro",
                views: "856K views",
                time: "1 week ago",
                duration: "22:15",
                thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                likes: 8930,
                description: "Understanding the differences between CSS Grid and Flexbox, when to use each, and practical examples.",
                uploadDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
                category: 'Teen'
            },
            {
                id: 3,
                title: "React Hooks Explained in 10 Minutes",
                channel: "ReactGuru",
                channelId: "reactguru",
                views: "2.1M views",
                time: "2 weeks ago",
                duration: "10:45",
                thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                likes: 25600,
                description: "A quick and comprehensive guide to React Hooks including useState, useEffect, and custom hooks.",
                uploadDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
                category: 'Virgin'
            },
            {
                id: 4,
                title: "Node.js Backend Development Tutorial",
                channel: "ServerSide",
                channelId: "serverside",
                views: "674K views",
                time: "5 days ago",
                duration: "45:20",
                thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                likes: 12300,
                description: "Complete backend development tutorial using Node.js, Express, and MongoDB.",
                uploadDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
                category: 'BlowJob'
            },
            {
                id: 5,
                title: "Python Data Science Crash Course",
                channel: "DataPython",
                channelId: "datapython",
                views: "3.4M views",
                time: "1 month ago",
                duration: "1:23:45",
                thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                likes: 45200,
                description: "Master Python for data science with pandas, numpy, matplotlib and more.",
                uploadDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
                category: 'Lesbian'
            },
            {
                id: 6,
                title: "Machine Learning Fundamentals",
                channel: "AI Academy",
                channelId: "aiacademy",
                views: "1.8M views",
                time: "2 weeks ago",
                duration: "35:12",
                thumbnail: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
                likes: 18700,
                description: "Introduction to machine learning concepts, algorithms, and practical applications.",
                uploadDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
                category: 'Gay'
            },
            {
                id: 7,
                title: "UI/UX Design Principles for Developers",
                channel: "DesignCourse",
                channelId: "designcourse",
                views: "980K views",
                time: "3 weeks ago",
                duration: "18:55",
                thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
                likes: 14500,
                description: "A guide for developers on how to think about UI/UX design. Learn key principles to make your applications more user-friendly.",
                uploadDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000),
                category: 'Amateur'
            },
            {
                id: 8,
                title: "Docker in 100 Seconds",
                channel: "Fireship",
                channelId: "fireship",
                views: "4.2M views",
                time: "1 year ago",
                duration: "02:10",
                thumbnail: "https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
                likes: 95000,
                description: "Get up to speed with Docker containers in just 100 seconds. Learn the basics of containerization.",
                uploadDate: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
                category: 'MILF'
            },
            {
                id: 9,
                title: "Getting Started with Kubernetes",
                channel: "TechWorld with Nana",
                channelId: "techworldnana",
                views: "1.1M views",
                time: "6 months ago",
                duration: "1:10:30",
                thumbnail: "https://images.unsplash.com/photo-1605710331422-6af21257b123?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                likes: 22000,
                description: "A beginner-friendly introduction to Kubernetes. Learn about pods, services, deployments, and more.",
                uploadDate: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000),
                category: 'Anal'
            },
            {
                id: 10,
                title: "Create Your First Game with Unity",
                channel: "Brackeys",
                channelId: "brackeys",
                views: "5.5M views",
                time: "2 years ago",
                duration: "25:40",
                thumbnail: "https://images.unsplash.com/photo-1593305841993-940828569134?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
                likes: 150000,
                description: "Follow along and create your very first 3D game using the Unity game engine. No prior experience required!",
                uploadDate: new Date(Date.now() - 2 * 365 * 24 * 60 * 60 * 1000),
                category: 'Threesome'
            },
            {
                id: 11,
                title: "iOS Development for Beginners (SwiftUI)",
                channel: "CodeWithChris",
                channelId: "codewithchris",
                views: "780K views",
                time: "4 months ago",
                duration: "2:05:15",
                thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
                likes: 19000,
                description: "Learn how to build iOS apps from scratch using Apple's latest framework, SwiftUI. This is a full course for beginners.",
                uploadDate: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000),
                category: 'Teen'
            },
            {
                id: 12,
                title: "Ethical Hacking Full Course",
                channel: "Edureka",
                channelId: "edureka",
                views: "10M views",
                time: "11 months ago",
                duration: "10:00:00",
                thumbnail: "https://images.unsplash.com/photo-1544256718-3b62ff080b94?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                likes: 250000,
                description: "Learn ethical hacking from scratch. This full course covers everything you need to know to become a certified ethical hacker.",
                uploadDate: new Date(Date.now() - 330 * 24 * 60 * 60 * 1000),
                category: 'Amateur'
            },
            {
                id: 13,
                title: "Advanced SQL for Data Analysts",
                channel: "DataWrangler",
                channelId: "datawrangler",
                views: "550K views",
                time: "3 months ago",
                duration: "55:10",
                thumbnail: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                likes: 11000,
                description: "Dive deep into advanced SQL topics like window functions, CTEs, and query optimization.",
                uploadDate: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
                category: 'Anal'
            },
            {
                id: 14,
                title: "Building a REST API with Go (Golang)",
                channel: "GoFaster",
                channelId: "gofaster",
                views: "320K views",
                time: "2 months ago",
                duration: "38:45",
                thumbnail: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                likes: 9500,
                description: "A step-by-step guide to building a high-performance RESTful API using the Go programming language.",
                uploadDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
                category: 'Gay'
            },
            {
                id: 15,
                title: "Flutter Crash Course for Beginners 2023",
                channel: "MobileDev",
                channelId: "mobiledev",
                views: "1.5M views",
                time: "5 months ago",
                duration: "2:15:00",
                thumbnail: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                likes: 35000,
                description: "Learn to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
                uploadDate: new Date(Date.now() - 150 * 24 * 60 * 60 * 1000),
                category: 'Virgin'
            },
            {
                id: 16,
                title: "Cybersecurity 101: Protecting Yourself Online",
                channel: "SecureNet",
                channelId: "securenet",
                views: "2.8M views",
                time: "1 year ago",
                duration: "12:30",
                thumbnail: "https://images.unsplash.com/photo-1562813532-179316965473?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                likes: 62000,
                description: "Essential tips and tricks to enhance your digital security and protect your personal information from cyber threats.",
                uploadDate: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
                category: 'BlowJob'
            },
            {
                id: 17,
                title: "The Future of Artificial Intelligence",
                channel: "FutureTech",
                channelId: "futuretech",
                views: "780K views",
                time: "4 weeks ago",
                duration: "28:18",
                thumbnail: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                likes: 15000,
                description: "A documentary exploring the latest advancements in AI and what they mean for the future of humanity.",
                uploadDate: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000),
                category: 'Lesbian'
            },
            {
                id: 18,
                title: "Blender 3.0 Beginner Tutorial",
                channel: "3D Guru",
                channelId: "3dguru",
                views: "3.1M views",
                time: "8 months ago",
                duration: "1:45:00",
                thumbnail: "https://images.unsplash.com/photo-1599219928032-241b3a1b8b7c?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
                likes: 88000,
                description: "Your first day in Blender 3.0. Learn the interface, navigation, modeling, and rendering basics to create your first 3D scene.",
                uploadDate: new Date(Date.now() - 240 * 24 * 60 * 60 * 1000),
                category: 'MILF'
            },
            {
                id: 19,
                title: "Rust Programming Language for Beginners",
                channel: "Rustaceans",
                channelId: "rustaceans",
                views: "450K views",
                time: "3 months ago",
                duration: "48:22",
                thumbnail: "https://images.unsplash.com/photo-1639413665566-2f75adf7b7ca?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
                likes: 12500,
                description: "An introduction to the Rust programming language, focusing on its core concepts of ownership, borrowing, and lifetimes.",
                uploadDate: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
                category: 'Teen'
            },
            {
                id: 20,
                title: "DevOps Explained: CI/CD Pipelines",
                channel: "DevOps Journey",
                channelId: "devopsjourney",
                views: "990K views",
                time: "7 months ago",
                duration: "25:05",
                thumbnail: "https://images.unsplash.com/photo-1573495627361-ab2b8086ea62?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
                likes: 21000,
                description: "Understand the fundamentals of DevOps and learn how to build a Continuous Integration and Continuous Deployment (CI/CD) pipeline.",
                uploadDate: new Date(Date.now() - 210 * 24 * 60 * 60 * 1000),
                category: 'Amateur'
            },
            {
                id: 21,
                title: "WebAssembly (WASM) - The Next Big Thing?",
                channel: "Web Explorer",
                channelId: "webexplorer",
                views: "215K views",
                time: "1 month ago",
                duration: "14:40",
                thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                likes: 7800,
                description: "An overview of WebAssembly, what it is, how it works, and its potential to revolutionize web development.",
                uploadDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
                category: 'Virgin'
            },
            {
                id: 22,
                title: "Quantum Computing Explained",
                channel: "Quantum Leap",
                channelId: "quantumleap",
                views: "6.1M views",
                time: "2 years ago",
                duration: "09:30",
                thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=225&fit=crop",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
                likes: 180000,
                description: "A simple explanation of the mind-bending world of quantum computing, qubits, superposition, and entanglement.",
                uploadDate: new Date(Date.now() - 2 * 365 * 24 * 60 * 60 * 1000),
                category: 'BlowJob'
            }
        ];

        // Initialize the application
        function initApp() {
            videos = [...sampleVideos];
            populateVideoGrid();
            loadUserData();
            initializeComments();
        }

        // User authentication functions
        function login(event) {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Simulate login (in real app, this would be an API call)
            currentUser = {
                id: 1,
                username: email.split('@')[0],
                email: email,
                avatar: email.charAt(0).toUpperCase()
            };
            
            updateUserInterface();
            closeAuthModal();
            alert('Logged in successfully!');
        }

        function register(event) {
            event.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            
            // Simulate registration
            currentUser = {
                id: Date.now(),
                username: username,
                email: email,
                avatar: username.charAt(0).toUpperCase()
            };
            
            updateUserInterface();
            closeAuthModal();
            alert('Account created successfully!');
        }

        function logout() {
            currentUser = null;
            updateUserInterface();
            toggleUserMenu();
            alert('Logged out successfully!');
        }

        function updateUserInterface() {
            const userInitial = document.getElementById('userInitial');
            const loginItem = document.getElementById('loginItem');
            const logoutItem = document.getElementById('logoutItem');
            const uploadBtn = document.getElementById('uploadBtn');
            const commentAvatar = document.getElementById('commentAvatar');
            
            if (currentUser) {
                userInitial.textContent = currentUser.avatar;
                loginItem.style.display = 'none';
                logoutItem.style.display = 'flex';
                uploadBtn.style.display = 'block';
                commentAvatar.textContent = currentUser.avatar;
            } else {
                userInitial.textContent = '?';
                loginItem.style.display = 'flex';
                logoutItem.style.display = 'none';
                uploadBtn.style.display = 'none';
                commentAvatar.textContent = 'U';
            }
        }

        // Video functions
        function createVideoCard(video) {
            const channelInitial = video.channel.charAt(0);
            return `
                <div class="video-card" onclick="playVideo(${video.id})">
                    <div class="video-thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}" onerror="this.style.display='none'">
                        <div class="video-duration">${video.duration}</div>
                    </div>
                    <div class="video-info">
                        <div class="channel-avatar">${channelInitial}</div>
                        <div class="video-details">
                            <div class="video-title">${video.title}</div>
                            <div class="video-meta">
                                <div class="channel-name">${video.channel}</div>
                                <div>${video.views} • ${video.time}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function populateVideoGrid(videosToShow = videos) {
            const videoGrid = document.getElementById('videoGrid');
            videoGrid.innerHTML = videosToShow.map(video => createVideoCard(video)).join('');
        }

        function playVideo(videoId) {
            currentVideo = videos.find(v => v.id === videoId);
            if (!currentVideo) return;

            // Add to history
            if (currentUser && !watchHistory.find(v => v.id === videoId)) {
                watchHistory.unshift(currentVideo);
            }

            // Update player
            document.getElementById('videoElement').src = currentVideo.videoUrl;
            document.getElementById('playerTitle').textContent = currentVideo.title;
            document.getElementById('playerViews').textContent = currentVideo.views;
            document.getElementById('likeCount').textContent = currentVideo.likes;
            
            // Update like button state
            const likeBtn = document.getElementById('likeBtn');
            if (likedVideos.find(v => v.id === videoId)) {
                likeBtn.classList.add('liked');
            } else {
                likeBtn.classList.remove('liked');
            }

            // Load comments for this video
            loadComments(videoId);
            
            // Show related videos
            showRelatedVideos(videoId);
            
            // Show video player
            document.getElementById('videoPlayer').style.display = 'block';
        }

        function closeVideoPlayer() {
            document.getElementById('videoPlayer').style.display = 'none';
            document.getElementById('videoElement').pause();
        }

        function toggleLike() {
            if (!currentUser) {
                alert('Please sign in to like videos');
                return;
            }

            const likeBtn = document.getElementById('likeBtn');
            const likeCount = document.getElementById('likeCount');
            const existingLike = likedVideos.find(v => v.id === currentVideo.id);

            if (existingLike) {
                // Unlike
                likedVideos = likedVideos.filter(v => v.id !== currentVideo.id);
                likeBtn.classList.remove('liked');
                currentVideo.likes--;
            } else {
                // Like
                likedVideos.push(currentVideo);
                likeBtn.classList.add('liked');
                currentVideo.likes++;
            }

            likeCount.textContent = currentVideo.likes;
        }

        function shareVideo() {
            if (navigator.share) {
                navigator.share({
                    title: currentVideo.title,
                    text: `Check out this video: ${currentVideo.title}`,
                    url: window.location.href
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                const url = window.location.href;
                navigator.clipboard.writeText(url).then(() => {
                    alert('Video link copied to clipboard!');
                });
            }
        }

        function showRelatedVideos(currentVideoId) {
            const relatedContainer = document.getElementById('relatedVideos');
            const related = videos.filter(v => v.id !== currentVideoId).slice(0, 5);
            
            relatedContainer.innerHTML = related.map(video => `
                <div class="video-card" onclick="playVideo(${video.id})" style="margin-bottom: 12px;">
                    <div class="video-thumbnail" style="width: 160px; height: 90px;">
                        <img src="${video.thumbnail}" alt="${video.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
                        <div class="video-duration">${video.duration}</div>
                    </div>
                    <div class="video-info">
                        <div class="video-details">
                            <div class="video-title" style="font-size: 14px;">${video.title}</div>
                            <div class="video-meta">
                                <div class="channel-name">${video.channel}</div>
                                <div>${video.views}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Comments system
        function initializeComments() {
            comments = [
                {
                    id: 1,
                    videoId: 1,
                    author: "TechEnthusiast",
                    text: "Great tutorial! Really helped me understand the concepts better.",
                    likes: 12,
                    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
                },
                {
                    id: 2,
                    videoId: 1,
                    author: "CodeNewbie",
                    text: "Thanks for explaining this so clearly. Can you make more videos on advanced topics?",
                    likes: 8,
                    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000)
                }
            ];
        }

        function loadComments(videoId) {
            const commentsList = document.getElementById('commentsList');
            const videoComments = comments.filter(c => c.videoId === videoId);
            
            commentsList.innerHTML = videoComments.map(comment => `
                <div class="comment">
                    <div class="comment-avatar">${comment.author.charAt(0)}</div>
                    <div class="comment-content">
                        <div class="comment-author">${comment.author}</div>
                        <div class="comment-text">${comment.text}</div>
                        <div class="comment-actions">
                            <div class="comment-action">
                                <svg width="16" height="16" fill="currentColor">
                                    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
                                </svg>
                                ${comment.likes}
                            </div>
                            <div class="comment-action">Reply</div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function addComment() {
            if (!currentUser) {
                alert('Please sign in to comment');
                return;
            }

            const commentInput = document.getElementById('commentInput');
            const text = commentInput.value.trim();
            
            if (!text) return;

            const newComment = {
                id: Date.now(),
                videoId: currentVideo.id,
                author: currentUser.username,
                text: text,
                likes: 0,
                timestamp: new Date()
            };

            comments.unshift(newComment);
            commentInput.value = '';
            loadComments(currentVideo.id);
        }

        // Upload functionality
        function handleFileSelect(event) {
            const file = event.target.files[0];
            if (file) {
                document.getElementById('fileText').textContent = file.name;
            }
        }

        function uploadVideo(event) {
            event.preventDefault();
            
            if (!currentUser) {
                alert('Please sign in to upload videos');
                return;
            }

            const title = document.getElementById('videoTitle').value;
            const description = document.getElementById('videoDescription').value;
            const videoFile = document.getElementById('videoFile').files[0];
            
            if (!videoFile) {
                alert('Please select a video file');
                return;
            }

            // Simulate video upload
            const newVideo = {
                id: Date.now(),
                title: title,
                channel: currentUser.username,
                channelId: currentUser.username.toLowerCase(),
                views: "0 views",
                time: "just now",
                duration: "00:00",
                thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop",
                videoUrl: URL.createObjectURL(videoFile),
                likes: 0,
                description: description,
                uploadDate: new Date()
            };

            videos.unshift(newVideo);
            populateVideoGrid();
            closeUploadModal();
            alert('Video uploaded successfully!');
        }

        // Playlist functionality
        function createPlaylist(event) {
            event.preventDefault();
            
            if (!currentUser) {
                alert('Please sign in to create playlists');
                return;
            }

            const name = document.getElementById('playlistName').value;
            const description = document.getElementById('playlistDescription').value;
            const privacy = document.getElementById('playlistPrivacy').value;

            const newPlaylist = {
                id: Date.now(),
                name: name,
                description: description,
                privacy: privacy,
                videos: [],
                createdBy: currentUser.id,
                createdAt: new Date()
            };

            playlists.push(newPlaylist);
            populatePlaylistGrid();
            closePlaylistModal();
            alert('Playlist created successfully!');
        }

        function addToPlaylist() {
            if (!currentUser) {
                alert('Please sign in to save videos');
                return;
            }

            if (!currentVideo) return;

            const modal = document.getElementById('addToPlaylistModal');
            const playlistOptions = document.getElementById('playlistOptions');
            
            const userPlaylists = playlists.filter(p => p.createdBy === currentUser.id);
            
            playlistOptions.innerHTML = userPlaylists.map(playlist => `
                <div class="user-menu-item" onclick="saveToPlaylist(${playlist.id})">
                    <svg width="20" height="20" fill="currentColor">
                        <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/>
                    </svg>
                    ${playlist.name}
                </div>
            `).join('');

            modal.style.display = 'block';
        }

        function saveToPlaylist(playlistId) {
            const playlist = playlists.find(p => p.id === playlistId);
            if (playlist && !playlist.videos.find(v => v.id === currentVideo.id)) {
                playlist.videos.push(currentVideo);
                alert(`Added to ${playlist.name}`);
            }
            closeAddToPlaylistModal();
        }

        function populatePlaylistGrid() {
            const playlistGrid = document.getElementById('playlistGrid');
            const userPlaylists = currentUser ? playlists.filter(p => p.createdBy === currentUser.id) : [];
            
            playlistGrid.innerHTML = userPlaylists.map(playlist => `
                <div class="playlist-card" onclick="openPlaylist(${playlist.id})">
                    <div class="playlist-thumbnail">
                        <svg width="48" height="48" fill="#fff">
                            <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/>
                        </svg>
                    </div>
                    <div class="playlist-info">
                        <div class="playlist-title">${playlist.name}</div>
                        <div class="playlist-count">${playlist.videos.length} videos</div>
                    </div>
                </div>
            `).join('');
        }

        function openPlaylist(playlistId) {
            const playlist = playlists.find(p => p.id === playlistId);
            if (playlist) {
                populateVideoGrid(playlist.videos);
            }
        }

        // Search functionality
        function searchVideos() {
            const searchInput = document.getElementById('searchInput');
            const query = searchInput.value.toLowerCase().trim();
            
            if (query === '') {
                populateVideoGrid(videos);
                return;
            }
            
            const filteredVideos = videos.filter(video => 
                video.title.toLowerCase().includes(query) ||
                video.channel.toLowerCase().includes(query) ||
                video.description.toLowerCase().includes(query)
            );
            
            populateVideoGrid(filteredVideos);
        }

        // Navigation functions
        function showHome() {
            document.getElementById('homeView').style.display = 'block';
            document.getElementById('playlistsView').style.display = 'none';
            populateVideoGrid(videos);
            updateActiveMenuItem('home');
        }

        function showCategory(categoryName) {
            document.getElementById('homeView').style.display = 'block';
            document.getElementById('playlistsView').style.display = 'none';
            const filteredVideos = videos.filter(v => v.category === categoryName);
            populateVideoGrid(filteredVideos);
            updateActiveMenuItem(`channels-${categoryName.toLowerCase()}`);
        }

        function showShorts() {
            document.getElementById('homeView').style.display = 'block';
            document.getElementById('playlistsView').style.display = 'none';
            // For demo purposes, we'll define "shorts" as videos under 3 minutes
            const shortsVideos = videos.filter(v => {
                if (!v.duration) return false;
                const parts = v.duration.split(':').map(Number);
                if (parts.length === 2) { // Format MM:SS
                    return parts[0] < 3;
                }
                return false; // Exclude videos longer than an hour for simplicity
            });
            populateVideoGrid(shortsVideos);
            updateActiveMenuItem('shorts-all');
        }

        function showTrendingShorts() {
            alert('Showing trending shorts (feature not implemented)');
            updateActiveMenuItem('shorts-trending');
        }

        function showNewestShorts() {
            alert('Showing newest shorts (feature not implemented)');
            updateActiveMenuItem('shorts-newest');
        }

        function showSubscriptions() {
            // In a real app, this would show videos from subscribed channels
            populateVideoGrid(videos.slice(0, 3));
            updateActiveMenuItem('subscriptions');
        }

        function showLibrary() {
            populateVideoGrid(videos);
            updateActiveMenuItem('library');
        }

        function showHistory() {
            populateVideoGrid(watchHistory);
            updateActiveMenuItem('history');
        }

        function showWatchLater() {
            populateVideoGrid(watchLaterVideos);
            updateActiveMenuItem('watchlater');
        }

        function showLikedVideos() {
            populateVideoGrid(likedVideos);
            updateActiveMenuItem('liked');
        }

        function showPlaylists() {
            document.getElementById('homeView').style.display = 'none';
            document.getElementById('playlistsView').style.display = 'block';
            populatePlaylistGrid();
            updateActiveMenuItem('playlists');
        }

        function updateActiveMenuItem(activeItem) {
            // Remove active class from all sidebar items
            document.querySelectorAll('.sidebar-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to the clicked item using its data-nav attribute
            const itemToActivate = document.querySelector(`.sidebar-item[data-nav="${activeItem}"]`);
            if (itemToActivate) {
                itemToActivate.classList.add('active');

                // If the activated item is inside a dropdown, ensure the dropdown is open
                const parentDropdown = itemToActivate.closest('.sidebar-dropdown');
                if (parentDropdown && !parentDropdown.classList.contains('open')) {
                    parentDropdown.classList.add('open');
                }
            }
        }
        
        // Modal functions
        function showUploadModal() {
            if (!currentUser) {
                showAuthModal();
                return;
            }
            document.getElementById('uploadModal').style.display = 'block';
        }

        function closeUploadModal() {
            document.getElementById('uploadModal').style.display = 'none';
            document.getElementById('videoTitle').value = '';
            document.getElementById('videoDescription').value = '';
            document.getElementById('fileText').textContent = 'Click to select video file';
        }

        function showAuthModal() {
            document.getElementById('authModal').style.display = 'block';
        }

        function closeAuthModal() {
            document.getElementById('authModal').style.display = 'none';
        }

        function switchAuthTab(tab) {
            const loginForm = document.getElementById('loginForm');
            const registerForm = document.getElementById('registerForm');
            const tabs = document.querySelectorAll('.auth-tab');
            
            tabs.forEach(t => t.classList.remove('active'));
            
            if (tab === 'login') {
                loginForm.style.display = 'flex';
                registerForm.style.display = 'none';
                tabs[0].classList.add('active');
            } else {
                loginForm.style.display = 'none';
                registerForm.style.display = 'flex';
                tabs[1].classList.add('active');
            }
        }

        function showCreatePlaylistModal() {
            if (!currentUser) {
                showAuthModal();
                return;
            }
            document.getElementById('playlistModal').style.display = 'block';
        }

        function closePlaylistModal() {
            document.getElementById('playlistModal').style.display = 'none';
            document.getElementById('playlistName').value = '';
            document.getElementById('playlistDescription').value = '';
        }

        function closeAddToPlaylistModal() {
            document.getElementById('addToPlaylistModal').style.display = 'none';
        }

        // UI functions
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.getElementById('mainContent');
            
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        }

        function toggleUserMenu() {
            const userMenu = document.getElementById('userMenu');
            userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
        }

        function toggleChannelsDropdown(element) {
            const dropdown = element.closest('.sidebar-dropdown');
            dropdown.classList.toggle('open');
        }

        // Data persistence (simulated with localStorage)
        function saveUserData() {
            if (typeof Storage !== "undefined") {
                const userData = {
                    currentUser,
                    videos,
                    playlists,
                    comments,
                    watchHistory,
                    likedVideos,
                    watchLaterVideos
                };
                // Note: In a real app, you wouldn't store everything in localStorage
                // This is just for demonstration purposes
            }
        }

        function loadUserData() {
            // In a real app, this would load from a server
            // For demo purposes, we'll just initialize with empty data
            watchHistory = [];
            likedVideos = [];
            watchLaterVideos = [];
            playlists = [
                {
                    id: 1,
                    name: "Favorites",
                    description: "My favorite programming tutorials",
                    privacy: "private",
                    videos: [],
                    createdBy: 1,
                    createdAt: new Date()
                }
            ];
        }

        // Event listeners
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchVideos();
            }
        });

        document.getElementById('commentInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addComment();
            }
        });

        // Close modals when clicking outside
        window.addEventListener('click', function(event) {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
            
            const userMenu = document.getElementById('userMenu');
            if (!event.target.closest('.header-icon') && !event.target.closest('.user-menu')) {
                userMenu.style.display = 'none';
            }
        });

        // Responsive behavior
        window.addEventListener('resize', function() {
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.add('collapsed');
                document.getElementById('mainContent').classList.add('expanded');
            } else {
                document.getElementById('sidebar').classList.remove('collapsed');
                document.getElementById('mainContent').classList.remove('expanded');
            }
        });

        // Video player controls
        document.addEventListener('keydown', function(e) {
            const videoPlayer = document.getElementById('videoPlayer');
            const videoElement = document.getElementById('videoElement');
            
            if (videoPlayer.style.display === 'block') {
                switch(e.key) {
                    case ' ':
                        e.preventDefault();
                        if (videoElement.paused) {
                            videoElement.play();
                        } else {
                            videoElement.pause();
                        }
                        break;
                    case 'Escape':
                        closeVideoPlayer();
                        break;
                    case 'ArrowLeft':
                        videoElement.currentTime -= 10;
                        break;
                    case 'ArrowRight':
                        videoElement.currentTime += 10;
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        videoElement.volume = Math.min(1, videoElement.volume + 0.1);
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        videoElement.volume = Math.max(0, videoElement.volume - 0.1);
                        break;
                }
            }
        });

        // Initialize app when page loads
        document.addEventListener('DOMContentLoaded', function() {
            initApp();
            
            // Set initial responsive state
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.add('collapsed');
                document.getElementById('mainContent').classList.add('expanded');
            }
        });

        // Utility functions
        function formatViews(views) {
            if (views >= 1000000) {
                return (views / 1000000).toFixed(1) + 'M';
            } else if (views >= 1000) {
                return (views / 1000).toFixed(1) + 'K';
            }
            return views.toString();
        }

        function formatDuration(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = Math.floor(seconds % 60);
            
            if (hours > 0) {
                return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            }
            return `${minutes}:${secs.toString().padStart(2, '0')}`;
        }

        function formatTimeAgo(date) {
            const now = new Date();
            const diffInSeconds = Math.floor((now - date) / 1000);
            
            if (diffInSeconds < 60) return 'just now';
            if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
            if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
            if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
            if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
            return `${Math.floor(diffInSeconds / 31536000)} years ago`;
        }

        // Auto-save functionality
        setInterval(function() {
            if (currentUser) {
                saveUserData();
            }
        }, 30000); // Save every 30 seconds

        // Performance optimization: Lazy loading for video thumbnails
        function lazyLoadImages() {
            const images = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }

        // Call lazy loading after images are loaded
        setTimeout(lazyLoadImages, 1000);
    