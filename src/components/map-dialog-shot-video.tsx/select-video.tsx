import { VideoMapCreateShot } from "../menu-item/video_map_create_shot";
import { VideoMapCreateShotSlect } from "../menu-item/video_map_create_shot-select";

export default function SelectVideo(){
    return (
        <div
        data-dialog="dialog"
        className="relative m-4 w-2/5 min-w-[80%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
    >
        <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900 flex-col text-black">
            Shot video
        </div>

        <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900 text-black align-items-center gap-4">
            <div className="flex items-center ">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-700">Chọn video</span>
            </div>
            <div className="flex items-center ">
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2"></div>
                <span className="text-gray-400">Cấu hình</span>
            </div>
            <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2"></div>
                <span className="text-gray-400">Kết thúc</span>
            </div>
        </div>
        <div
            className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500"
        >
            <div className="min-h-[480px] max-h-[600px] overflow-y-auto flex gap-8">
                <VideoMapCreateShot />
                <VideoMapCreateShotSlect />
            </div>
        </div>
        <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
            <button
                data-ripple-dark="true"
                data-dialog-close="true"
                className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                Hủy
            </button>
            <button
                data-ripple-light="true"
                data-dialog-close="true"
                className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                Tiếp tục
            </button>
        </div>
    </div>
    )
}