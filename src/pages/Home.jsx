
import Lightning from "../ui/Lightning/Lightning";
import Layout from "../layout/Layout";

const Home = () => {
    return (
        <>
            <div className="fixed w-full h-full -z-1 inset-0">
                    <Lightning hue={331} xOffset={0.8} speed={1} intensity={1} size={1} />
            </div>
            <Layout />
        </>
    );
};

export default Home;
