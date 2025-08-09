# XP Videos - A Video Platform Frontend Prototype

This project is a feature-rich, responsive frontend prototype for a modern video-sharing platform, built entirely with HTML, CSS, and vanilla JavaScript. It serves as a visual and interactive demonstration of what the final application could look like, simulating many core features of a real-world video site.

## Features

The current prototype includes a wide range of simulated features:

### Core User Experience
- **Responsive Design:** The layout adapts smoothly to different screen sizes, from desktops to mobile devices.
- **Dynamic Video Grid:** A main view that displays video cards in a clean, responsive grid.
- **Custom Video Player:** A modal-based video player that appears over the content, featuring:
    - Custom video controls (play/pause, seek, volume via keyboard shortcuts).
    - Display of video title, views, and like counts.
    - A "Related Videos" sidebar for continuous discovery.
- **Interactive Sidebar:** A collapsible navigation sidebar for accessing different sections of the site.
- **Search Functionality:** A search bar in the header to filter videos by title, channel, or description.

### User & Content Interaction (Simulated)
- **User Authentication:** A complete, simulated user system with modals for Sign In and Sign Up.
- **Personalized Experience:** Once "logged in," the UI updates to show the user's initial and provides access to user-specific actions.
- **Video Upload:** A modal and form for "uploading" new videos.
- **Liking Videos:** Users can like/unlike videos, with the like count updating in real-time.
- **Commenting System:** A dedicated comments section below the video player where users can post comments.
- **Playlist Management:**
    - Create new playlists with a name, description, and privacy settings.
    - Add videos to existing playlists from the video player.
- **Content Sections:** Navigation links for simulated sections like History, Liked Videos, Watch Later, and Subscriptions.

## How to Run

This is a pure frontend prototype. No build process or server is required.

1.  Clone or download the project files.
2.  Open the `index.html` file directly in any modern web browser (like Chrome, Firefox, or Edge).

## Project Structure

- `index.html`: The main file containing the entire HTML structure, all JavaScript logic, and sample data.
- `style.css`: The stylesheet that defines the visual appearance, layout, and responsiveness of the application.
- `images/`: A folder containing the thumbnail images used for the sample videos.

## Technical Stack

- **HTML5:** For the structure and semantics of the web page.
- **CSS3:** For all styling, including layout (Flexbox/Grid), theming (CSS Variables), and responsiveness.
- **Vanilla JavaScript (ES6+):** For all interactivity, state management, and DOM manipulation. No external libraries or frameworks are used.

## Path to Production

This prototype is an excellent foundation. To turn it into a full, production-ready application, the following backend components would need to be built:

1.  **Backend Server & API:** An application (e.g., using Node.js, Python, Go) to handle business logic.
2.  **Database:** A system (e.g., PostgreSQL, MongoDB) to permanently store user data, video metadata, comments, etc.
3.  **User Authentication:** A secure system for managing user accounts, passwords, and sessions.
4.  **Video Processing & Storage:** A robust pipeline for uploading, transcoding (converting to different resolutions), and storing video files in a cloud service like AWS S3.
5.  **Frontend/Backend Integration:** Refactoring the JavaScript to make API calls to the backend instead of using the current hardcoded sample data.