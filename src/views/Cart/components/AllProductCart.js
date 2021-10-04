import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/solid";

const products = [
  {
    id: 1,
    name: "Áo thun cơ bản",
    href: "#",
    price: "$32.00",
    color: "Nâu",
    inStock: true,
    size: "Size : L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
    imageAlt: "Mặt trước của áo thun nam cơ bản in màu nâu.",
  },
  {
    id: 2,
    name: "Áo thun cơ bản",
    href: "#",
    price: "$32.00",
    color: "Đen",
    inStock: false,
    leadTime: "3–4 tuần",
    size: "Size : L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
    imageAlt: "Mặt trước của Áo thun nam màu đen.",
  },
  {
    id: 3,
    name: "Bình",
    href: "#",
    price: "$35.00",
    color: "Trắng",
    inStock: true,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
    imageAlt: "Bình cách nhiệt có đế màu trắng và nắp chụp màu đen.",
  },
];

export default function AllProductCart() {
  return (
    <div className="md:w-3/4 bg-white px-10 py-10">
      <div className="max-w-full mx-auto">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Giỏ hàng
        </h1>
        <section aria-labelledby="cart-heading" className="lg:col-span-7 mt-10">
          <ul
            role="list"
            className="border-t border-b border-gray-200 divide-y divide-gray-200"
          >
            {products.map((product, productIdx) => (
              <li key={product.id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                  />
                </div>

                <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <a
                            href={product.href}
                            className="font-semibold text-gray-700 hover:text-blue-500"
                          >
                            {product.name}
                          </a>
                        </h3>
                      </div>
                      <div className="mt-1 flex text-sm">
                        <p className="text-gray-500">{product.color}</p>
                        {product.size ? (
                          <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">
                            {product.size}
                          </p>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm font-medium text-red-500">
                        {product.price}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <label
                        htmlFor={`quantity-${productIdx}`}
                        className="sr-only"
                      >
                        Quantity, {product.name}
                      </label>
                      <select
                        id={`quantity-${productIdx}`}
                        name={`quantity-${productIdx}`}
                        className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                      </select>

                      <div className="absolute top-0 right-0">
                        <button
                          type="button"
                          className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Remove</span>
                          <XIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                    {product.inStock ? (
                      <CheckIcon
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ClockIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-300"
                        aria-hidden="true"
                      />
                    )}

                    <span>
                      {product.inStock
                        ? "Trong kho"
                        : `Sẽ giao trong ${product.leadTime}`}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <a href="#" className="flex  text-indigo-600 text-sm mt-10">
        <svg
          className="fill-current mr-2 text-indigo-600 w-4"
          viewBox="0 0 448 512"
        >
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
        </svg>
        Tiếp tục mua sắm
      </a>
    </div>
  );
}
