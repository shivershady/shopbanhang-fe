import React ,{ useState } from 'react';
import { Carousel } from "react-carousel-minimal";

const slider = [
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/234315/samsung-galaxy-a32-4g-thumb-xanh-600x600-200x200.jpg",
  },
  {
    image:
      "https://hoanghamobile.com/i/productlist/dsp/Uploads/2021/03/11/image-removebg-preview-1.png",
  },
  {
    image:
      "https://hc.com.vn/i/ecommerce/media/GS.007666_FEATURE_80464.jpg",
  },
  {
    image:
      "https://product.hstatic.net/1000063620/product/samsung-galaxy-a32-mhm_4b065c798e844c098fb66385829d8a57_grande.jpg",
  },
  {
    image:
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
  },
  {
    image:
      "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
  },
  {
    image:
      "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
  },
  {
    image:
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
  },
];

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const StarRating = () => {
    const [rating, setRating] = useState(4);
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

function ProductDetail(props) {
  const {name , price , iHot , iPay , quantity , view , image , discount}= props;
  const imgProduct = image.map((img) => ({
    image : img.url,
  }));

  const [count,setCount] = useState(1);
  const decrementCount=()=>setCount(count - 1);
  const incrementCount=()=>setCount(count + 1);
    return (
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
                  data={slider}
                  time={2000}
                  width="850px"
                  height="500px"
                  
                  radius="10px"
                  slideNumber={true}
                  slideNumberStyle={slideNumberStyle}
                  
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
                    minWidth: "800px",
                    margin: "40px auto",
                  }}
                />
              </div>
            </div>  

            <div className="p-8 border-l border-gray-300 space-y-2">
              {/* Title */}
              <div className="uppercase tracking-wide text-4xl text-indigo-500 font-extrabold">
                {name}
              </div>
              <nav>
                <ol className="list-reset rounded flex bg-grey-light text-grey space-x-4 justify-start">
                  <li>
                    <StarRating />
                  </li>
                  <li>|</li>
                  <li className="text-gray-400 space-x-2">
                    <span>{view}</span>
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
                    {price} vnđ
                  </div>
                  <div className="text-gray-500 line-through">
                    {iHot} vnđ
                  </div>
                  <div className="text-red-500 text-xl font-bold border border-red-500 text-center w-24 ">
                    -{discount}%
                  </div>
                </div>

                {/* variants */}
                <div className="space-y-4">
                  <div className="lg:flex items-center space-x-6 space-y-2">
                    {/* <div className="font-bold">Màu:</div>
                    <button className="bg-blue-300 border border-yellow-400 focus:border-green-400 py-4 px-8 font-bold uppercase text-xs rounded">
                      Xanh
                    </button>
                    <button className="bg-red-300 border border-yellow-400 focus:border-green-400 py-4 px-8 font-bold uppercase text-xs rounded">
                      Đỏ
                    </button>
                    <button className="bg-yellow-300 border border-yellow-400 focus:border-green-400 py-4 px-8 font-bold uppercase text-xs rounded">
                      Vàng
                    </button> */}
                  </div>
                  <div className="flex space-x-4">
                    <div className="font-bold">Trong kho :</div>
                    {/* <nav>
                      <ol className="list-reset rounded flex bg-grey-light text-grey space-x-4 justify-start">
                        <li className="text-gray-400 space-x-2 cursor-pointer">8Gb</li>
                        <li>|</li>
                        <li className="text-gray-400 space-x-2 cursor-pointer">16Gb</li>
                        <li>|</li>
                        <li className="text-gray-400 space-x-2 cursor-pointer">32Gb</li>
                      </ol>
                    </nav> */}
                    <p className="text-gray-400">{quantity}</p>
                  </div>
                </div>
              </div>

              {/* quantity & button */}
              <div className="p-4 space-y-4 text-center">
                <div className="flex justify-center space-x-2">
                  <button className="w-10 h-8 border border-gray-300" onClick={decrementCount}>-</button>
                  <input
                    className="w-10 h-8 border border-gray-300 text-center"
                    type="text"
                    value={count}
                  />
                  <button className="w-10 h-8 border border-gray-300" onClick={incrementCount}>+</button>
                </div>
                <button className="px-16 py-4 bg-indigo-600 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">
                  Chọn Mua
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ProductDetail
