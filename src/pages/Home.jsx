import { useEffect, useRef, useState } from "react";
import Lightning from "../ui/Lightning/Lightning";
import Layout from "../layout/Layout";
import hymneTeknikSong from "../assets/hymne-teknik.mp3";

const Home = () => {
    const audioRef = useRef(null);
    const [audioStarted, setAudioStarted] = useState(false);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setAudioStarted(true);
            console.log("berhasil menyalakan audio");
        }
    };

    return (
        <>
            <div className="fixed w-full h-full -z-1 inset-0">
                <Lightning hue={331} xOffset={0.8} speed={1} intensity={1} size={1} />
            </div>
            <div>
                {!audioStarted && (
                    <button onClick={() => handlePlay()} className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded shadow">
                        Nyalakan Musik 🎵
                    </button>
                )}
                <audio ref={audioRef} loop>
                    <source src={hymneTeknikSong} />
                </audio>
                <Layout />
            </div>
        </>
    );
};

export default Home;
