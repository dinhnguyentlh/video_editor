import Navbar from "@/components/navbar";
import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";
import { video_mock } from "@/constants/api-video-mock";
import { useNavigate } from "react-router-dom";
export default function () {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "VIDEO Nực cười xem lại tình huống Zirkzee phá hỏng bàn thắng của Garnacho";
    }, []);
    return (
        <div className="h-screen p-8 relative flex flex-col pt-0">
            <Navbar />
            <div className=" flex-1  flex flex-col overflow-hidden">

                <div className="flex flex-1 overflow-hidden h-full">
                    <div className="w-[30%] p-4">
                        <ScrollArea className="designcombo_scene_viewer rounded-lg flex flex-col overflow-y-auto">
                            {video_mock.map((video, index) => (
                                <div className="flex items-start  p-4" key={index}>
                                    <div className="w-[50px] pt-4">{index + 1}</div>
                                    <div className="flex flex-1 gap-4 border rounded-lg border-blue-500 p-1 relative">
                                        <div className="relative w-[25%] aspect-[1/1] rounded-lg border-blue-500 overflow-hidden">
                                            <video className="absolute top-0 left-0 w-full h-full object-cover" >
                                                <source src={video.src} type="video/mp4" />
                                            </video>
                                        </div>
                                        <div className="text-sx flex-1">

                                            <div className="text-sx flex-1 mb-4 line-clamp-2" >{video.title}</div>
                                            <div className="text-sx">06:23</div>
                                        </div>
                                        <div className="absolute t-1.5 l-1.5 bg-gray-500 pt-1 pb-1 pl-2 pr-2 rounded-lg">★9.6</div>
                                    </div>
                                </div>
                            ))}
                          
                        </ScrollArea>
                    </div>

                    <div className="w-[40%] p-4 ">
                        <div className="designcombo_scene_viewer rounded-lg p-4">


                            <div className="   w-full   rounded-lg  relative h-full"
                            // style={{ paddingTop: "56.25%" }}
                            >

                                <video className="absolute top-0 left-0 w-full h-full" controls>
                                    <source src={"https://cdn.bongdaplus.vn/assets//Media/2024/08/24/17/granitxhaka-ghi-ban.mp4"} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className="w-[30%] p-4">
                        <div className="designcombo_scene_viewer rounded-lg">
                            <div className="flex flex-col items-center border h-full rounded-lg p-4">
                                <h2 className="text-lg font-semibold mb-4">Chi tiết video</h2>
                                <ScrollArea className="flex-1 overflow-y-auto w-full">
                                    <div className="flex pt-2 pb-2 ">
                                        <strong className="w-[160px]">Tiêu đề:</strong>
                                        <input
                                            type="text"
                                            className="bg-gray-700 flex-1 appearance-none block w-full  text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  text-lg"
                                            defaultValue="VIDEO Nực cười xem lại tình huống Zirkzee phá hỏng bàn thắng của Garnacho"
                                        />
                                    </div>
                                    <div className="flex pt-2 pb-2 ">
                                        <strong className="w-[160px]">Mô tả:</strong>
                                        <textarea
                                            className="bg-gray-700 flex-1 appearance-none block w-full  text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  text-lg"
                                            defaultValue="Tại trận đấu Brighton 2-1 MU, xuất phát từ tình huống Bruno Fernandes căng ngang cho Garnacho dứt điểm tung lưới Jason Steele. Tuy nhiên, trước khi vào lưới, bóng đã chạm đầu gối của Joshua Zirkzee trong khi tiền đạo người Hà Lan đã ở thế việt vị. Vì vậy, bàn thắng không được công nhận."
                                            rows={3}
                                        />
                                    </div>
                                    <div className="flex pt-2 pb-2 ">
                                        <strong className="w-[160px]">Thời gian:</strong>
                                        <p className="flex-1">30s</p> 
                                    </div>
                                    <div className="flex pt-2 pb-2 ">
                                        <strong className="w-[160px]">Thể loại:</strong>
                                        <input
                                            type="text"
                                            className="bg-gray-700 flex-1 appearance-none block w-full  text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  text-lg"
                                            defaultValue="video bóng đá"
                                        />
                                    </div>
                                    <div className="flex pt-2 pb-2 ">
                                        <strong className="w-[160px]">Ngày phát hành:</strong>
                                        <p className="flex-1">25/08/2024</p> 
                                    </div>
                                    <div className="flex pt-2 pb-2 ">
                                        <strong className="w-[160px]">Số sao:</strong>
                                        <p className="flex-1">★★★★</p> 

                                    </div>
                                </ScrollArea>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className=" flex justify-end items-center w-full gap-8 p-4 pr-16">

                <button className="bg-gray-500  text-white px-4 py-2 rounded-lg hover:bg-gray-700  hover:scale-90 flex gap-4 items-center">
                    Export
                    <Icons.downloadArrow size={30} />
                </button>
                <button onClick={()=>   navigate('/clips')} className="bg-blue-500 flex gap-2 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-90 ">
                    Short scenes  result
                    <Icons.arrowRight size={30} />
                </button>
            </div>
        </div>
    )
}