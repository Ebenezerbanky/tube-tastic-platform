import { Home, Compass, PlaySquare, Clock, ThumbsUp, Folder, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isCollapsed: boolean;
  className?: string;
}

const sidebarItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Compass, label: "Explore", href: "/explore" },
  { icon: PlaySquare, label: "Subscriptions", href: "/subscriptions" },
];

const libraryItems = [
  { icon: Folder, label: "Library", href: "/library" },
  { icon: Clock, label: "Watch Later", href: "/watch-later" },
  { icon: ThumbsUp, label: "Liked Videos", href: "/liked" },
];

export const Sidebar = ({ isCollapsed, className }: SidebarProps) => {
  return (
    <div className={cn(
      "bg-card border-r border-border transition-all duration-300",
      isCollapsed ? "w-20" : "w-64",
      className
    )}>
      <div className="p-4 space-y-4">
        {/* Main Navigation */}
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className={cn(
                "w-full justify-start h-10 font-normal",
                isCollapsed ? "px-3" : "px-4"
              )}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span className="ml-3">{item.label}</span>}
            </Button>
          ))}
        </div>

        {!isCollapsed && (
          <>
            <Separator />
            
            {/* Library Section */}
            <div className="space-y-1">
              <h3 className="px-4 text-sm font-medium text-muted-foreground mb-2">
                Library
              </h3>
              {libraryItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className="w-full justify-start h-10 px-4 font-normal"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="ml-3">{item.label}</span>
                </Button>
              ))}
            </div>

            <Separator />

            {/* Subscriptions */}
            <div className="space-y-1">
              <h3 className="px-4 text-sm font-medium text-muted-foreground mb-2">
                Subscriptions
              </h3>
              {[
                "Tech Channel",
                "Cooking Mastery",
                "Nature Explorer",
                "Gaming Pro"
              ].map((channel) => (
                <Button
                  key={channel}
                  variant="ghost"
                  className="w-full justify-start h-10 px-4 font-normal"
                >
                  <User className="h-5 w-5" />
                  <span className="ml-3">{channel}</span>
                </Button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};