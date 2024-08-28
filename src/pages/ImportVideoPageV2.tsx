import { Icons } from "@/components/shared/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function ImportVideoPageV2() {
    const [videos, setVideos] = useState([]);
    const [isUploaded, setIsUploaded] = useState(false);
    const [size, setSize] = useState<number>(10)


    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const videoFiles = files.map((file: any) => URL.createObjectURL(file));
        setVideos((prevVideos) => [...prevVideos, ...videoFiles]);
        setIsUploaded(true);
    };
    console.log({ size })
    return (
        <div className="h-screen p-16 bg-slate-800">
            <div className=" flex flex-col  border h-full ">

                <div className="flex flex-1 overflow-hidden">


                    <div className="w-4/5 p-4 h-full border-r   flex flex-col  ">
                        <h2 className="text-lg font-semibold mb-4">Danh sách Video</h2>
                        <ScrollArea className="flex-1 overflow-y-auto">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  flex-1  ">
                                <div className="   cursor-pointer w-full  rounded">
                                    <div className="relative w-full rounded border-blue-500  overflow-hidden" style={{ paddingTop: "56.25%", border: "2px dashed #808080" }}>

                                        <label htmlFor="file-upload" className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                            <Icons.add size={50} />
                                            <input
                                                type="file"
                                                accept="video/*"
                                                multiple
                                                onChange={handleFileChange}
                                                className="hidden"
                                                id="file-upload"
                                            />
                                        </label>
                                    </div>
                                </div>
                                {videos.map((video, index) => (
                                    <div key={index} className="  hover:bg-gray-200 cursor-pointer w-full  border border-gray-500 rounded">
                                        <div className="relative w-full rounded border-blue-500  overflow-hidden" style={{ paddingTop: "56.25%" }}>

                                            <video className="absolute top-0 left-0 w-full h-full">
                                                <source src={video} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        {/* <div className="flex justify-center pt-4">
                            <input
                                type="file"
                                accept="video/*"
                                multiple
                                onChange={handleFileChange}
                                className="hidden"
                                id="file-upload"
                            />
                            <label htmlFor="file-upload" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
                                Import
                            </label>
                        </div> */}
                    </div>



                    <div className="w-1/5 p-4 border-t border-r flex flex-col items-center">
                        <h2 className="text-lg font-semibold mb-4">Thông số Cấu hình</h2>
                        <div className="grid grid-cols-1 gap-4 flex-1">
                            <div>
                                <label className="block mb-1 ">Kích thước:</label>
                                <input type="number" className="border p-2 w-full text-black" value={size} onChange={(e: any) => setSize(e.target.value)} />
                            </div>

                        </div>
                        {isUploaded ? <button className="bg-green-500 max-w-[100px] text-white px-4 py-2 rounded hover:bg-green-600">
                            Process
                        </button> : ""}
                    </div>

                </div>

                {/* {isUploaded ? <div className=" flex mb-4  mt-4 justify-center items-center w-full gap-8">
                    <input
                        type="file"
                        accept="video/*"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                    />
                    <label htmlFor="file-upload" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
                        Import
                    </label>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Process
                    </button>
                </div> : ''} */}
            </div>
        </div>
    );
};
