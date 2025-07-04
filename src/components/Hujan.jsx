import { useEffect, useRef } from "react";
import kilatSound from "../assets/kilat.mp3";

const Hujan = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        // Putar suara petir saat pertama kali load
        if (audioRef.current) {
            audioRef.current.play().catch(() => {
                console.warn("Audio autoplay dicegah oleh browser.");
            });
        }

        // Efek petir + suara petir acak
        const interval = setInterval(() => {
            const flash = document.createElement("div");
            flash.className = "petir";
            document.body.appendChild(flash);

            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch(() => {});
            }

            setTimeout(() => {
                document.body.removeChild(flash);
            }, 150);
        }, Math.random() * 7000 + 5000); // setiap 5–12 detik

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hujan-container">
            <audio ref={audioRef} src={kilatSound} preload="auto" />
            {[...Array(150)].map((_, i) => {
                const x = Math.random(); // posisi horizontal 0–1
                const speed = Math.random(); // kecepatan
                return (
                    <span
                        key={i}
                        className="rain-drop"
                        style={{
                            "--x": x,
                            "--speed": speed,
                            left: `${x * 100}vw`,
                            animationDuration: `${0.5 + speed * 1.5}s`,
                            animationDelay: `${Math.random()}s`,
                        }}
                    ></span>
                );
            })}
        </div>
    );
};

export default Hujan;
