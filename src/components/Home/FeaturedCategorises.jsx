import React from "react";

const categories = [
  {
    icon: (
      <img
        src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
        alt=""
      />
    ),
    name: "Điện thoại",
  },
  {
    icon: (
      <img
        src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
        alt=""
      />
    ),
    name: "Điện thoại ",
  },
  {
    icon: (
      <img
        src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
        alt=""
      />
    ),
    name: "Điện thoại",
  },
  {
    icon: (
      <img
        src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
        alt=""
      />
    ),
    name: "Điện thoại",
  },
  {
    icon: (
      <img
        src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
        alt=""
      />
    ),
    name: "Điện thoại",
  },
  {
    icon: (
      <img
        src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
        alt=""
      />
    ),
    name: "Điện thoại",
  },
  {
    icon: (
      <img
        src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
        alt=""
      />
    ),
    name: "Điện thoại",
  },
  {
    icon: (
      <img
        src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
        alt=""
      />
    ),
    name: "Điện thoại",
  },
  {
    icon: (
      <img
        src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
        alt=""
      />
    ),
    name: "Điện thoại",
  },
  {
    icon: (
      <img
        src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
        alt=""
      />
    ),
    name: "Điện thoại",
  },
];

function FeaturedCategorises() {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white px-8 py-4">
      <b>Danh mục sản phẩm</b>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 my-5 text-center">
        {categories.map((item, index) => {
          return (
            <div key={index} className="cursor-pointer">
              {item.icon}
              <p className="text-lg font-medium">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedCategorises;
