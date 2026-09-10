import HeroImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className="container mx-auto flex justify-between items-center">
            <div className="py-24">
                <h1 className="text-6xl font-bold">
                    Build Your Ideal
                </h1>
                <h1 className="text-6xl font-bold brand-gradient-text">
                    Development Stack
                </h1>
                <p className="text-xl text-[#475569] py-4">
                    Explore frontend, backend, database, and tooling options,
                    <br />
                    compare them side by side, and put together the stack that fits your
                    <br />
                    next project.
                </p>
                <button className="brand-gradient rounded-xl text-white px-5 py-3 cursor-pointer">
                    Explore Technologies
                </button>
                <button className="rounded-xl bg-white border border-[#D91B7E] mx-2 py-3 px-12 text-[#D91B7E] cursor-pointer">
                    Learn More
                </button>
            </div>
            <div>
                <img src={HeroImg} alt="Development Stack" />
            </div>
        </div>
    );
};

export default Banner;