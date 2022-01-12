import { CheckIcon, ClockIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AllProductCart({ cart }) {
  let arrCart = [];
  Object.keys(cart).map((item) => {
    arrCart.push(cart[item]);
  });
  console.log(arrCart);
  const [count, setCount] = useState();
  const decrementCount = () =>
    count === 1 ? setCount(1) : setCount(count - 1);
  const incrementCount = () => setCount(count + 1);
  return (
    <div className="md:w-3/4 bg-white px-10 py-10">
      <div className="max-w-full mx-auto">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Giỏ hàng
        </h1>
        <section aria-labelledby="cart-heading" className="lg:col-span-7 mt-10">
          {arrCart.map((products, i) => (
            <ul
              key={i}
              className="border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              {products.map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.product.image.url}
                      alt={product.product.name}
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
                              {product.product.name}
                            </a>
                          </h3>
                        </div>
                        {/* <div className="mt-1 flex text-sm">
                        <p className="text-gray-500">{product.color}</p>
                        {product.size ? (
                          <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">
                            {product.size}
                          </p>
                        ) : null}
                      </div> */}
                        <div className="mt-1 text-sm font-medium text-red-500">
                          {product.product.price} vnđ
                        </div>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label htmlFor={`quantity-${productIdx}`}>
                          Số lượng :
                        </label>
                        <br />
                        <div className="space-x-2">
                          <button
                            className="w-10 h-8 border border-gray-300"
                            onClick={decrementCount}
                          >
                            -
                          </button>
                          <input
                            className="w-10 h-8 border border-gray-300 text-center"
                            type="text"
                            value={product.quantity}
                          />
                          <button
                            className="w-10 h-8 border border-gray-300"
                            onClick={incrementCount}
                          >
                            +
                          </button>
                        </div>
                        <div>
                          Thành tiền : <span className="text-red-500">{product.total} Vnđ</span>
                        </div>

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
                        <CheckIcon
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                      <span>
                       Đã thêm vào giỏ hàng
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </section>
      </div>

      <Link to="/category" className="flex  text-indigo-600 text-sm mt-10">
        <svg
          className="fill-current mr-2 text-indigo-600 w-4"
          viewBox="0 0 448 512"
        >
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
        </svg>
        Tiếp tục mua sắm
      </Link>
    </div>
  );
}
