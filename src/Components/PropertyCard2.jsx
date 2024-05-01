import { Link } from "react-router-dom";


const PropertyCard2 = () => {
    return (
      <div className="card md:card-side max-w-[852px] bg-blue-50 shadow-xl">
        <figure>
          <img
            className=" mt-6 md:mt-0 md:ml-8 w-[300px] h-[300px] md:h-[220px] object-center"
            src="/image/card.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <div className="flex md:gap-5 mb-6">
            {/* 75% */}
            <div className="w-9/12">
              <h2 className="text-lg font-semibold md:card-title">
                3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
              </h2>

              <div className=" flex gap-2 items-center mt-3">
                <span>
                  <img className="w-3 md:w-4" src="/icon/location.png" alt="" />
                </span>
                <p className="text-sm md:text-base text-gray-500">
                  New Delhi, India
                </p>
              </div>
            </div>
            {/* 25% */}
            <div className="flex-1">
              <p className="md:text-xl font-bold">$ 300000</p>
              <Link to="/details">
                <button className=" px-2 py-1 text-xs lg:text-base border border-gray-400 rounded-md mt-3 text-gray-600 font-medium">
                  See Details
                </button>
              </Link>
            </div>
          </div>

          <p className="text-lg font-semibold">Property details</p>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex items-center gap-1">
              <img className="w-14 h-14" src="/icon/loading.png" alt="" />
              <div className="">
                <p className="font-semibold">Total Area</p>
                <p className="text-sm text-gray-500">891 sqft</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <img className="w-14 h-14" src="/icon/frame.png" alt="" />
              <div className="">
                <p className="font-semibold">Status</p>
                <p className="text-sm text-gray-500">Ready to move</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <img className="w-14 h-14" src="/icon/square.png" alt="" />
              <div className="">
                <p className="font-semibold">Total Area</p>
                <p className="text-sm text-gray-500">891 sqft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PropertyCard2;