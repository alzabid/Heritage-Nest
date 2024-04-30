

const Reviews = () => {
    return (
      <>
        <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-bold py-10">
          Testimonials
        </h1>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* 1 */}
          <div className="card-body max-w-[592px] space-y-3 md:space-y-5 bg-[#ECF5FF]">
            <div className="rating rating-sm md:rating-md flex gap-3 items-center justify-center">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#FEC84B]"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#FEC84B]"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#FEC84B]"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#FEC84B]"
                checked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#FEC84B]"
              />
            </div>
            <p className="text-xs md:text-sm lg:text-base text-gray-600 text-center">
              "The level of security provided by CypherPlay is unmatched. I feel
              confident using my card for both everyday purchases and travel.
              It's the peace of mind I was looking for."
            </p>
            <div className="flex flex-col justify-center items-center ">
              <div className="avatar">
                <div className="w-10 md:w-12 lg:w-14 border-2 rounded-full border-[#D95D0F]">
                  <img src="/public/image/review1.png" />
                </div>
              </div>
              <p className="text-xl lg:text-2xl font-semibold">Tony Stark</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">
                Marketing manager, XYZ
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="card-body max-w-[592px] space-y-3 md:space-y-5 bg-[#ECF5FF]">
            <div className="rating rating-sm md:rating-md flex gap-3 items-center justify-center">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#FEC84B]"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#FEC84B]"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#FEC84B]"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#FEC84B]"
                checked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#FEC84B]"
              />
            </div>
            <p className="text-xs md:text-sm lg:text-base text-gray-600 text-center">
              "The level of security provided by CypherPlay is unmatched. I feel
              confident using my card for both everyday purchases and travel.
              It's the peace of mind I was looking for."
            </p>
            <div className="flex flex-col justify-center items-center ">
              <div className="avatar">
                <div className="w-10 md:w-12 lg:w-14 border-2 rounded-full border-[#D95D0F]">
                  <img src="/public/image/review2.png" />
                </div>
              </div>
              <p className="text-xl lg:text-2xl font-semibold">Tony Stark</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">
                Marketing manager, XYZ
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default Reviews;