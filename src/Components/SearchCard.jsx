const SearchCard = () => {

  return (
    <div className="flex items-center justify-center pb-72 md:pb-32 lg:pb-10">
      <div className=" bg-white max-w-sm md:max-w-[700px] lg:max-w-[920px] rounded-lg shadow-lg p-6 absolute lg:left-[225px] top-[-200px] lg:top-[-300px]">
        <ul className="flex gap-6 border-b-2 pb-2">
          <li className="cursor-pointer active:border-red-700  hover:text-green-500">
            Buy
          </li>
          <li className="cursor-pointer active:border-red-700  hover:text-green-500">
            Rent
          </li>
          <li className="cursor-pointer active:border-red-700  hover:text-green-500">
            PG
          </li>
          <li className="cursor-pointer active:border-red-700  hover:text-green-500">
            Plot
          </li>
          <li className="cursor-pointer active:border-red-700  hover:text-green-500">
            Commercial
          </li>
        </ul>
        <div className="relative flex items-center my-6">
          <span className="absolute left-3">
            <img src="/public/icon/search.png" alt="" />
          </span>

          <input
            type="text"
            placeholder="Search Properties"
            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-transparent border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 "
          />
        </div>

        <div className="flex flex-col md:flex-row gap-3 justify-center items-center md:justify-between ">
          <div className="w-full md:w-[250px]">
            <div className="flex gap-2 mb-2 items-center">
              <img className="w-4 h-4" src="/public/icon/location.png" alt="" />
              <span className=" font-bold">Your Location</span>
            </div>

            <div className="relative">
              <img
                className="absolute right-2 top-2"
                src="/public/icon/arrow2.png"
                alt=""
              />
              <select className="appearance-none relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm font-bold rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option></option>
                <option>HTML</option>
                <option>React</option>
                <option>Vue</option>
                <option>Angular</option>
                <option>Svelte</option>
              </select>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full md:w-[250px]">
            <div className="flex gap-2 mb-2 items-center">
              <img className="w-4 h-4" src="/public/icon/home.png" alt="" />
              <span className=" font-bold">Property type</span>
            </div>

            <div className="relative ">
              <img
                className="absolute right-2 top-2"
                src="/public/icon/arrow2.png"
                alt=""
              />
              <select className="appearance-none hover:placeholder-shown:bg-emerald-500 relative bg-white bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm font-bold rounded-md focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5">
                <option></option>
                <option>HTML</option>
                <option>React</option>
                <option>Vue</option>
                <option>Angular</option>
                <option>Svelte</option>
              </select>
            </div>
          </div>
          {/* 3 */}
          <div className="w-full md:w-[250px]">
            <div className="flex gap-2 mb-2 items-center">
              <img className="w-5 h-5" src="/public/icon/dollar.png" alt="" />
              <span className=" font-bold">Budget</span>
            </div>

            <div className="relative">
              <img
                className="absolute right-2 top-2"
                src="/public/icon/arrow2.png"
                alt=""
              />
              <select className="appearance-none hover:placeholder-shown:bg-emerald-500 relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm font-bold rounded-md focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5">
                <option></option>
                <option>HTML</option>
                <option>React</option>
                <option>Vue</option>
                <option>Angular</option>
                <option>Svelte</option>
              </select>
            </div>
          </div>
        </div>
        <button className=" mt-6 flex justify-center items-center gap-2 bg-blue-500 px-3 py-2 md:px-6 md:py-2 text-white w-full">
          <div>
            <img src="/public/icon/search2.png" alt="" />
          </div>
          <p>Find Properties</p>
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
