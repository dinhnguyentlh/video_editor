import React, { useState } from 'react';
import { Icons } from '@/components/shared/icons';
import { Input } from '@/components/ui/input';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
// import videoFile from './image/2024-07-04 21-22-36.mkv';
import "./Ap.css";
// import nav from "./header"
import Navbar from '@/components/navbar';


function ClipsPage() {
    const [rating, setRating] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    });


    const [events, setEvents] = useState({
        chance: false,
        cornerKick: false,
        goal: false,
        save: false,
        selectVideo: false,
        well: false,
        bad: false,
        sad: false,
        sddave: false,
        sd: false,
        dsds: false,
        adâ: false,
        gdsadoal: false,
        saaad: false,
        dsdsd: false
    });


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;


    const [videoSearchTerm, setVideoSearchTerm] = useState('');
    const [eventSearchTerm, setEventSearchTerm] = useState('');
    const [selectedVideos, setSelectedVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);  // New state for selected video
    const [isDialogOpen, setIsDialogOpen] = useState(false);


    const videos = [{ title: 'Trophy Celebrationssssssssssssssssssss', time: '20:46-20:70', date: 'Aug 03, 2023', length: '00:15', events: 'goal', rating: 4 },
    { title: 'Test', time: '20:44-20:58', date: 'Aug 02, 2024', length: '00:14', events: 'well', rating: 3 },
    { title: 'Epic Goal by Messi', time: '12:34-12:45', date: 'Aug 20, 2024', length: '00:11', events: 'cornerKick', rating: 5 },
    { title: 'Unbelievable Save by Alisson', time: '55:00-55:10', date: 'Aug 21, 2024', length: '00:10', events: 'chance', rating: 4 },
    { title: 'Trophy Celebration', time: '20:46-20:70', date: 'Aug 03, 2023', length: '00:15', events: 'bad', rating: 4 },
    { title: 'Test', time: '20:44-20:58', date: 'Aug 02, 2024', length: '00:14', events: 'cornerKick', rating: 3 },
    { title: 'Epic Goal by Messi', time: '12:34-12:45', date: 'Aug 20, 2024', length: '00:11', events: 'chance', rating: 5 },
    { title: 'ds Save by Alisson', time: '55:00-55:10', date: 'Aug 21, 2024', length: '00:10', events: 'save', rating: 4 },
    { title: 'Test', time: '20:44-20:58', date: 'Aug 02, 2024', length: '00:14', events: 'save', rating: 3 },
    { title: 'Epic Goal by Messi', time: '12:34-12:45', date: 'Aug 20, 2024', length: '00:11', events: 'goal', rating: 5 },
    { title: 'Unbelievable Save by Alisson', time: '55:00-55:10', date: 'Aug 21, 2024', length: '00:10', events: 'bad', rating: 4 },
    { title: 'Trophy Celebration', time: '20:46-20:70', date: 'Aug 03, 2023', length: '00:15', events: 'well', rating: 4 },
    { title: 'Test', time: '20:44-20:58', date: 'Aug 02, 2024', length: '00:14', events: 'selectVideo', rating: 3 },
    { title: 'Epic Goal by Messi', time: '12:34-12:45', date: 'Aug 20, 2024', length: '00:11', events: 'goal', rating: 5 },
    { title: 'Unbelievable Save by Alisson', time: '55:00-55:10', date: 'Aug 21, 2024', length: '00:10', events: 'selectVideo', rating: 4 }
    ]




    const totalPages = Math.ceil(videos.length / itemsPerPage);


    const handleVideoSelect = (index) => {
        setSelectedVideos((prevSelected) => {
            if (prevSelected.includes(index)) {
                setIsDialogOpen(false);
                return prevSelected.filter((item) => item !== index);
            } else {
                setIsDialogOpen(false);
                return [...prevSelected, index];
            }
        });
    };
    const handleVideoClick = (video) => {
        setSelectedVideo(video);
        setIsDialogOpen(true);
    };
    const filteredVideos = videos.filter(video => {
        const ratingMatch = rating[video.rating];
        const eventMatch = Object.keys(events).some(event => events[event] && video.events.includes(event));
        const searchMatch = video.title.toLowerCase().includes(videoSearchTerm.toLowerCase());


        return (ratingMatch || Object.values(rating).every(val => val === false)) &&
            (eventMatch || Object.values(events).every(val => val === false)) &&
            searchMatch;
    });
    const videosToShow = filteredVideos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const handleVideoLoad = (event) => {
        const videoElement = event.target;
        const aspectRatio = videoElement.videoWidth / videoElement.videoHeight;
    
        if (aspectRatio > 1) {
            videoElement.classList.add('landscape-video');
            videoElement.classList.remove('portrait-video');
        } else {
            videoElement.classList.add('portrait-video');
            videoElement.classList.remove('landscape-video');
        }
    };
    

    return (
        <div className="flex flex-col h-screen border-solid border-2 border-gray-600">
            <Navbar></Navbar>
            <main className="flex-1 p-4 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold">Videos list</h1>
                    <div className="relative w-[20vw]">
                        <Input
                            className="pl-10"
                            size="sm"
                            placeholder="Search videos"
                            value={videoSearchTerm}
                            onChange={(e) => setVideoSearchTerm(e.target.value)}
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Icons.search className="w-5 h-5 text-gray-500" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 overflow-y-auto">
                    <Sidebar
                        rating={rating}
                        setRating={setRating}
                        events={events}
                        setEvents={setEvents}
                        eventSearchTerm={eventSearchTerm}
                        setEventSearchTerm={setEventSearchTerm}
                        videos={videos}
                    />
                    <div className="flex flex-col flex-1 ml-6">
                        <ScrollArea className="flex-1 overflow-y-auto">
                            <VideoGrid
                                videos={videosToShow}
                                selectedVideos={selectedVideos}
                                onVideoSelect={handleVideoSelect}
                                onVideoClick={handleVideoClick}
                            />
                        </ScrollArea>
                    </div>
                </div>
            </main>
            <PaginationFooter
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
            {selectedVideo && (
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent
                        className='max-w-[200vw] max-h-[200vh] p-4 overflow-auto flex flex-col dialog-enter dialog-enter-active '
                        style={{  height: '90%' ,width:'90%'}}
                    >
                        <DialogHeader>
                            <DialogTitle>{selectedVideo.title}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4 flex-1 flex flex-col items-start justify-start">
                            <p><strong>Time:</strong> {selectedVideo.time}</p>
                            <p><strong>Date:</strong> {selectedVideo.date}</p>
                            <p><strong>Length:</strong> {selectedVideo.length}</p>
                            <div className="video-container">
           
    <video
        //src="/image/vo_messi_nham_lan_chong_8049-2708200348.mp4"
        src="https://cdn.bongdaplus.vn/assets//Media/2024/08/25/17/zirkzee-truot-chan-vo-duyen.mp4"
        
        controls
        className="responsive-video"
        onLoadedMetadata={handleVideoLoad}
    />
    
                            </div>
                        </div>
  
                    </DialogContent>
                </Dialog>
            )}



        </div>
    );
}


