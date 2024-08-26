import { useState, useCallback, useEffect } from "react";
import { ADD_VIDEO, dispatcher } from "@designcombo/core";
import { nanoid } from "nanoid";
import { video_mock } from "@/constants/api-video-mock"
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Icons } from "../shared/icons";
import useDataVideos from "@/store/use-data-video-selct";

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

export const VideoMapCreateShot = () => {
  const {setData}=useDataVideos()
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredVideos, setFilteredVideos] = useState<typeof video_mock>(video_mock);
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);

  // Hàm tìm kiếm không dấu
  const searchVideos = useCallback((term: string) => {
    const lowercasedTerm = term.toLowerCase();
    const results = video_mock.filter((video) => {
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
  const handleCheckboxChange = (resourceId: string) => {
    if(selectedVideos.includes(resourceId)){
      setSelectedVideos((prev)=>prev.filter(item=>item!=resourceId))
    }
    else{
      setSelectedVideos(prev=>[...prev,resourceId])
    }
  };
  const handleImport = () => {
    // Lấy danh sách các video đã được chọn
    const selectedVideoItems = filteredVideos.filter((video) => selectedVideos.includes(video.resourceId));
// 
console.log({selectedVideoItems})
    // Gửi các video đã chọn đi
    // selectedVideoItems.forEach(({ src, resourceId }) => {
    //   addItem({ url: src, id: resourceId });
    // });
    setData(selectedVideoItems)
  };

  return (
    <div className=" h-full overflow-hidden flex flex-col w-[50%]">
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
              // onClick={() => addItem({ url: video.src, id: video.resourceId })}
              key={index}
              className="relative cursor-pointer w-full h-auto rounded-lg overflow-hidden"
            >
              <video src={video.src} />
              <div>
              <input type="checkbox" name="select" id="select_video" className="absolute bottom-1.5 right-1.5"
              onChange={() => handleCheckboxChange(video.resourceId)}
              />
              </div>
            </label>
          ))}
        </div>
      </ScrollArea>
      <Button
        size="icon"
        variant="ghost"
        className=" left-0 w-full transform -translate-x-0 transform -translate-y-0 z-10  bg-black h-11 flex flex-col"
          onClick={handleImport}
      >
        <Icons.upload width={20} />
        import
      </Button>
    </div>
  );
};