import thumbnail1 from "@/assets/thumbnail-1.jpg";
import thumbnail2 from "@/assets/thumbnail-2.jpg";
import thumbnail3 from "@/assets/thumbnail-3.jpg";
import thumbnail4 from "@/assets/thumbnail-4.jpg";

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channelName: string;
  channelAvatar: string;
  views: number;
  uploadDate: Date;
  duration: string;
  description: string;
}

export const mockVideos: Video[] = [
  {
    id: "1",
    title: "Building a Modern Startup Office - Complete Tour & Tips",
    thumbnail: thumbnail1,
    channelName: "Tech Workspace",
    channelAvatar: "/api/placeholder/40/40",
    views: 125000,
    uploadDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    duration: "12:34",
    description: "Take a complete tour of our modern startup office and learn the best practices for creating a productive workspace."
  },
  {
    id: "2",
    title: "Breathtaking Mountain Lake Sunset - 4K Nature Documentary",
    thumbnail: thumbnail2,
    channelName: "Nature Explorer",
    channelAvatar: "/api/placeholder/40/40",
    views: 890000,
    uploadDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    duration: "8:45",
    description: "Experience the most beautiful mountain lake sunset captured in stunning 4K resolution."
  },
  {
    id: "3",
    title: "Master Chef's Secret Pasta Recipe - Italian Cooking Masterclass",
    thumbnail: thumbnail3,
    channelName: "Cooking Mastery",
    channelAvatar: "/api/placeholder/40/40",
    views: 456000,
    uploadDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    duration: "15:22",
    description: "Learn the secret pasta recipe from a master Italian chef with 30 years of experience."
  },
  {
    id: "4",
    title: "Ultimate Gaming Setup 2024 - RGB Beast Build & Review",
    thumbnail: thumbnail4,
    channelName: "Gaming Pro",
    channelAvatar: "/api/placeholder/40/40",
    views: 1200000,
    uploadDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    duration: "18:56",
    description: "The ultimate gaming setup for 2024 featuring the latest RGB components and performance benchmarks."
  },
  {
    id: "5",
    title: "Advanced React Hooks Tutorial - Custom Hooks & Best Practices",
    thumbnail: thumbnail1,
    channelName: "Code Academy",
    channelAvatar: "/api/placeholder/40/40",
    views: 234000,
    uploadDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
    duration: "25:18",
    description: "Deep dive into advanced React hooks patterns and learn how to create powerful custom hooks."
  },
  {
    id: "6",
    title: "Wildlife Photography in National Parks - Complete Guide",
    thumbnail: thumbnail2,
    channelName: "Photo Adventures",
    channelAvatar: "/api/placeholder/40/40",
    views: 678000,
    uploadDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
    duration: "22:11",
    description: "Complete guide to wildlife photography in national parks with professional tips and techniques."
  }
];