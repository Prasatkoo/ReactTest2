import React, {useEffect, useRef, useState} from "react";
interface Props {

}

export const Video: React.FC<Props> = (props) => {
    const [time, setTime] = useState<number>(0);
    const video = useRef<HTMLVideoElement>(null);
    const [konec, setIsKonec] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (video.current) {setTime(video.current.currentTime);}
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handle = () => {
      setIsKonec(true);
    }

    return (
        <div className={""}>
            <video src="https://www.w3schools.com/html/mov_bbb.mp4" autoPlay muted onEnded={handle} ref={video}/>
               <p>{Math.floor(time)} seconds</p>
                {konec && <p>Konec</p>}
        </div>
    )
}

export default Video;