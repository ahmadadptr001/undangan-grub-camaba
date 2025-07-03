import Header from "../components/Header";
import Description from "../components/Description";
import JoinButton from "../components/JoinButton";
import Lightning from "../ui/Lightning/Lightning";

const Home = () => {
    return (
        <div className="min-h-screen  flex items-center justify-center p-4">
            <div className="fixed w-full h-full -z-1">
                <Lightning hue={331} xOffset={0} speed={1} intensity={1.9} size={2} />
            </div>
            <div className="bg-zinc-900/95 rounded-3xl border border-red-800 shadow-lg/60 shadow-red-500 max-w-md w-full p-6">
                <Header />
                <Description />
                <JoinButton />
            </div>
        </div>
    );
};

export default Home;
