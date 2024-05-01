import PropertyCard2 from "../Components/PropertyCard2";

const Property = () => {
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
      <hr />

      <p className=" text-xl md:text-2xl lg:text-3xl font-bold my-10">400 results for rental property</p>


      <div className="flex flex-col items-center lg:items-start gap-5">
        <PropertyCard2 />
        <PropertyCard2 />
        <PropertyCard2 />
        <PropertyCard2 />
        <PropertyCard2 />
      </div>
    </div>
  );
};

export default Property;
