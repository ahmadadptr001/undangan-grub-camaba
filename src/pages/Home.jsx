
import Lightning from "../ui/Lightning/Lightning";
import Layout from "../layout/Layout";

import hymneTeknikSong from "../assets/hymne-teknik.mp3"

const Home = () => {
    return (
        <>
            <div className="fixed w-full h-full -z-1 inset-0">
                <audio autoPlay loop>
                    <source src={hymneTeknikSong}/>
                </audio>
                    <Lightning hue={331} xOffset={0.8} speed={1} intensity={1} size={1} />
            </div>
            <Layout />
        </>
    );
};

export default Home;
