import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";

export default function () {
    return (
        <div className="h-screen p-8 relative flex flex-col">
            <h1 className="absolute top-2 left-1/2 flex items-center justify-center  font-bold text-gray-50 mb-4 font-mono" >
                <Button size="sm" variant="secondary">
                    video preview
                </Button>
            </h1>
            <div className=" flex-1  flex flex-col h-full ">

                <div className="flex flex-1 overflow-hidden h-full">
                    <div className="w-4/5 p-4 ">
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
                    <div className="w-1/5 p-4  ">
                        <div className="designcombo_scene_viewer rounded-lg">

                            <div className="flex flex-col items-center border   h-full rounded-lg  p-4">

                                <h2 className="text-lg font-semibold mb-4">Chi tiết video</h2>
                                <div className="grid grid-cols-1 gap-4 flex-1">
                                    {/* <div>
                                        <label className="block mb-1 ">Kích thước:</label>
                                        <input type="number" className="border p-2 w-full text-black" value={size} onChange={(e: any) => setSize(e.target.value)} />
                                    </div> */}

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className=" flex justify-end items-center w-full gap-8 p-4 pr-16">

                <button className="bg-green-500  text-white px-4 py-2 rounded-lg hover:bg-green-600 flex gap-4 items-center">
                    Export
                    <Icons.CloudDownloadIcon size={50} />
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                    Next
                </button>
            </div>
        </div>
    )
}