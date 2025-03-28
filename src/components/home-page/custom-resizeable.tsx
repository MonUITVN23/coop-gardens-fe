"use client";

import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

interface ResizableProps {
  textSize?: string;  
  text?: string;      
  imageUrl?: string;  
}

export function CustomResizable({ 
  textSize = "text-4xl", 
  text = "Tổng hợp phương pháp làm vườn hiệu quả tại chuỗi cung ứng khoai tây lớn nhất Đà Lạt",
  imageUrl = "https://www.danielleskosky.com/wp-content/uploads/media-uploads/laptop-screen-blog.jpg"
}: ResizableProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-[200px] w-full h-full rounded-lg border overflow-hidden"
      >
        <ResizablePanel 
          defaultSize={80} 
          style={{ flexGrow: isHovered ? 20 : 80 }}
          className="transition-all duration-500"
        >
          <div 
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${imageUrl}')` }}
          />
        </ResizablePanel>
        <ResizableHandle />
        
        <ResizablePanel 
          defaultSize={20} 
          style={{ flexGrow: isHovered ? 80 : 20 }}
          className="transition-all duration-500"
        >
          <div className="flex h-full items-center justify-center p-6 bg-green-400 bg-opacity-30 text-white">
            <span className={`font-bold ${textSize} line-clamp-2 overflow-hidden leading-relaxed`}>
              {text}
            </span>
          </div>
        </ResizablePanel> 
      </ResizablePanelGroup>
    </div>
  );
}
