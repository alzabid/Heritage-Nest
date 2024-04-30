

const Booking = () => {
    return (
      <div className="flex flex-col md:flex-row gap-10 lg:gap-36 justify-between items-center my-10">
        <div className="flex flex-col items-center md:items-start max-w-[700px]">
          <p className=" text-center md:text-start text-xl ">
            --- Meet the Team For Book Consultation
          </p>
          <h1 className="  text-center md:text-start text-3xl font-bold my-3 ">
            Meet the stewards of your heritage journey
          </h1>
          <p className="  text-center md:text-start">
            each member an embodiment of expertise and warmth, dedicated to
            guiding you home, <br /> every step of the way.
          </p>
          <button className="px-4 py-2 mt-6 md:mt-20 text-white bg-[#0059B1]">
            Booking Consultation Now
          </button>
        </div>

          <img src="/public/image/about4.jpg" alt="" />
        
      </div>
    );
};

export default Booking;