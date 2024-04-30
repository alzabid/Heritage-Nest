import PropertyCard from "../Components/PropertyCard";
import Services from "../Components/Services";


const Details = () => {
    return (
      <div className="max-w-7xl mx-auto mt-6">
        <div className="flex flex-col md:flex-row gap-5">
          {/* left side */}
          <div className="w-[800px] border-2 min-h-11"></div>
          {/* right side */}
          <div className="flex-1 border-2"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {/* left side */}
          <div className="w-[800px] min-h-11">
            <img src="/public/image/Property1.jpg" alt="" />
            <div className="h-[160px] flex gap-4 pt-4">
              <img
                className="w-[280px] "
                src="/public/image/Property2.jpg"
                alt=""
              />
              <img
                className="w-[280px] "
                src="/public/image/Property2.jpg"
                alt=""
              />
              <div className="relative flex-1 w-[180px] overflow-hidden">
                <img
                  className="h-[160px] bg-black opacity-40 "
                  src="/public/image/Property2.jpg"
                  alt=""
                />
                <p className="absolute top-14 left-14 font-semibold underline">
                  View more
                </p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flex-1"></div>
        </div>
        <Services />
        <div className="flex justify-between pt-10">
          <p className="text-2xl font-semibold">Others Nearby Properties</p>
          <p className="text-blue-500 cursor-pointer">
            <u>See all Properties</u>
          </p>
        </div>
        <PropertyCard />
      </div>
    );
};

export default Details;