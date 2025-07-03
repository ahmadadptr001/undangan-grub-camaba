
import Lightning from "../ui/Lightning/Lightning";
import Layout from "../layout/Layout";

const Home = () => {
    return (
        <>
            <div className="fixed w-full h-full -z-1 inset-0">
                    <Lightning hue={331} xOffset={0} speed={1} intensity={1.6} size={2} />
            </div>
            <Layout />
        </>
    );
};

export default Home;
