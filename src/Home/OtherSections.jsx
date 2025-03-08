import React from "react";


const OtherSections = () => {
  return (
    <div className="mx-auto container py-10">
      {/* Services Section */}
      <div className="py-10 bg-gradient-to-r from-[#FFFAF7] to-[#FEF7F1] rounded-lg ">
        <h2 className="text-4xl font-semibold text-center mb-10">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md w-72">
            <img
              src="https://steadfast.com.bd/landing-page/asset/images/ecom_delivry.svg"
              alt="E-commerce Delivery"
              className="w-40 h-40 object-cover rounded-full"
            />
            <p className="text-xl font-medium">E-commerce Delivery</p>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md w-72">
            <img
              src="https://steadfast.com.bd/landing-page/asset/images/pick_n_drop.svg"
              alt="Pick and Drop"
              className="w-40 h-40 object-cover rounded-full"
            />
            <p className="text-xl font-medium">Pick and Drop</p>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md w-72">
            <img
              src="https://steadfast.com.bd/landing-page/asset/images/packeging.svg"
              alt="Packaging"
              className="w-40 h-40 object-cover rounded-full"
            />
            <p className="text-xl font-medium">Packaging</p>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md w-72">
            <img
              src="https://steadfast.com.bd/landing-page/asset/images/warehouse.svg"
              alt="Warehousing"
              className="w-40 h-40 object-cover rounded-full"
            />
            <p className="text-xl font-medium">Warehousing</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="w-full ">
              <h2 className="text-4xl font-semibold mb-6">
                Why Choose <span className="text-[#f76b1d]">Our Courier Service?</span>
              </h2>
              <img
                src="https://freelancing-career.com/uploads/content-files/202410241324401586.png"
                className="rounded-2 p-2"
                alt="Why Choose Us"
              />
            </div>
            <div className="w-full p-2 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg w-72">
                  <div className="icon-lg bg-orange bg-opacity-10 text-orange rounded-2 p-4">
                    <img
                      src="https://freelancing-career.com/uploads/content-files/202408171143296267.png"
                      alt="Daily Pickup, No Limits"
                      className="w-16 h-16"
                    />
                  </div>
                  <h5 className="mt-2 text-xl font-medium">Daily Pickup, No Limits</h5>
                  <p className="mt-2 text-gray-600">
                    Our courier service offers unlimited daily pickups.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg w-72">
                  <div className="icon-lg bg-info bg-opacity-10 text-info rounded-2 p-4">
                    <img
                      src="https://freelancing-career.com/uploads/content-files/202408171146265326.png"
                      alt="Cash on Delivery"
                      className="w-16 h-16"
                    />
                  </div>
                  <h5 className="mt-2 text-xl font-medium">Cash on Delivery</h5>
                  <p className="mt-2 text-gray-600">
                    We collect cash on your behalf.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg w-72">
                  <div className="icon-lg bg-success bg-opacity-10 text-success rounded-2 p-4">
                    <img
                      src="https://freelancing-career.com/uploads/content-files/202410241944545397.png"
                      alt="Fast Payment Service"
                      className="w-16 h-16"
                    />
                  </div>
                  <h5 className="mt-2 text-xl font-medium">Fast Payment Service</h5>
                  <p className="mt-2 text-gray-600">
                    We offer multiple payment methods like cash, bank, or mobile banking.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg w-72">
                  <div className="icon-lg bg-purple bg-opacity-10 text-purple rounded-2 p-4">
                    <img
                      src="https://freelancing-career.com/uploads/content-files/20241024195512934.png"
                      alt="Online Management"
                      className="w-16 h-16"
                    />
                  </div>
                  <h5 className="mt-2 text-xl font-medium">Online Management</h5>
                  <p className="mt-2 text-gray-600">
                    Access all necessary information on your user dashboard.
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherSections;