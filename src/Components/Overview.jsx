

const Overview = () => {
    return (
      <div className="bg-blue-50 p-6 rounded-md mt-6 md:mt-10">
        <p className="text-lg md:text-xl text-center md:text-start  font-bold">
          Overview
        </p>
        <div className="flex flex-wrap gap-6 md:gap-10 py-6 text-sm md:text-base">
          <div className="flex gap-2">
            <img src="/icon/bed.png" alt="" />
            <p className="font-semibold">2 Beds</p>
          </div>
          <div className="flex gap-2">
            <img src="/icon/bathtub.png" alt="" />
            <p className="font-semibold">2 Bath</p>
          </div>
          <div className="flex gap-2">
            <img src="/icon/balcony.png" alt="" />
            <p className="font-semibold">2 Balcony</p>
          </div>
          <div className="flex gap-2">
            <img src="/icon/shelves.png" alt="" />
            <p className="font-semibold">Fully Furnished</p>
          </div>
        </div>
        <hr />
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4 pt-8 text-sm md:text-base">
          <div className="">
            <p className="text-gray-500">Carpet Area</p>
            <p className="font-semibold">2000 sqft</p>
          </div>
          <div className="">
            <p className="text-gray-500">Floor</p>
            <p className="font-semibold">Second (Out of 6th floor)</p>
          </div>
          <div className="">
            <p className="text-gray-500">Transaction Type</p>
            <p className="font-semibold">Ready to move</p>
          </div>
          <div className="">
            <p className="text-gray-500">Lift</p>
            <p className="font-semibold">1</p>
          </div>
          <div className="">
            <p className="text-gray-500">Facing</p>
            <p className="font-semibold">North - East</p>
          </div>
          <div className="">
            <p className="text-gray-500">Additional Rooms</p>
            <p className="font-semibold">1 servant room & 1 gust room</p>
          </div>
          <div className="">
            <p className="text-gray-500">Age of construction</p>
            <p className="font-semibold">New Construction</p>
          </div>
        </div>
      </div>
    );
};

export default Overview;