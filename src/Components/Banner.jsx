

const Banner = () => {
    return (
      <div className="hero">
        <video
          className="w-full h-[80vh] object-cover object-center"
          autoPlay
          loop
          muted
        >
          <source src="/public/banner.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-white z-10">
          <div className=" flex flex-col items-center">
            <p>
              Seamlessly connecting you to the heartbeat of India's prime
              properties.
            </p>
            <h1 className="my-10 text-3xl lg:text-7xl font-caslon font-medium tracking-[2px]">
              Your Portal to India's <br /> Exquisite Real Estate
            </h1>
            <button className="flex justify-center items-center gap-2 bg-blue-500 px-3 py-2 md:px-6 md:py-2 text-white">
              <div>
                <img src="/public/icon/search2.png" alt="" />
              </div>
              <p>Find Properties</p>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;