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
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1280&h=720&fit=crop&crop=center",
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
    thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1280&h=720&fit=crop&crop=center",
    channelName: "Photo Adventures",
    channelAvatar: "/api/placeholder/40/40",
    views: 678000,
    uploadDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
    duration: "22:11",
    description: "Complete guide to wildlife photography in national parks with professional tips and techniques."
  },
  {
    id: "7",
    title: "Ocean Waves Relaxation - 4K Nature Sounds for Sleep",
    thumbnail: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1280&h=720&fit=crop&crop=center",
    channelName: "Nature Sounds",
    channelAvatar: "/api/placeholder/40/40",
    views: 2100000,
    uploadDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    duration: "60:00",
    description: "Relaxing ocean waves for meditation, sleep, and stress relief. Perfect background sounds."
  },
  {
    id: "8",
    title: "Desert Photography Masterclass - Capturing Sand Dunes",
    thumbnail: "https://images.unsplash.com/photo-1482938289607-d4a9ddbe4151?w=1280&h=720&fit=crop&crop=center",
    channelName: "Desert Explorer",
    channelAvatar: "/api/placeholder/40/40",
    views: 89000,
    uploadDate: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    duration: "16:42",
    description: "Learn the art of desert photography with stunning sand dune compositions and lighting techniques."
  },
  {
    id: "9",
    title: "Forest Sunbeam Photography - Golden Hour Magic",
    thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1280&h=720&fit=crop&crop=center",
    channelName: "Forest Films",
    channelAvatar: "/api/placeholder/40/40",
    views: 445000,
    uploadDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
    duration: "19:33",
    description: "Capture the magical golden hour sunbeams in forest photography with these pro techniques."
  },
  {
    id: "10",
    title: "Night Sky Photography - Capturing Stars & Milky Way",
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1280&h=720&fit=crop&crop=center",
    channelName: "Astro Photographer",
    channelAvatar: "/api/placeholder/40/40",
    views: 567000,
    uploadDate: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
    duration: "28:15",
    description: "Complete guide to astrophotography - equipment, settings, and post-processing for stunning night sky shots."
  },
  {
    id: "11",
    title: "Wild Sheep Migration - Amazing Nature Documentary",
    thumbnail: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=1280&h=720&fit=crop&crop=center",
    channelName: "Wildlife World",
    channelAvatar: "/api/placeholder/40/40",
    views: 1500000,
    uploadDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    duration: "42:18",
    description: "Follow the incredible journey of wild sheep during their seasonal migration across mountain ranges."
  },
  {
    id: "12",
    title: "Cute Cats Compilation - Funniest Cat Videos 2024",
    thumbnail: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=1280&h=720&fit=crop&crop=center",
    channelName: "Funny Pets",
    channelAvatar: "/api/placeholder/40/40",
    views: 3200000,
    uploadDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    duration: "14:27",
    description: "The cutest and funniest cat moments that will make your day! Subscribe for more pet content."
  }
];