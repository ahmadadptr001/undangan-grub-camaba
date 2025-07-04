import { useEffect, useRef } from "react";
import kilatSound from "../assets/kilat.mp3";

const Hujan = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            // munculkan petir
            const petir = document.createElement("div");
            petir.className = "petir";
            document.body.appendChild(petir);

            // mainkan suara kilat
            if (audioRef.current) {
                audioRef.current.currentTime = 0; // mulai dari awal
                audioRef.current.play().catch(err => {
                    console.warn("Browser menolak autoplay suara: ", err);
                });
            }

            // hilangkan petir
            setTimeout(() => {
                document.body.removeChild(petir);
            }, 200);
        }, Math.random() * 7000 + 3000); // tiap 3-10 detik

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hujan-serem fixed w-full h-full top-0 left-0 z-[9999] pointer-events-none overflow-hidden">
            <div className="hujan-container" />
            <audio ref={audioRef} src={kilatSound} preload="auto" />
        </div>
    );
};

export default Hujan;
