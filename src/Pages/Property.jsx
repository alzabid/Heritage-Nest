import { useLoaderData } from "react-router-dom";
import PropertyCard2 from "../Components/PropertyCard2";
import Reviews from "../Components/Reviews";

const Property = () => {
  const Properties = useLoaderData();
  console.log(Properties);


  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0 mt-10 md:mt-20">
      <div className="flex gap-6 mb-5">
        <button className="bg-blue-500 text-white text-xs md:text-base font-semibold rounded-md px-4 py-2">
          Properties (400)
        </button>
        <button className="bg-blue-50 text-gray-500 text-xs md:text-base font-semibold rounded-md px-4 py-2">
          New Projects (400)
        </button>
        <button className="bg-blue-50 text-gray-500 text-xs md:text-base font-semibold rounded-md px-4 py-2">
          Pre-launch offers
        </button>
      </div>
      <hr className="" />

      <p className=" text-xl md:text-2xl lg:text-3xl font-bold my-10">
        400 results for rental property
      </p>

      <div className="flex flex-col items-center lg:items-start gap-5">
        <PropertyCard2 />
        <PropertyCard2 />
        <PropertyCard2 />
        <PropertyCard2 />
        <PropertyCard2 />
      </div>
      <hr className="mt-10 mb-6" />

      <div className="flex gap-6 mb-5">
        <button className="bg-blue-500 text-white text-xs md:text-base font-semibold rounded-md px-4 py-2">
          01
        </button>
        <button className="bg-blue-50 text-gray-500 text-xs md:text-base font-semibold rounded-md px-4 py-2">
          02
        </button>
        <button className="bg-blue-50 text-gray-500 text-xs md:text-base font-semibold rounded-md px-4 py-2">
          Next
        </button>
      </div>

      <Reviews />
    </div>
  );
};

export default Property;
