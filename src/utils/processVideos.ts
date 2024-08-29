import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import { CloudCog } from 'lucide-react';



const processVideos = async (videos) => {
    const ffmpeg = new FFmpeg();
    console.log("video funcyi", videos)
    const baseURL = "https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/esm";
    ffmpeg.on('log', ({ message }) => {
        console.log(message);
    });
    console.log("us us22222222222",await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"), await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm"
    ),await toBlobURL(
        `${baseURL}/ffmpeg-core.worker.js`,
        "text/javascript"
    ))
    await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
        wasmURL: await toBlobURL(
            `${baseURL}/ffmpeg-core.wasm`,
            "application/wasm"
        ),
        workerURL: await toBlobURL(
            `${baseURL}/ffmpeg-core.worker.js`,
            "text/javascript"
        ),
    });
    console.log("us s")
    const outputFiles = [];

    // Cắt từng video
    for (const video of videos) {
        const { file, cuts } = video;
        console.log({ file, cuts })

        // Tải video lên FFmpeg
        ffmpeg.writeFile(file, await fetchFile(file));

        for (const cut of cuts) {
            const outputFileName = `${file.split('/').pop().split('.')[0]}_cut_${cut.start}_${cut.end}.mp4`;
            const command = `-i ${file} -ss ${cut.start} -to ${cut.end} -c copy ${outputFileName}`;
            await ffmpeg.exec([...command.split(' ')]);
            outputFiles.push(outputFileName);
        }
    }

    // Gộp các video đã cắt
    const concatList = outputFiles.map((file) => `file '${file}'`).join('\n');
    ffmpeg.writeFile('concat.txt', concatList);
    await ffmpeg.exec(['-f', 'concat', '-safe', '0', '-i', 'concat.txt', '-c', 'copy', 'output_full.mp4']);

    // Lấy video gộp
    const data: any = ffmpeg.readFile('output_full.mp4');

    // Tạo URL cho video gộp
    const videoURL = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
    console.log('Video gộp: ', videoURL);
};

// Gọi hàm với danh sách video
// processVideos(videos);
export default processVideos