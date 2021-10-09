import React from "react";

const products = [
  {
    id: 1,
    name: "Bình đất",
    href: "#",
    price: "48.000 vnđ",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Chai sứ mảnh mai cao với phần thân bằng đất sét tự nhiên và nút chai.",
  },
  {
    id: 2,
    name: "Bình bầu dục",
    href: "#",
    price: "35.000 vnđ",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Chai cách nhiệt màu xanh lá cây ô liu có nắp vặn loe và phần trên bằng phẳng.",
  },
  {
    id: 3,
    name: "Giấy ghi chú",
    href: "#",
    price: "89.000 vnđ",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Người dùng bút để gạch ngang một nhiệm vụ trên thẻ giấy năng suất.",
  },
  {
    id: 4,
    name: "Bút chì cơ khí được gia công",
    href: "#",
    price: "35.000 vnđ",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Tay cầm bút chì cơ bằng thép gia công màu đen với đầu và đỉnh bằng đồng.",
  },
  // More products...
];

export default function Productgrid() {
  return (
    <div className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
      {/* Replace with your content */}
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-full">
        <div className="max-w-full mx-auto py-10 px-4">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* /End replace */}
    </div>
  );
}
