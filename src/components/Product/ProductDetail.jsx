import React, { useState } from "react";
import { Carousel } from "react-carousel-minimal";

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
  const {
    name,
    price,
    iHot,
    iPay,
    quantity,
    view,
    image,
    discount,
    content,
    description,
  } = props;
  console.log(content);
  const imgProduct = image.map((img) => ({
    image: img.url,
  }));

  const [count, setCount] = useState(1);
  const decrementCount = () => setCount(count - 1);
  const incrementCount = () => setCount(count + 1);
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
            {imgProduct.length > 0 && (
              <Carousel
                data={imgProduct}
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
            )}
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
                  {view && <span>{view}</span>}
                  {!view && <span>0</span>}
                <span>Đánh giá</span>
              </li>
              <li>|</li>
              <li className="text-gray-400 space-x-2">
                <span>{quantity}</span>
                <span>Đã bán</span>
              </li>
            </ol>
          </nav>
          <div className="border-b py-4 space-y-4">
            <div className="bg-gray-100 md:flex items-center space-x-4 p-4">
              <div className="text-red-500 text-4xl font-bold">{price} vnđ</div>
              <div className="text-gray-500 line-through">{iHot} vnđ</div>
              <div className="text-red-500 text-xl font-bold border border-red-500 text-center w-24 ">
                -{discount}%
              </div>
            </div>

            {/* variants */}
            <div className="space-y-4">
              <div>
                <div className="font-bold"> Thông tin chi tiết :</div>
                <p>{content}</p>
              </div>
              <div>
                <div className="font-bold"> Mô tả sản phẩm :</div>
                <p>{description}</p>
              </div>
              <div className="flex space-x-4">
                <div className="font-bold">Sản phẩm còn :</div>
                <p className="text-gray-400">{quantity}</p>
              </div>
            </div>
          </div>

          {/* quantity & button */}
          <div className="p-4 space-y-4 text-center">
            <div className="flex justify-center space-x-2">
              <button
                className="w-10 h-8 border border-gray-300"
                onClick={decrementCount}
              >
                -
              </button>
              <input
                className="w-10 h-8 border border-gray-300 text-center"
                type="text"
                value={count}
              />
              <button
                className="w-10 h-8 border border-gray-300"
                onClick={incrementCount}
              >
                +
              </button>
            </div>
            <button className="px-16 py-4 bg-indigo-600 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">
              Chọn Mua
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
