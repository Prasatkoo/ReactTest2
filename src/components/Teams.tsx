import React, { useState, useEffect, useRef } from "react";

const VideoPlayer: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleEnded = () => {
        console.log("Konec");
    };

    return (
        <div>
            <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                onEnded={handleEnded}
                ref={videoRef}
            />
            <p>{Math.floor(currentTime)} seconds</p>
        </div>
    );
};

export default VideoPlayer;