const Booking = () => {
  return (
    <div className="flex gap-10 flex-col-reverse md:flex-row justify-between items-center mt-10">
      {/* text */}
      <div className="flex flex-col items-center md:items-start max-w-[700px]">
        <p className="text-sm lg:text-base text-[#F06711] font-medium text-center md:text-start ">
          --- Meet the Team For Book Consultation
        </p>
        <h1 className="max-w-[500px] text-2xl lg:text-4xl font-bold text-center md:text-start my-3 ">
          Meet the stewards of your heritage journey
        </h1>
        <p className=" max-w-[500px] text-sm lg:text-base text-center md:text-start">
          each member an embodiment of expertise and warmth, dedicated to
          guiding you home, every step of the way.
        </p>
        <button className="px-4 py-2 mt-6 md:mt-10 rounded-md text-sm lg:text-base text-white bg-[#0059B1]">
          Booking Consultation Now
        </button>
      </div>
      {/* image */}
      <img className="" src="/public/image/about4.jpg" alt="" />
    </div>
  );
};

export default Booking;
