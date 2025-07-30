import { useParams } from "react-router-dom";
import { VideoPlayer } from "@/components/VideoPlayer";
import { VideoCard } from "@/components/VideoCard";
import { mockVideos } from "@/data/mockData";
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { formatDistanceToNow } from "date-fns";

const Watch = () => {
  const { id } = useParams();
  const video = mockVideos.find(v => v.id === id);
  const relatedVideos = mockVideos.filter(v => v.id !== id).slice(0, 4);

  if (!video) {
    return <div className="p-8 text-center">Video not found</div>;
  }

  const formatViews = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <div className="flex gap-6 p-6 max-w-7xl mx-auto">
      {/* Main Content */}
      <div className="flex-1">
        {/* Video Player */}
        <VideoPlayer
          thumbnail={video.thumbnail}
          title={video.title}
        />

        {/* Video Info */}
        <div className="mt-4">
          <h1 className="text-xl font-bold mb-3">{video.title}</h1>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">
                {formatViews(video.views)} views • {formatDistanceToNow(video.uploadDate, { addSuffix: true })}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <ThumbsUp className="h-4 w-4" />
                123K
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <ThumbsDown className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Share className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
              <Button variant="outline" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Separator />

          {/* Channel Info */}
          <div className="flex items-start gap-4 py-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={video.channelAvatar} alt={video.channelName} />
              <AvatarFallback>{video.channelName[0]}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-semibold">{video.channelName}</h3>
                <Button variant="default" size="sm">
                  Subscribe
                </Button>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                1.2M subscribers
              </p>
              <p className="text-sm leading-relaxed">
                {video.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Related Videos */}
      <div className="w-96">
        <h3 className="font-semibold mb-4">Related Videos</h3>
        <div className="space-y-4">
          {relatedVideos.map((relatedVideo) => (
            <div key={relatedVideo.id} className="flex gap-3">
              <div className="relative w-40 flex-shrink-0">
                <img
                  src={relatedVideo.thumbnail}
                  alt={relatedVideo.title}
                  className="w-full aspect-video object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                />
                <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
                  {relatedVideo.duration}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium line-clamp-2 mb-1 cursor-pointer hover:text-primary">
                  {relatedVideo.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-1">
                  {relatedVideo.channelName}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatViews(relatedVideo.views)} views • {formatDistanceToNow(relatedVideo.uploadDate, { addSuffix: true })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;