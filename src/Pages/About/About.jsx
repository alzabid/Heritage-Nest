import Reviews from "../../Components/Reviews";
import Booking from "./Booking";
import Cards from "../../Components/Cards";
import Solutions from "./Solutions";
import Team from "./Team";

const About = () => {
  return (
    <>
      <img
        className="w-full object-cover object-center"
        src="/public/image/about.jpg"
        alt=""
      />
      <div className="max-w-7xl mx-auto">
        <Cards />
        <Solutions/>

        <p className="text-3xl font-bold mb-8">
          Discover the Faces Behind Our Success
        </p>
        <Team />
        <Booking/>
        <p className="text-3xl font-bold mb-8 text-center">Testimonials</p>
        <Reviews/>
      </div>
    </>
  );
};

export default About;
