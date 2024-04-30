

const Cards = () => {
    return (
      <div className="max-w-7xl mx-auto grid gap-4 grid-cols-2 md:grid-cols-4 my-10">
        {/* 1 */}
        <div className="p-4 md:p-6 w-42 lg:w-72 bg-[#FDF0E7]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#D95D0F]">
            2k+
          </h1>
          <p className="text-xs md:text-sm lg:text-base text-gray-600">
            New Flat Listed
          </p>
          <div className=" mt-6 flex justify-between">
            <p className="text-sm md:text-base cursor-pointer">
              <u> View all</u>
            </p>
            <div className="avatar">
              <div className="w-6 lg:w-8 border-2 rounded-full border-[#D95D0F]">
                <img src="/public/icon/arrow.png" />
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="p-4 md:p-6 w-42 lg:w-72 bg-[#ECF5FF]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0051A1]">
            2k+
          </h1>
          <p className="text-xs md:text-sm lg:text-base text-gray-600">
            New Flat Listed
          </p>
          <div className=" mt-6 flex justify-between">
            <p className="text-sm md:text-base cursor-pointer">
              <u> View all</u>
            </p>
            <div className="avatar">
              <div className="w-6 lg:w-8 border-2 rounded-full border-[#0051A1]">
                <img src="/public/icon/arrow.png" />
              </div>
            </div>
          </div>
        </div>
        {/* 1 */}
        <div className="p-4 md:p-6 w-42 lg:w-72 bg-[#FDF0E7]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#D95D0F]">
            2k+
          </h1>
          <p className="text-xs md:text-sm lg:text-base text-gray-600">
            New Flat Listed
          </p>
          <div className=" mt-6 flex justify-between">
            <p className="text-sm md:text-base cursor-pointer">
              <u> View all</u>
            </p>
            <div className="avatar">
              <div className="w-6 lg:w-8 border-2 rounded-full border-[#D95D0F]">
                <img src="/public/icon/arrow.png" />
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="p-4 md:p-6 w-42 lg:w-72 bg-[#ECF5FF]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0051A1]">
            2k+
          </h1>
          <p className="text-xs md:text-sm lg:text-base text-gray-600">
            New Flat Listed
          </p>
          <div className=" mt-6 flex justify-between">
            <p className="text-sm md:text-base cursor-pointer">
              <u> View all</u>
            </p>
            <div className="avatar">
              <div className="w-6 lg:w-8 border-2 rounded-full border-[#0051A1]">
                <img src="/public/icon/arrow.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cards;