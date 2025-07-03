import { FaWhatsapp } from "react-icons/fa";

const JoinButton = () => {
    return (
        <div className="text-center">
            <a
                href="https://chat.whatsapp.com/Eog0QR1I8Jy41Pru8WHCJA?mode=r_t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center justify-center flex-wrap flex items-center gap-1 bg-red-700 hover:bg-red-800 text-white font-bold px-6 py-3 rounded-full shadow-lg transition duration-300 tracking-wider"
            >
                MASUK KE FAKULTAS TEKNIK <FaWhatsapp className=" rounded-full w-7 h-7"/>
            </a>
            <p className="mt-4 text-xs text-zinc-500 italic">Grup ini hanya untuk yang bermental baja.</p>
        </div>
    );
};

export default JoinButton;
