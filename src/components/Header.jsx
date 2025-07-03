import ripImage from "../assets/grave.png";

const Header = () => {
    return (
        <div className="text-center">
            <img
                src={ripImage}
                alt="gambar rip"
                className="mx-auto sm:w-40 sm:h-40 w-30 h-30 mb-4 rounded-full border-4 border-red-600 shadow-red-700 shadow-lg"
            />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-red-600 drop-shadow-md">UNDANGAN <br /> FAKULTAS TEKNIK</h1>
            <h2 className="text-xl font-semibold text-zinc-300 mt-3">Camaba FT-UNUSRA 2025</h2>
        </div>
    );
};

export default Header;
