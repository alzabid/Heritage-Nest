import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Services from "../Components/Services";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Heritage Nest || Home</title>
      </Helmet>
      <Banner />
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        {/* 1 */}
        <div className="flex flex-col md:flex-row gap-5 mt-20 mb-36">
          {/* image */}
          <div className="relative w-1/2">
            <img className="rounded-lg" src="/public/image/home1.jpg" alt="" />
            <img
              className="absolute right-0 top-72 rounded-lg w-[400px]"
              src="/public/image/home2.jpg"
              alt=""
            />
            <img
              className="absolute right-[140px] top-[262px] w-16 "
              src="/public/icon/play.png"
              alt=""
            />
          </div>
          {/* text */}
          <div className="w-1/2">
            <div className="flex flex-col items-center md:items-start md:w-9/12">
              <p className=" text-[#F06711] font-medium text-center md:text-start ">
                --- Property buying
              </p>
              <h1 className="text-center md:text-start text-3xl font-bold my-4 ">
                Efficient and Transparent Home Buying Solutions
              </h1>
              <p className="text-[#667085] text-center md:text-start">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. 
              </p>
              <button className="mt-12 flex justify-center items-center gap-3 bg-[#ECF5FF] px-3 py-2 md:px-4 md:py-2 text-blue-700">
                <div>
                  <img src="/public/icon/Magnifer.png" alt="" />
                </div>
                <p>Find Properties</p>
              </button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-5 mt-10 mb-72">
          {/* image */}
          <div className="relative w-1/2">
            <img
              className="absolute top-24 rounded-lg"
              src="/public/image/home1.jpg"
              alt=""
            />
            <img
              className="absolute right-0 top-0 rounded-lg w-[400px]"
              src="/public/image/home2.jpg"
              alt=""
            />
            <img
              className="absolute left-[205px] top-[72px] w-16 "
              src="/public/icon/play.png"
              alt=""
            />
          </div>
          {/* text */}
          <div className="w-1/2">
            <div className="flex flex-col items-center md:items-start w-9/12 ">
              <p className=" text-[#F06711] font-medium text-center md:text-start ">
                --- Property buying
              </p>
              <h1 className="text-center md:text-start text-3xl font-bold my-4 ">
                Efficient and Transparent Home Buying Solutions
              </h1>
              <p className="text-[#667085] text-center md:text-start">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <button className="mt-12 flex justify-center items-center gap-3 bg-[#ECF5FF] px-3 py-2 md:px-4 md:py-2 text-blue-700">
                <div>
                  <img src="/public/icon/Magnifer.png" alt="" />
                </div>
                <p>Find Properties</p>
              </button>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-col md:flex-row gap-5 mt-20 mb-36">
          {/* image */}
          <div className="relative w-1/2">
            <img className="rounded-lg" src="/public/image/home5.jpg" alt="" />
            <img
              className="absolute right-0 top-72 rounded-lg w-[400px]"
              src="/public/image/home6.jpg"
              alt=""
            />
            <img
              className="absolute right-[140px] top-[262px] w-16 "
              src="/public/icon/play.png"
              alt=""
            />
          </div>
          {/* text */}
          <div className="w-1/2">
            <div className="flex flex-col items-center md:items-start w-9/12">
              <p className=" text-[#F06711] font-medium text-center md:text-start ">
                --- Property buying
              </p>
              <h1 className="text-center md:text-start text-3xl font-bold my-4 ">
                Efficient and Transparent Home Buying Solutions
              </h1>
              <p className="text-[#667085] text-center md:text-start">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. 
              </p>
              <button className="mt-12 flex justify-center items-center gap-3 bg-[#ECF5FF] px-3 py-2 md:px-4 md:py-2 text-blue-700">
                <div>
                  <img src="/public/icon/Magnifer.png" alt="" />
                </div>
                <p>Find Properties</p>
              </button>
            </div>
          </div>
        </div>

        <Services />
      </div>
    </>
  );
};

export default Home;
