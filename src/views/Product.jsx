import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Carousel } from "react-carousel-minimal";

const StarRating = () => {
  const [rating, setRating] = useState(3);
  return (
    <div className="star-rating flex">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span
            key={index}
            className={index <= rating ? "text-yellow-300" : "text-gray-300"}
          >
            <span className="star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          </span>
        );
      })}
    </div>
  );
};


const data = [
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/234315/samsung-galaxy-a32-4g-thumb-xanh-600x600-200x200.jpg",
    caption: "",
  },
  {
    image:
      "https://hoanghamobile.com/i/productlist/dsp/Uploads/2021/03/11/image-removebg-preview-1.png",
    caption: "",
  },
  {
    image:
      "https://hc.com.vn/i/ecommerce/media/GS.007666_FEATURE_80464.jpg",
    caption: "",
  },
  {
    image:
      "https://product.hstatic.net/1000063620/product/samsung-galaxy-a32-mhm_4b065c798e844c098fb66385829d8a57_grande.jpg",
    caption: "",
  },
  {
    image:
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    caption: "",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    caption: "",
  },
  {
    image:
      "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    caption: "",
  },
  {
    image:
      "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    caption: "",
  },
  {
    image:
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    caption: "",
  },
];

const captionStyle = {
  fontSize: "2em",
  fontWeight: "bold",
};
const slideNumberStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};

export default function Product() {
  return (
    <div className="container-fluid space-y-10">
      <Header></Header>
      <main className="container mx-auto space-y-4">
        {/* ProductHeader */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden ">
          <div className="lg:flex">
            {/* Imgage */}

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  padding: "0 20px",
                }}
              >
                <Carousel
                  data={data}
                  time={2000}
                  width="850px"
                  height="500px"
                  captionStyle={captionStyle}
                  radius="10px"
                  slideNumber={true}
                  slideNumberStyle={slideNumberStyle}
                  captionPosition="bottom"
                  automatic={true}
                  dots={true}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
                  thumbnails={true}
                  thumbnailWidth="100px"
                  style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "800px",
                    margin: "40px auto",
                  }}
                />
              </div>
            </div>

            <div className="p-8 border-l border-gray-300 space-y-2">
              {/* Title */}
              <div className="uppercase tracking-wide text-2xl text-indigo-500 font-bold">
                Điện Thoại Samsung Galaxy S20 FE - Hàng Chính Hãng
              </div>
              <nav>
                <ol className="list-reset rounded flex bg-grey-light text-grey space-x-4 justify-start">
                  <li>
                    <StarRating />
                  </li>
                  <li>|</li>
                  <li className="text-gray-400 space-x-2">
                    <span>300</span>
                    <span>Đánh giá</span>
                  </li>
                  <li>|</li>
                  <li className="text-gray-400 space-x-2">
                    <span>1000</span>
                    <span>Đã bán</span>
                  </li>
                </ol>
              </nav>
              <div className="border-b py-4 space-y-4">
                <div className="bg-gray-100 md:flex items-center space-x-4 p-4">
                  <div className="text-red-500 text-4xl font-bold">
                    12.000.000 vnđ
                  </div>
                  <div className="text-gray-500 line-through">
                    15.000.000 vnđ
                  </div>
                  <div className="  text-red-500 text-xl font-bold border border-red-500">
                    -25%
                  </div>
                </div>

                {/* variants */}
                <div className="space-y-4">
                  <div className="lg:flex items-center space-x-6 space-y-2">
                    <div className="font-bold">Màu:</div>
                    <button className="bg-blue-300 border border-yellow-400 focus:border-green-400 py-4 px-8 font-bold uppercase text-xs rounded">
                      Xanh
                    </button>
                    <button className="bg-red-300 border border-yellow-400 focus:border-green-400 py-4 px-8 font-bold uppercase text-xs rounded">
                      Đỏ
                    </button>
                    <button className="bg-yellow-300 border border-yellow-400 focus:border-green-400 py-4 px-8 font-bold uppercase text-xs rounded">
                      Vàng
                    </button>
                  </div>
                  <div className="flex space-x-4">
                    <div className="font-bold">Dung lượng :</div>
                    <nav>
                      <ol className="list-reset rounded flex bg-grey-light text-grey space-x-4 justify-start">
                        <li className="text-gray-400 space-x-2">8Gb</li>
                        <li>|</li>
                        <li className="text-gray-400 space-x-2">16Gb</li>
                        <li>|</li>
                        <li className="text-gray-400 space-x-2">32Gb</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>

              {/* quantity&button */}
              <div className="p-4 space-y-4 text-center">
                <div className="flex justify-center space-x-2">
                  <button className="w-10 h-8 border border-gray-300">-</button>
                  <input
                    className="w-10 h-8 border border-gray-300 text-center"
                    type="text"
                    value="1"
                  />
                  <button className="w-10 h-8 border border-gray-300">+</button>
                </div>
                <button className="px-16 py-4 bg-purple-800 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">
                  Chọn Mua
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Sản Phẩm Tương Tự */}
        <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 space-y-4">
          <b>Sản phẩm tương tự</b>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-5 text-center">
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thông tin chi tiết */}
        <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 space-y-4">
          <b>Thông tin chi tiết</b>
          <table className="table-fixed border-separate border border-gray-400 w-full text-center">
            <thead>
              <tr>
                <th className="border border-gray-200">Tiêu đề</th>
                <th className="border border-gray-200">Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200">Dung lượng pinS</td>
                <td className="border border-gray-200">4500 mAh</td>
              </tr>
              <tr className="bg-emerald-200">
                <td className="border border-gray-200">Bluetooth</td>
                <td className="border border-gray-200">V5.0</td>
              </tr>
              <tr>
                <td className="border border-gray-200">Thương hiệu</td>
                <td className="border border-gray-200">
                  Samsung Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Excepturi debitis deserunt delectus quas rem dolores
                  ratione ex facere assumenda tempore hic libero suscipit sequi
                  harum, veniam, obcaecati illum! Qui, corporis.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Mô tả sản phẩm */}
        <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 space-y-4">
          <b>Mô tả sản phẩm</b>
          <div>
            Màn hình: FHD Infinity-O 6.5 inch Hệ điều hành: Android 10 Camera
            sau: Chính 12 MP & Phụ 12 MP, 8 MP Camera trước: 32 MP CPU: Exynos
            990 8 nhân RAM: 8 GB Bộ nhớ trong: 128 GB/ 256GB Thẻ SIM: 2 Nano SIM
            (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G Dung lượng pin: 4500 mAh, có
            sạc nhanh
          </div>
        </div>
        {/* Đánh giá từ khách hàng */}
        <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 space-y-4">
          <b>Đánh giá từ khách hàng</b>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 grid grid-cols-4">
              <div className="space-y-2 mx-4 col-span-2">
                <div className="font-bold text-lg text-red-500">4.6 trên 5</div>
                <StarRating />
              </div>
              <div className="col-span-2 lg:flex justify-between items-center">
                <button className="bg-white px-2 py-2 border focus:border-green-300 rounded-md my-1">
                  5 Sao(100)
                </button>
                <button className="bg-white px-2 py-2 border focus:border-green-300 rounded-md my-1">
                  4 Sao(100)
                </button>
                <button className="bg-white px-2 py-2 border focus:border-green-300 rounded-md my-1">
                  3 Sao(100)
                </button>
                <button className="bg-white px-2 py-2 border focus:border-green-300 rounded-md my-1">
                  2 Sao(100)
                </button>
                <button className="bg-white px-2 py-2 border focus:border-green-300 rounded-md my-1">
                  1 Sao(100)
                </button>
              </div>
            </div>
            <div className="px-4 space-y-4">
              <div className="border-b grid grid-cols-5">
                <div className="col-span-1">user</div>
                <div className="col-span-4">
                  <StarRating />
                  <div>Đã mua hàng</div>
                  <div>Đánh giá 11 ngày trước</div>
                  <div>
                    <b>Bình luận:</b>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa voluptatem est quas suscipit delectus animi
                      doloremque natus eius quaerat incidunt, ad assumenda sed!
                      Itaque ipsum ullam distinctio eos officiis obcaecati!
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b grid grid-cols-5">
                <div className="col-span-1">user</div>
                <div className="col-span-4">
                  <StarRating />
                  <div>Đã mua hàng</div>
                  <div>Đánh giá 11 ngày trước</div>
                  <div>
                    <b>Bình luận:</b>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa voluptatem est quas suscipit delectus animi
                      doloremque natus eius quaerat incidunt, ad assumenda sed!
                      Itaque ipsum ullam distinctio eos officiis obcaecati!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Khám phá thêm */}
        <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 space-y-4">
          <b>Khám phá thêm</b>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-5 text-center">
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phẩm đã xem */}
        <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 space-y-4">
          <b>Sản phẩm đã xem</b>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-5 text-center">
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
              <img
                className="row-span-3 w-full h-full"
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="row-span-1 flex flex-col justify-end items-center text-center">
                <p className="text-sm font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-xs font-medium">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
