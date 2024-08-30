import Navbar from "@/components/navbar";
import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";

export default function () {
    useEffect(() => {
        document.title = "VIDEO Nực cười xem lại tình huống Zirkzee phá hỏng bàn thắng của Garnacho";
    }, []);
    return (
        <div className="h-screen p-8 relative flex flex-col pt-0">
            <Navbar/>
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
                            <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">video preview</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">VIDEO Nực cười xem lại tình huống Zirkzee phá hỏng bàn thắng của Garnacho</span>
                        </div>
                    </li>
                </ol>
            </nav> */}
            {/* <h1 className="absolute top-2 left-1/2 flex items-center justify-center  font-bold text-gray-50 mb-4 font-mono" >
                <div className="bg-gray-800  text-white px-4 py-2 rounded-lg flex gap-4 items-center">
                    video preview
                </div>
            </h1> */}
            <div className=" flex-1  flex flex-col h-full ">

                <div className="flex flex-1 overflow-hidden h-full">
                    <div className="w-3/4 p-4 ">
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
                    {/* <div className="w-1/5 p-4  ">
                        <div className="designcombo_scene_viewer rounded-lg">

                            <div className="flex flex-col items-center border   h-full rounded-lg  p-4">

                                <h2 className="text-lg font-semibold mb-4">Chi tiết video</h2>
                                <div className="grid grid-cols-1 gap-4 flex-1">
                                    

                                </div>

                            </div>
                        </div>
                    </div> */}
                    <div className="w-1/4 p-4">
                        <div className="designcombo_scene_viewer rounded-lg">
                            <div className="flex flex-col items-center border h-full rounded-lg p-4">
                                <h2 className="text-lg font-semibold mb-4">Chi tiết video</h2>
                                <ScrollArea className="flex-1 overflow-y-auto w-full">
                                    <div className="flex pt-2 pb-2 ">
                                        <strong className="w-[160px]">Tiêu đề:</strong>
                                        <p className="flex-1">VIDEO Nực cười xem lại tình huống Zirkzee phá hỏng bàn thắng của Garnacho</p>
                                    </div>
                                    <div className="flex pt-2 pb-2 ">
                                        <strong className="w-[160px]">Mô tả:</strong>
                                        <p className="flex-1">Tại trận đấu Brighton 2-1 MU, xuất phát từ tình huống Bruno Fernandes căng ngang cho Garnacho dứt điểm tung lưới Jason Steele. Tuy nhiên, trước khi vào lưới, bóng đã chạm đầu gối của Joshua Zirkzee trong khi tiền đạo người Hà Lan đã ở thế việt vị. Vì vậy, bàn thắng không được công nhận.</p>
                                    </div>
                                    <div className="flex pt-2 pb-2 ">
                                        <strong className="w-[160px]">Thời gian:</strong>
                                        <p className="flex-1">30s</p>
                                    </div>
                                    <div className="flex pt-2 pb-2 ">
                                        <strong className="w-[160px]">Thể loại:</strong>
                                        <p className="flex-1">video bóng đá</p>
                                    </div>
                                    <div className="flex pt-2 pb-2 ">
                                        <strong className="w-[160px]">Ngày phát hành:</strong>
                                        <p className="flex-1">25/08/2024</p>
                                    </div>

                                    {/* <div className="flex pt-2 pb-2 ">
                    <strong className="w-[160px]">Đánh giá:</strong>
                    <p className="flex-1">Đánh giá ở đây</p>
                </div> */}
                                </ScrollArea>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className=" flex justify-end items-center w-full gap-8 p-4 pr-16">

                <button className="bg-gray-500  text-white px-4 py-2 rounded-lg hover:bg-gray-700  hover:scale-90 flex gap-4 items-center">
                    Export
                    <Icons.arrowUpRight size={30} />
                </button>
                <button className="bg-blue-500 flex gap-2 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-90 ">
                    Next
                    <Icons.arrowRight size={30} />
                </button>
            </div>
        </div>
    )
}