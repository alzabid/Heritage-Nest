import Reviews from "../../Components/Reviews";
import Booking from "./Booking";
import Cards from "../../Components/Cards";
import Solutions from "./Solutions";
import Team from "../../Components/Team";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Heritage Nest || About us</title>
      </Helmet>
      <div className="hero">
        <img
          className="w-full min-h-[150px] object-cover object-center"
          src="/image/about.jpg"
          alt=""
        />
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-white z-10">
          <div className=" flex flex-col items-center">
            <h1 className="my-10 text-3xl lg:text-7xl font-caslon font-medium tracking-[2px]">
              About Us
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
        <Cards />
        <Solutions />
        <Team />
        <Booking />
        <Reviews />
      </div>
    </>
  );
};

export default About;
