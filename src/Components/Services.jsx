const Services = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold py-10">Our Services</h1>
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {/* 1 */}
        <div className="flex items-start gap-6 p-6 w-96 bg-blue-50 rounded-lg">
          <img className="w-14" src="/public/icon/home2.png" alt="" />
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Advanced Property Search
            </h1>
            <p className="text-gray-500 pt-6">
              Effortlessly find your dream property with advanced search
              filters.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex items-start gap-6 p-6 w-96 bg-blue-50 rounded-lg">
          <img className="w-14" src="/public/icon/home2.png" alt="" />
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Virtual Tours and Multimedia
            </h1>
            <p className="text-gray-500 pt-6">
              Explore properties through immersive virtual tours and HD photos.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex items-start gap-6 p-6 w-96 bg-blue-50 rounded-lg">
          <img className="w-14" src="/public/icon/home2.png" alt="" />
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Secure Online Transactions
            </h1>
            <p className="text-gray-500 pt-6">
              Ensure secure transactions and e-sign documents seamlessly online.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
