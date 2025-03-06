import delivery_boy from "../assets/images/delivery_boy.png";

const Track = () => {
  return (
    <div>
      <div className="relative mt-10 p-4">
        <div className="p-4 h-80 w-60 bg-[#F6DA72] text-[#343747] rounded-3xl absolute -top-6 left-16">
          <p className="text-2xl font-semibold">
            Your Trusted Delivery Partner
          </p>
          <p className="text-2xl font-semibold">Since</p>
          <div className="flex items-center justify-center">
            <div className="text-4xl font-bold">
              <p>2</p>
              <p>0</p>
              <p>2</p>
              <p>5</p>
            </div>
            <img src={delivery_boy} alt="" className="h-56" />
          </div>
        </div>
        <div className=" p-5 flex bg-[#38373C] w-full h-60 rounded-3xl">
          <div className="w-[30%]"></div>
          <div className="w-[60%]">
            <div className="text-white">
              <button>Send</button>
              <button className="ml-5">Receive</button>
            </div>
            <div className="flex justify-between mt-5">
              <div className="flex flex-col">
                <p className="text-white">Courier Type</p>
                <select className="h-10 bg-gray-100 border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Local</option>
                  <option value="">International</option>
                </select>
              </div>

              <div className="flex flex-col">
                <p className="text-white">Location</p>
                <select className="h-10 bg-gray-100 border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Dhaka</option>
                  <option value="">Chittagong</option>
                  <option value="">Sylhet</option>
                </select>
              </div>

              <div className="flex flex-col">
                <p className="text-white">date </p>
                <input
                  className="h-10 bg-gray-100 border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="date"
                  name=""
                  id=""
                />
              </div>
            </div>
            <button className="mt-10 h-10 w-24 rounded-md text-white bg-[#F65B00]">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
