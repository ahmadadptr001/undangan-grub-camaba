import ripImage from "../assets/grave.png";

const Header = () => {
    return (
        <div className="text-center">
            <img
                src={ripImage}
                alt="gambar rip"
                className="mx-auto w-40 h-40 mb-4 rounded-full border-4 border-red-600 shadow-red-700 shadow-lg"
            />
            <h1 className="text-3xl font-extrabold text-red-600 drop-shadow-md">UNDANGAN <br /> FAKULTAS TEKNIK</h1>
            <h2 className="text-xl font-semibold text-zinc-300 mt-3">Camaba FT-UNUSRA 2025</h2>
        </div>
    );
};

export default Header;
