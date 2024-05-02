import toast from "react-hot-toast";
import swal from "sweetalert";

const BidFrom = () => {
  
 
    return (
      <div className="p-6 rounded-md bg-blue-50">
        <p className="text-lg md:text-xl text-gray-500">Property Value</p>
        <p className="md:text-2xl font-bold my-2 md:my-4">$ 300k - $ 310k</p>
        <p className="text-sm md:text-base text-gray-500 w-[80%]">
          Your bid can not be than 10% of the property Minimum value.
        </p>

        <label className="form-control w-full mt-5">
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
          <button
            onClick={() => {
              // swal("Good job!", "You clicked the button!", "success");
              toast.success("Thank you, Bid successfull");
            }}
            className="px-4 py-2 mt-6 md:mt-10 rounded-md text-sm lg:text-base text-white bg-[#0059B1] "
          >
            Bid Property
          </button>
        </div>
      </div>
    );
};

export default BidFrom;