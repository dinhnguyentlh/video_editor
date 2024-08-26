import { useState, useCallback, useEffect } from "react";
import { ADD_VIDEO, dispatcher } from "@designcombo/core";
import { nanoid } from "nanoid";
import { video_mock } from "@/constants/api-video-mock"
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Icons } from "../shared/icons";

// Tạo hàm debounce
const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const Videos = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredVideos, setFilteredVideos] =
    useState<typeof video_mock>(video_mock);

  // Hàm tìm kiếm không dấu
  const searchVideos = useCallback((term: string) => {
    const lowercasedTerm = term.toLowerCase();
    const results = video_mock.filter((video) => {
      console.log("video", video.title);
      return video.title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(
          lowercasedTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        );
    });
    setFilteredVideos(results);
  }, []);

  const debouncedSearch = useCallback(debounce(searchVideos, 300), [
    searchVideos,
  ]);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log({ eve: event.key });
    if (event.key === "Enter") {
      searchVideos(searchTerm);
    }
  };

  const addItem = useCallback(({ url, id }: { url: string; id: string }) => {
    dispatcher?.dispatch(ADD_VIDEO, {
      payload: {
        id: nanoid(),
        details: {
          src: url,
        },
        metadata: {
          resourceId: id,
        },
      },
      options: {},
    });
  }, []);

  return (
    <div className="absolute h-full overflow-hidden flex flex-col">
      <div className="text-md text-[#e4e4e7] font-medium h-11 border-b border-border flex items-center px-4 text-muted-foreground">
        Videos
      </div>
      <div className="grid grid-cols-1 items-center gap-2 m-2">
        <input
          type="text"
          placeholder="search..."
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "#222222",
            padding: "4px 8px",
          }}
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      </div>
      <ScrollArea className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 items-center gap-2 m-2">
          {filteredVideos.map((video, index) => (
            <label
              id="select_video"
              onClick={() => addItem({ url: video.src, id: video.resourceId })}
              key={index}
              className="relative cursor-pointer w-full h-auto rounded-lg overflow-hidden"
            >
              <video src={video.src} />
              <div>
              <input type="checkbox" name="select" id="select_video" className="absolute bottom-1.5 right-1.5"/>
              </div>
            </label>
          ))}
        </div>
      </ScrollArea>
      <Button
        size="icon"
        variant="ghost"
        className="absolute  bottom-[-40px] left-0 w-full transform -translate-x-0 transform -translate-y-0 z-10  bg-black"
      >
        <Icons.upload width={20} />
      </Button>
    </div>
  );
};