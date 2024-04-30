

const Solutions = () => {
    return (
      <div>
        <div className="relative flex flex-col lg:flex-row items-center mb-10 md:mb-44 lg:mb-52">
          {/* image */}
          <img className="rounded-lg" src="/public/image/about2.jpg" alt="" />
          {/* text */}
          <div className=" md:absolute  lg:right-0 md:top-[300px] lg:top-[342px] p-6 md:p-8 md:mx-8 lg:mx-0 lg:w-[500px] md:space-y-4 rounded-md bg-[#ECF5FF]">
            <p className="text-sm md:text-base text-[#F06711] font-medium">
              --- Our Story
            </p>
            <h1 className=" text-xl md:text-2xl lg:text-4xl font-bold my-3 ">
              Efficient and Transparent Home Buying Solutions
            </h1>
            <p className="text-xs md:text-sm lg:text-base text-justify text-gray-500">
              In the symphony of bustling markets and serene landscapes,
              Heritage-Nest was born a vision to to be the golden thread
              connecting NRIs to their homeland.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col lg:flex-row-reverse items-center mb-10 md:mb-44 lg:mb-52">
          {/* image */}
          <img className="rounded-lg" src="/public/image/about3.jpg" alt="" />
          {/* text */}
          <div className=" md:absolute  lg:left-0 md:top-[300px] lg:top-[342px] p-6 md:p-8 md:mx-8 lg:mx-0 lg:w-[500px] md:space-y-4 rounded-md bg-[#ECF5FF]">
            <p className="text-sm md:text-base text-[#F06711] font-medium">
              --- Mission Statement
            </p>
            <h1 className=" text-xl md:text-2xl lg:text-4xl font-bold my-3 ">
              Efficient and Transparent Home Buying Solutions
            </h1>
            <p className="text-xs md:text-sm lg:text-base text-justify text-gray-500">
              To bridge the miles with smiles, Heritage-Nest pledges to be the
              golden thread connecting NRIs to their homeland, through trust,
              transparency, and tailored real estate solutions.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Solutions;