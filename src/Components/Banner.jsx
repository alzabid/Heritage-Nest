import { Link } from "react-router-dom";


const Banner = () => {
    return (
      <div className="hero">
        <video
          className="w-full h-[40vh] md:h-[90vh] object-cover object-center"
          autoPlay
          loop
          muted
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-white z-10">
          <div className=" flex flex-col items-center">
            <p className="text-sm md:text-base font-medium">
              Seamlessly connecting you to the heartbeat of India's prime
              properties.
            </p>
            <h1 className=" my-6 md:my-10 text-2xl md:text-4xl lg:text-7xl font-caslon font-bold tracking-[2px]">
              Your Portal To India's <br /> Exquisite Real Estate
            </h1>
            <Link to="/buy">
              <button className="flex justify-center items-center gap-2 bg-blue-500 text-sm md:text-base px-2 py-1 md:px-6 md:py-2 text-white rounded-md">
                <img className="w-5" src="/icon/search2.png" alt="" />

                <p>Find Properties</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;