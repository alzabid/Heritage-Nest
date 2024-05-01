import { Helmet } from "react-helmet-async";
import Cards from "../Components/Cards";
import PropertyCard from "../Components/PropertyCard";
import Reviews from "../Components/Reviews";
import SearchCard from "../Components/SearchCard";

const Buy = () => {
  return (
    <>
      <Helmet>
        <title>Heritage Nest || Buy</title>
      </Helmet>
      <img
        className="w-full min-h-[150px] object-cover object-center mb-44"
        src="/public/image/buy.jpg"
        alt=""
      />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
        <SearchCard />
        <Cards />
        <div className="flex items-center justify-between">
          <p className=" text-lg md:text-2xl font-semibold">
            Popular Properties
          </p>
          <p className="text-sm md:text-base text-blue-500 underline cursor-pointer">
            See all Properties
          </p>
        </div>
        <PropertyCard />

        <hr className="mt-10" />

        <div className="flex items-center justify-between pt-10">
          <p className=" text-lg md:text-2xl font-semibold">
            New Listed Properties
          </p>
          <p className="text-sm md:text-base text-blue-500 underline cursor-pointer">
            See all Properties
          </p>
        </div>
        <PropertyCard />
        <Reviews />
      </div>
    </>
  );
};

export default Buy;
