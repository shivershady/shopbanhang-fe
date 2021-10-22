import Images from "constants/Images";
import React from "react";

// components

export default function CardShopProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={Images.team_2_800x800}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                  style={{ maxWidth: 150 }}
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blue-600">
                    22
                  </span>
                  <span className="text-sm text-blue-400">Người theo dõi</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blue-600">
                    89
                  </span>
                  <span className="text-sm text-blue-400">Đánh giá</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blue-700 mb-2">
              Jenna Stones
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blue-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blue-400"></i>{" "}
              Los Angeles, California
            </div>
            <div className="mb-2 text-blue-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blue-400"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-blue-600">
              <i className="fas fa-university mr-2 text-lg text-blue-400"></i>
              University of Computer Science
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blue-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blue-700">
                  Một nghệ sĩ tầm cỡ, Jenna cái tên được lấy bởi Nick Murphy,
                  sống ở Brooklyn, lớn lên ở Melbourne, viết, biểu diễn và ghi
                  lại tất cả các bản nhạc của chính anh ấy, tạo cho nó một sự ấm
                  cúng, thân mật cảm giác với một cấu trúc rãnh vững chắc. Một
                  nghệ sĩ đáng kể phạm vi.
                </p>
                <a
                  href="#pablo"
                  className="font-normal text-lightBlue-500"
                  onClick={(e) => e.preventDefault()}
                >
                  Cho xem nhiều hơn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
