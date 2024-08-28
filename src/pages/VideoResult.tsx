import React from 'react';

const VideoResultPage = ({ videoUrl, aspectRatio, videoWidth, videoHeight, videoDuration, outputFormat }) => {
  return (
    <div className="font-sans m-4 md:m-8 text-gray-900">
      <h1 className="text-2xl font-bold text-center mb-8 text-white">Video Editing Results</h1>
      <div className="max-w-4xl mx-auto">
        <div className="aspect-w-16 aspect-h-9">
          <video controls className="w-full h-full">
            <source src={videoUrl} type={`video/${outputFormat}`} />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-6 text-center text-white">
        <div className="flex justify-center space-x-4">
            <a href="/edit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              Edit
            </a>
            <a href="/download" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              Export
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoResultPage;