import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { VideoCard } from "@/components/VideoCard";
import { mockVideos } from "@/data/mockData";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleVideoClick = (videoId: string) => {
    navigate(`/watch/${videoId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <div className="flex">
        <Sidebar isCollapsed={sidebarCollapsed} />
        
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockVideos.map((video) => (
              <VideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnail={video.thumbnail}
                channelName={video.channelName}
                channelAvatar={video.channelAvatar}
                views={video.views}
                uploadDate={video.uploadDate}
                duration={video.duration}
                onClick={() => handleVideoClick(video.id)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
