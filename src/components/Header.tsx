import { Search, Menu, Mic, Video, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <Video className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">TubeTastic</span>
        </div>
      </div>

      {/* Center Section - Search */}
      <div className="flex-1 max-w-2xl mx-8">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Input
              placeholder="Search"
              className="h-10 pl-4 pr-12 rounded-l-full rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:border-muted-foreground"
            />
          </div>
          <Button
            variant="outline"
            className="h-10 px-6 rounded-r-full rounded-l-none border-l-0 bg-muted hover:bg-muted/80"
          >
            <Search className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full ml-2"
          >
            <Mic className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <Video className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder-avatar.jpg" />
          <AvatarFallback>
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};