

const Cards = () => {
    return (
      <div className="">
        <div className="flex justify-center items-center">
          <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
            {/* 1 */}
            <div className="card-body w-72 bg-[#FDF0E7]">
              <h1 className="text-4xl font-bold text-[#D95D0F]">2k+</h1>
              <p className="text-gray-600">New Flat Listed</p>
              <div className=" mt-6 flex justify-between">
                <p className="cursor-pointer">
                  <u> View all</u>
                </p>
                <div className="avatar">
                  <div className="border-2 rounded-full border-[#D95D0F]">
                    <img src="/public/icon/arrow.png" />
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="card-body w-72 bg-[#ECF5FF]">
              <h1 className="text-4xl font-bold text-[#0051A1]">2k+</h1>
              <p className="text-gray-600">New Flat Listed</p>
              <div className=" mt-6 flex justify-between">
                <p className="cursor-pointer">
                  <u> View all</u>
                </p>
                <div className="avatar">
                  <div className="border-2 rounded-full border-[#0051A1]">
                    <img src="/public/icon/arrow.png" />
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="card-body w-72 bg-[#FDF0E7]">
              <h1 className="text-4xl font-bold text-[#D95D0F]">2k+</h1>
              <p className="text-gray-600">New Flat Listed</p>
              <div className=" mt-6 flex justify-between">
                <p className="cursor-pointer">
                  <u> View all</u>
                </p>
                <div className="avatar">
                  <div className="border-2 rounded-full border-[#D95D0F]">
                    <img src="/public/icon/arrow.png" />
                  </div>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="card-body w-72 bg-[#ECF5FF]">
              <h1 className="text-4xl font-bold text-[#0051A1]">2k+</h1>
              <p className="text-gray-600">New Flat Listed</p>
              <div className=" mt-6 flex justify-between">
                <p className="cursor-pointer">
                  <u> View all</u>
                </p>
                <div className="avatar">
                  <div className="border-2 rounded-full border-[#0051A1]">
                    <img src="/public/icon/arrow.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cards;