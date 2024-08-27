import { useState } from "react";

export default function SetupshotVideo(){
    const [aspectRatio, setAspectRatio] = useState('16:9');
  const [videoWidth, setVideoWidth] = useState(1280);
  const [videoHeight, setVideoHeight] = useState(720);
  const [videoDuration, setVideoDuration] = useState(60);
  const [outputFormat, setOutputFormat] = useState('mp4');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Aspect Ratio:', aspectRatio);
    console.log('Video Width:', videoWidth);
    console.log('Video Height:', videoHeight);
    console.log('Video Duration:', videoDuration);
    console.log('Output Format:', outputFormat);
    // You can add your own logic here to save the configuration or do something with the values
  };

  return (
    <div className="font-sans m-4 md:m-8 text-black">
      <h1 className="text-2xl font-bold text-center mb-8 text-white">Video Editor Configuration</h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="aspect-ratio" className="block font-bold mb-2 text-white">Aspect Ratio:</label>
          <select
            id="aspect-ratio"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md"
            value={aspectRatio}
            onChange={(e) => setAspectRatio(e.target.value)}
          >
            <option value="16:9">16:9</option>
            <option value="9:16">9:16</option>
            <option value="1:1">1:1</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="video-width" className="block font-bold mb-2 text-white">Video Width:</label>
          <input
            type="number"
            id="video-width"
            min="320"
            max="1920"
            value={videoWidth}
            onChange={(e) => setVideoWidth(Number(e.target.value))}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="video-height" className="block font-bold mb-2 text-white">Video Height:</label>
          <input
            type="number"
            id="video-height"
            min="240"
            max="1080"
            value={videoHeight}
            onChange={(e) => setVideoHeight(Number(e.target.value))}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="video-duration" className="block font-bold mb-2 text-white">Video Duration (seconds):</label>
          <input
            type="number"
            id="video-duration"
            min="1"
            max="3600"
            value={videoDuration}
            onChange={(e) => setVideoDuration(Number(e.target.value))}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="output-format" className="block font-bold mb-2 text-white">Output Format:</label>
          <select
            id="output-format"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md"
            value={outputFormat}
            onChange={(e) => setOutputFormat(e.target.value)}
          >
            <option value="mp4">MP4</option>
            <option value="avi">AVI</option>
            <option value="mkv">MKV</option>
          </select>
        </div>
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">Save Configuration</button>
      </form>
    </div>
  );
};
