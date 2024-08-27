import { VideoMapCreateShot } from "@/components/menu-item/video_map_create_shot";
import { VideoMapCreateShotSlect } from "@/components/menu-item/video_map_create_shot-select";

const dataVideo = [
    {
        title: "video 1",
        src: "https://ik.imagekit.io/snapmotion/75475-556034323_medium.mp4",
        resourceId: "7415538a-5d61-4a81-ad79-c00689b6cc10",
    },
    {
        title: "video 2",
        src: "https://ik.imagekit.io/snapmotion/flat.mp4",
        resourceId: "7415538a-5do1-4m81-a279-c00689b6cc10",
    },
    {
        title:
            "Video siêu ngắn tổng hợp 36 bàn thắng của Messi tại La Liga 2018/19",
        src: "https://cdn.bongdaplus.vn/assets/Media/2019/05/25/17/messi36ban25052019.mp4",
        resourceId: "7415538a-5d61-4a81-ad79-c00689b6cc11",
    },
    {
        title: "Phát cuồng với những pha rê bóng sỉ nhục các cầu thủ lớn của Messi",
        src: "https://cdn.bongdaplus.vn/assets/Media/2019/05/24/13/messi24052019.mp4",
        resourceId: "7415538a-5do1-4m81-a279-c00689b6cc12",
    },
    {
        title:
            "Điểm tin chuyển nhượng 25/8: Osimhen hét lương khủng với Chelsea; Joao Cancelo sắp sang Saudi Arabia",
        src: "https://ik.imagekit.io/snapmotion/75475-556034323_medium.mp4https://cdn.bongdaplus.vn/assets//Media/2024/08/25/17/chuyen-nhuong-25-8b.mp4",
        resourceId: "7415538a-5d61-4a81-ad79-c00689b6cc13",
    },
    {
        title:
            "Điểm tin chuyển nhượng 23/8: Arsenal có nhà vô địch EURO, MU đón thần đồng châu Phi",
        src: "https://cdn.bongdaplus.vn/assets//Media/2024/08/23/13/diem-tin-chuyen-nhuong-23-8.mp4",
        resourceId: "7415538a-5do1-4m81-a279-c00689b6cc14",
    },
    {
        title:
            "Tài năng trẻ Zirkzee trừng phạt sai lầm của thủ môn đối phương (Bayern 1-0 M'gladbach)",
        src: "https://cdn.bongdaplus.vn/assets//Media/2020/06/14/17/bam1-014062020.mp4",
        resourceId: "7415538a-5d61-4a81-ad79-c00689b6cc15",
    },
    {
        title:
            "VIDEO Nực cười xem lại tình huống Zirkzee phá hỏng bàn thắng của Garnacho",
        src: "https://cdn.bongdaplus.vn/assets//Media/2024/08/25/17/zirkzee-truot-chan-vo-duyen.mp4",
        resourceId: "7415538a-5do1-4m81-a279-c00689b6cc16",
    },
    {
        title:
            "Kinh ngạc trước cú sút 'bóng sống' từ khoảng cách 30m của Granit Xhaka",
        src: "https://cdn.bongdaplus.vn/assets//Media/2024/08/24/17/granitxhaka-ghi-ban.mp4",
        resourceId: "7415538a-5d61-4a81-ad79-c00689b6cc17",
    },
    {
        title:
            "Kinh ngạc trước cú sút 'bóng sống' từ khoảng cách 30m của Granit Xhaka",
        src: "https://cdn.bongdaplus.vn/assets//Media/2024/08/24/17/granitxhaka-ghi-ban.mp4",
        resourceId: "7415538a-5d61-4a81-ad79-c00689b6cc18",
    },
];
export default function SearchSelectVideo() {
    return (

        <div className="flex">
            {/* <div>result search</div> */}
            <div className="container mx-auto py-8 flex flex-col flec-1">
                <h1 className="text-3xl font-bold mb-4">shot video</h1>

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-2">Tìm kiếm video</h2>
                    <div className="flex">
                        <input type="text" className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring focus:border-blue-500" placeholder="Tìm kiếm video..." />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-r">Tìm kiếm</button>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-2">Kết quả tìm kiếm</h2>
                    <div className="flex overflow-x-auto space-x-4">
                        {
                            dataVideo.map((video, index) => (
                                <div className="bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0 mb-2 w-64 h-36 relative group">
                                    <div
                                        // onClick={() => addItem({ url: video.src, id: video.resourceId })}
                                        key={index}
                                        className="relative cursor-pointer w-full h-auto rounded-lg overflow-hidden w-[100%] h-[100%] object-cover group-hover:opacity-50 transition-opacity duration-300"
                                    >
                                        <video src={video.src} />
                                    </div>
                                    {/* <img src="https://via.placeholder.com/300x200" alt={video.title} className="w-[100%] h-[100%] object-cover group-hover:opacity-50 transition-opacity duration-300" /> */}
                                    <div className="p-4 absolute top-[100%] left-0 bg-white w-[100%] group-hover:translate-y-[-100%] transition-transform duration-300">
                                        <h3 className="text-lg font-bold mb-2 text-black line-clamp-2">{video.title}</h3>
                                        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded">Chọn</button> */}
                                    </div>
                                    <input type="checkbox" name="select" id="select_video" className="absolute bottom-1.5 right-1.5 z-[100]"
                                    // onChange={() => handleCheckboxChange(video.resourceId)}
                                    />
                                </div>
                            ))
                        }


                        {/* <div className="bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0 mb-2">
                            <img src="https://via.placeholder.com/300x200" alt="Video 2" className="w-64 h-36 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Video 2</h3>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded">Chọn</button>
                            </div>
                        </div>
                        */}
                    </div>
                </div>

                <div className="flex-1 flex-col overflow-hidden">
                    <h2 className="text-xl font-bold mb-2">Video đã chọn</h2>
                    <div className="flex-1  overflow-y-auto">
                    <div className="flex  flex-wrap overflow-y-auto ">
                        {
                            dataVideo.map((video, index) => (
                                <div className="w-[20%] p-2">

                                <div className="bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0 mb-2 w-64 h-36 relative group">
                                    <div
                                        // onClick={() => addItem({ url: video.src, id: video.resourceId })}
                                        key={index}
                                        className="relative cursor-pointer w-full h-auto rounded-lg overflow-hidden w-[100%] h-[100%] object-cover group-hover:opacity-50 transition-opacity duration-300"
                                    >
                                        <video src={video.src} />
                                    </div>
                                    {/* <img src="https://via.placeholder.com/300x200" alt={video.title} className="w-[100%] h-[100%] object-cover group-hover:opacity-50 transition-opacity duration-300" /> */}
                                    <div className="p-4 absolute top-[100%] left-0 bg-white w-[100%] group-hover:translate-y-[-100%] transition-transform duration-300">
                                        <h3 className="text-lg font-bold mb-2 text-black line-clamp-2">{video.title}</h3>
                                        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded">Chọn</button> */}
                                    </div>
                                    
                                </div>
                                </div>
                            ))
                        }
                       


                        {/* <div className="bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0 mb-2">
                            <img src="https://via.placeholder.com/300x200" alt="Video 2" className="w-64 h-36 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Video 2</h3>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded">Chọn</button>
                            </div>
                        </div>
                        */}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}