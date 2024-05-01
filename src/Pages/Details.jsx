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
        <div className="md:max-w-[900px] min-h-11">
          {/* images */}
          <div>
            <img src="/public/image/Property1.jpg" alt="" />
            <div className="h-[80px] md:h-[160px] flex gap-4 pt-4">
              <img
                className="w-[120px] md:w-[255px] lg:w-[280px] "
                src="/public/image/Property2.jpg"
                alt=""
              />
              <img
                className="w-[120px] md:w-[255px] lg:w-[280px] "
                src="/public/image/Property2.jpg"
                alt=""
              />
              <div className="relative flex-1 w-[160px] md:w-[180px] overflow-hidden">
                <img
                  className=" h-[80px] md:h-[160px] bg-black opacity-40 "
                  src="/public/image/Property2.jpg"
                  alt=""
                />
                <p className="absolute top-14 left-14 font-semibold underline">
                  View more
                </p>
              </div>
            </div>
          </div>
          {/* Overview */}
          <div className="p-6">
            <p>Overview</p>
            

          </div>
        </div>

        {/* right side */}
        <div className="lg:max-w-[400px]">
          {/* Bid Property */}
          <div className="p-6 rounded-md bg-blue-50">
            <p className="text-lg md:text-xl text-gray-500">Property Value</p>
            <p className="md:text-2xl font-bold md:my-4">$ 300k - $ 310k</p>
            <p className="text-sm md:text-base text-gray-500 w-[80%]">
              Your bid can not be than 10% of the property Minimum value.
            </p>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Min</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-sm w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Max</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-sm w-full"
              />
            </label>
            <div className="flex justify-center">
              <button className="px-4 py-2 mt-6 md:mt-10 rounded-sm text-sm lg:text-base text-white bg-[#0059B1] ">
                Bid Property
              </button>
            </div>
          </div>
          {/* map */}
          <div className="flex items-center pt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467420.3030962046!2d90.12035070011363!3d23.75732241499096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7de0e452d%3A0xeec73914cc53b887!2sCity%20College%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1705582640087!5m2!1sen!2sbd"
              width="400"
              height="500"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
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
