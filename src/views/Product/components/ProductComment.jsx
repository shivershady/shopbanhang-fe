import React , { useState } from 'react'

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

function ProductComment() {
    return (
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
    )
}

export default ProductComment
