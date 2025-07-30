import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  channelName: string;
  channelAvatar: string;
  views: number;
  uploadDate: Date;
  duration: string;
  onClick: () => void;
}

export const VideoCard = ({
  title,
  thumbnail,
  channelName,
  channelAvatar,
  views,
  uploadDate,
  duration,
  onClick,
}: VideoCardProps) => {
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
    <Card 
      className="group cursor-pointer bg-card border-none shadow-none hover:bg-muted/50 transition-colors duration-200"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video object-cover rounded-lg"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
          {duration}
        </div>
      </div>
      
      <div className="flex gap-3 p-3">
        <Avatar className="w-9 h-9 mt-1">
          <AvatarImage src={channelAvatar} alt={channelName} />
          <AvatarFallback>{channelName[0]}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm line-clamp-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{channelName}</p>
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <span>{formatViews(views)} views</span>
            <span>•</span>
            <span>{formatDistanceToNow(uploadDate, { addSuffix: true })}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};