import Cards from "../Components/Cards";
import PropertyCard from "../Components/PropertyCard";
import Reviews from "../Components/Reviews";
import SearchCard from "../Components/SearchCard";

const Buy = () => {
  return (
    <>
      <img
        className="w-full object-cover object-center mb-44"
        src="/public/image/buy.jpg"
        alt=""
      />
      <div className="relative max-w-7xl mx-auto">
        <SearchCard />
        <Cards />
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">Popular Properties</p>
          <p className="text-blue-500 cursor-pointer">
            <u>See all Properties</u>
          </p>
        </div>
        <PropertyCard />

        <hr className="mt-10" />

        <div className="flex justify-between pt-10">
          <p className="text-2xl font-semibold">New Listed Properties</p>
          <p className="text-blue-500 cursor-pointer">
            <u>See all Properties</u>
          </p>
        </div>
        <PropertyCard />

        <p className="text-3xl font-bold mb-8 text-center">Testimonials</p>
        <Reviews />
      </div>
    </>
  );
};

export default Buy;
