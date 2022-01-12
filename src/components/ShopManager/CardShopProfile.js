import React from "react";

// components

export default function CardShopProfile({user,shop}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={user.url}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                  style={{ maxWidth: 150 }}
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blue-700">
              {user.name}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blue-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blue-400"></i>{" "}
              {shop.province + " " + shop.city}
            </div>
            <div className="mb-2 text-blue-600">
              <i className="fas fa-briefcase mr-2 text-lg text-blue-400"></i>
              {shop.address_line1}
            </div>
            <div className="mb-2 text-blue-600">
              <i className="fas fa-university mr-2 text-lg text-blue-400"></i>
              {shop.address_line2}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blue-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blue-700">
              {shop.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
