import Navbar from "@/components/navbar";
import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
// import processVideos from "@/utils/processVideos";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function ImportVideoPage() {
    const navigate = useNavigate();
    const [videos, setVideos] = useState([]);
    const [isUploaded, setIsUploaded] = useState(false);
    const [size, setSize] = useState<number>(10)
    useEffect(() => {
        document.title = "import video";
    }, []);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const videoFiles = files.map((file: any) => ({
            file: URL.createObjectURL(file),
            cuts: [{ start: '00:00:10', end: '00:00:20' }, { start: '00:01:00', end: '00:01:10' }]
        }));
        setVideos((prevVideos) => [...prevVideos, ...videoFiles]);
        setIsUploaded(true);
    };
    console.log({ videos })
    // processVideos([{path:}])
    return (
        <div className="h-screen p-8 relative flex flex-col pt-0">
            <Navbar />
            {/* <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">import video</a>
                        </div>
                    </li>

                </ol>
            </nav> */}
            {/* <h1 className="absolute top-2 left-1/2 flex items-center justify-center  font-bold text-gray-50 mb-4 font-mono" ><Button size="sm" variant="secondary">
                        import video
                    </Button></h1> */}

            <div className=" flex flex-col h-full ">

                <div className="flex flex-1 overflow-hidden h-full">
                    <div className="w-4/5 p-4 ">
                        <div className="designcombo_scene_viewer rounded-lg">

                            {isUploaded ?
                                (


                                    <div className="h-full flex flex-col border   h-full rounded-lg  p-4 overflow-hidden">

                                        <h2 className="text-lg font-semibold mb-4">Danh sách Video</h2>
                                        <ScrollArea className="flex-1 overflow-y-auto">
                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  flex-1  ">
                                                <div className="   cursor-pointer w-full  rounded">
                                                    <div className="relative w-full rounded border-blue-500  overflow-hidden" style={{ paddingTop: "56.25%", border: "2px dashed #808080" }}>

                                                        <label htmlFor="file-upload" className="absolute top-0 left-0 w-full h-full flex items-center justify-center   cursor-pointer ">
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
                                                    <div key={index} className="  hover:bg-gray-200 cursor-pointer w-full  border border-gray-500 rounded-lg">
                                                        <div className="relative w-full rounded-lg border-blue-500  overflow-hidden" style={{ paddingTop: "56.25%" }}>

                                                            <video className="absolute top-0 left-0 w-full h-full"  >
                                                                <source src={video.file} type="video/mp4" />
                                                            </video>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </ScrollArea>
                                        {/* <div className="flex justify-center pt-4 ">
                                            <input
                                                type="file"
                                                accept="video/*"
                                                multiple
                                                onChange={handleFileChange}
                                                className="hidden"
                                                id="file-upload"
                                            />
                                            <label htmlFor="file-upload" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                                                Import
                                            </label>
                                        </div> */}
                                    </div>




                                ) :
                                <div className="h-full  flex flex-col items-center justify-center border   h-full rounded-lg ">
                                    <input
                                        type="file"
                                        accept="video/*"
                                        multiple
                                        onChange={handleFileChange}
                                        className="hidden"
                                        id="file-upload"
                                    />
                                    <label htmlFor="file-upload" className="text-white px-4 py-2 rounded-lg cursor-pointer">
                                        <Icons.CloudUploadIcon width={200} color="gray" />
                                    </label>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-1/5 p-4  ">
                        <div className="designcombo_scene_viewer rounded-lg">

                            <div className="flex flex-col items-center border   h-full rounded-lg  p-4">

                                <h2 className="font-semibold mb-4 text-3xl">Thông số cấu hình</h2>
                                <div className="flex flex-col items-center  w-full   h-full rounded-lg  p-4">
                                    <h2 className="text-2xl font-semibold mb-4 w-full">Thời lượng</h2>

                                    <div className="w-full  flex justify-start gap-4 mb-3">
                                        <div className="w-full md:w-1/2  mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-200 text-lg font-bold mb-2" htmlFor="mm">
                                                Phút
                                            </label>
                                            <input className=" bg-gray-700 appearance-none block w-full  text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  text-lg" id="mm" type="number" placeholder="Số phút" min="0" max="59" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-200 text-lg font-bold mb-2" htmlFor="ss">
                                                Giây
                                            </label>
                                            <input className=" bg-gray-700 appearance-none block w-full  text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  text-lg" id="ss" type="number" placeholder="Số giây" min="0" max="59" />
                                        </div>

                                    </div>
                                    <h2 className="text-2xl font-semibold mb-4 w-full">Tiêu đề</h2>

                                    <div className="w-full  flex justify-start gap-4 mb-3">

                                        <input className=" bg-gray-700 appearance-none block w-full  text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  text-lg" id="ss" type="text" placeholder="Tiêu đề video..." min="0" max="59" />

                                    </div>
                                    <h2 className="text-2xl font-semibold mb-4 w-full ">Mô tả</h2>

                                    <div className="w-full flex-1 flex justify-start gap-4 mb-3">

                                        <textarea className="bg-gray-700 appearance-none block w-full  text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  text-lg" id="ss" placeholder="Mô tả video..." />

                                    </div>
                                    <h2 className="text-2xl font-semibold mb-4 w-full">Kích thước</h2>
                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {/* <option selected>Choose a country</option> */}
                                        <option selected value="US">16:9</option>
                                        <option value="CA">1:1</option>
                                        <option value="FR">9:16</option>
                                        <option value="DE">4:3</option>
                                    </select>

                                </div>

                                {isUploaded ? <button
                                    onClick={() => {
                                        console.log("cut video")
                                        navigate('/video-full');
                                        // processVideos(videos)
                                    }}
                                    className="bg-green-500 max-w-[200px] text-white px-4 py-2 rounded-lg hover:bg-green-600">
                                    Tạo short video
                                </button> : ""}
                            </div>
                        </div>
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
                    <label htmlFor="file-upload" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                        Import
                    </label>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                        Process
                    </button>
                </div> : ''} */}
            </div>
        </div>
    );
};