function Sidebar({ rating, setRating, events, setEvents, eventSearchTerm, setEventSearchTerm, videos }) {
    const handleEventChange = (eventName) => {
        setEvents((prevEvents) => ({
            ...prevEvents,
            [eventName]: !prevEvents[eventName],
        }));
    };


    const handleRatingChange = (ratingKey) => {
        setRating((prevRating) => ({
            ...prevRating,
            [ratingKey]: !prevRating[ratingKey],
        }));
    };


    const filteredEvents = Object.keys(events).filter(eventKey =>
        eventKey.toLowerCase().includes(eventSearchTerm.toLowerCase())
    );


    const countVideosForEvent = (event) => {
        return videos.filter(video => video.events.includes(event)).length;
    };


    return (
        <ScrollArea className="w-1/6 p-4 h-full border-r border-gray-300 bg-neutral-900">




            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div>
                <div className="flex justify-between">
                    <h5 className="font-medium mb-2">Rating</h5>
                    <button
                        onClick={() => setRating({ 1: false, 2: false, 3: false, 4: false, 5: false })}
                        className="text-purple-500"
                    >
                        Reset
                    </button>
                </div>
                <div className="space-y-4">
                    {Object.keys(rating).map((ratingKey) => (
                        <div key={ratingKey} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={rating[ratingKey]}
                                onChange={() => handleRatingChange(ratingKey)}
                                className="form-checkbox h-5 w-5 text-dark-400 border-blue-500 rounded-none focus:ring-0"
                            />

                            <label className="ms-2 text-sm font-medium text-black dark:text-white">
                                {Array(parseInt(ratingKey)).fill('★').join('')}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-8">
                <div className="flex justify-between">
                    <h3 className="font-medium mb-2">Events</h3>
                    <button
                        onClick={() => setEvents({ chance: false, cornerKick: false, goal: false, save: false, selectVideo: false })}
                        className="text-purple-500"
                    >
                        Reset
                    </button>
                </div>
                <div className="relative w-6/7 justify-center ">
                    <Input
                        className="pl-10 mb-1"
                        size="sm"
                        placeholder="Search events"
                        value={eventSearchTerm}
                        onChange={(e) => setEventSearchTerm(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Icons.search className="w-5 h-5 text-gray-500" />
                    </div>
                </div>
                <div className="space-y-4">
                    {filteredEvents.map((eventKey) => (
                        <div key={eventKey} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={events[eventKey]}
                                onChange={() => handleEventChange(eventKey)}
                                className="form-checkbox h-5 w-5 text-dark-400 border-blue-500 rounded-none focus:ring-0"
                            />

                            <label className="ms-2 text-sm font-medium text-black dark:text-white">
                                {eventKey.charAt(0).toUpperCase() + eventKey.slice(1)} ({countVideosForEvent(eventKey)})
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </ScrollArea>
    );
}


function VideoGrid({ videos, selectedVideos, onVideoSelect, onVideoClick }) {
    return (
        <div className="flex flex-col ">
            <div className="bg-red-700 text-white p-2 text-sm font-medium flex justify-between items-center rounded-sm ">
                <div className="pl-5 font-bold flex items-center" >{selectedVideos.length} of {videos.length} clips selected &nbsp;|&nbsp;  <div className="font-bold opacity-35 items-center">{`  Select all`} </div></div>
                <div className="flex space-x-2">
                    <Icons.downloadArrow className="hover:bg-purple-700 p-1 rounded" />
                </div>
            </div>
            <div className="grid grid-cols-5 gap-5 mt-2">
                {videos.map((video, index) => (
                    <div key={index} className="bg-dark rounded shadow overflow-hidden relative" onClick={() => onVideoClick(video)}>
                        <div className="relative">
                            <video
                                src="https://cdn.bongdaplus.vn/assets/Media/2019/05/25/17/messi36ban25052019.mp4"
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="absolute top-1 left-1 bg-gray-600 rounded-sm text-white text-sm px-2 py-1">16:9</div>
                            <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 rounded-sm text-white text-sm px-2 py-1">
                                {video.length}
                            </div>
                            <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 rounded-sm text-white text-sm px-2 py-1">
                                {video.time}
                            </div>
                            <div className="absolute top-0 right-0 p-2">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-dark-400 border-blue-500 rounded focus:ring-0"
                                    checked={selectedVideos.includes(index)}
                                    onChange={() => onVideoSelect(index)}
                                />
                            </div>
                        </div>
                        <div className="p-2">
                            <h3 className="text-sm font-medium truncate max-w-[150px]" >
                                {video.title}
                            </h3>
                            <p className="text-xs text-gray-600">{video.date}</p>
                            <div className="mb-8"></div>

                            <div className="absolute bottom-2 left-2 flex space-x-2">
                                <div className="bg-yellow-500 text-white px-1.5 py-0.5 rounded-full flex items-center text-xs">
                                    <span className="font-bold">{video.rating}</span>
                                    <span className="ml-1">★</span>
                                </div>
                                <div className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs">
                                    {video.events}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


function PaginationFooter({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="w-full border-t border-gray-500 z-50">
            <div className="flex justify-between items-center p-4">
                <div className="text-gray-500">
                    Page {currentPage} of {totalPages}
                </div>
                <div className="flex-1 flex justify-center space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => onPageChange(index + 1)}
                            className={`px-3 py-1 ${currentPage === index + 1 ? 'bg-gray-500 text-white' : 'bg-dark-300 text-gray-700'
                                } rounded`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <div className="w-16"></div>
            </div>
        </div>
    );
}


export default ClipsPage;