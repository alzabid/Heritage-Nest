import Amenities from "../Components/Amenities";
import BidFrom from "../Components/BidFrom";
import Map from "../Components/Map";
import Overview from "../Components/Overview";
import PropertyCard from "../Components/PropertyCard";
import Services from "../Components/Services";

const Details = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 md:px-6 lg:px-0">
      {/* <div className="flex flex-col md:flex-row gap-5">
       
        <div className="w-[800px] border-2 min-h-11"></div>
       
        <div className="flex-1 border-2"></div>
      </div> */}

      <div className="flex flex-col lg:flex-row gap-5">
        {/* left side */}
        <div className="md:max-w-[800px] min-h-11">
          {/* images */}
          <div>
            <img src="/image/Property1.jpg" alt="" />
            <div className="h-[80px] md:h-[160px] flex gap-4 pt-4">
              <img
                className="w-[120px] md:w-[255px] lg:w-[280px] "
                src="/image/Property2.jpg"
                alt=""
              />
              <img
                className="w-[120px] md:w-[255px] lg:w-[280px] "
                src="/image/Property2.jpg"
                alt=""
              />
              <div className="relative flex-1 w-[160px] md:w-[180px] overflow-hidden">
                <img
                  className=" h-[80px] md:h-[160px] bg-black opacity-40 "
                  src="/image/Property2.jpg"
                  alt=""
                />
                <p className="absolute top-14 left-14 font-bold underline">
                  View more
                </p>
              </div>
            </div>
          </div>
          
          <Overview/>
        </div>

        {/* right side */}
        <div className=" flex-none md:flex gap-5 lg:flex-col lg:max-w-[400px]">
          {/* Bid Property */}
          <BidFrom/>
          {/* map */}
          <Map />
        </div>
      </div>

      <Amenities/>

      <Services />
      <div className="flex items-center justify-between pt-10">
        <p className=" text-lg md:text-2xl font-semibold">
          Others Nearby Properties
        </p>
        <p className="text-sm md:text-base text-blue-500 underline cursor-pointer">
          See all Properties
        </p>
      </div>
      <PropertyCard />
    </div>
  );
};

export default Details;
