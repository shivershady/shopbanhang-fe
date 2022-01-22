import React, { Component, useEffect, useState } from "react";

import { useNotification } from "Notifications/NotificationProvider";
import { getCart } from "services/cartService";
import { deleteCart } from "services/cartService";
import { CheckIcon, ClockIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { updateCart } from "services/cartService";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const dispatch = useNotification();
  useEffect(async () => {
    await getCart()
      .then((response) => {
        setCartItems(response);
      })
      .catch((error) => {
        dispatch({
          type: "error",
          message: error,
        });
      });
  }, []);
  console.log(cartItems);

  let cartItem = [];
  cartItems.map((Item) => {
    cartItem.push(Item.products);
  });

  const itemsPrice = cartItem.reduce((a, c) => a + c.quantity * c.price, 0);
  const taxPrice = Math.round(itemsPrice * 0.14);
  const shippingPrice = itemsPrice > 200000 ? 0 : 20000;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const removeCart = async (id) => {
    await deleteCart(id)
      .then((response) => {
        dispatch({
          type: "success",
          message: "Xóa sản phẩm khỏi giỏ hàng thành công",
        });
      })
      .catch((error) => {
        dispatch({
          type: "error",
          message: "Xóa sản phẩm khỏi giỏ hàng thất bại " + error,
        });
      });
    window.location.reload(false);
  };

  const incrementCount = async (product) => {
    const qty = product.quantity + 1;
    await updateCart(product.id, { quantity: qty })
      .then((response) => {
        dispatch({
          type: "success",
          message: "Cập nhật giỏ hàng thành công",
        });
      })
      .catch((error) => {
        dispatch({
          type: "error",
          message: "cập nhật giỏ hàng thất bại " + error,
        });
      });
    window.location.reload(false);
  };
  const decrementCount = async (product) => {
    let qty = 0;
    product.quantity == 1 ? (qty = 1) : (qty = product.quantity - 1);
    await updateCart(product.id, { quantity: qty })
      .then((response) => {
        dispatch({
          type: "success",
          message: "Cập nhật giỏ hàng thành công",
        });
      })
      .catch((error) => {
        dispatch({
          type: "error",
          message: "cập nhật giỏ hàng thất bại " + error,
        });
      });
    window.location.reload(false);
  };

  return (
    <main className="container mx-auto mt-10">
      <div className="md:flex shadow-md my-10 rounded-xl overflow-hidden">
        {/* AllProductCart */}
        <div className="md:w-3/4 bg-white px-10 py-10">
          <div className="max-w-full mx-auto">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Giỏ hàng
            </h1>
            <section
              aria-labelledby="cart-heading"
              className="lg:col-span-7 mt-10"
            >
              {cartItems.map((product, productIdx) => (
                <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
                  <li key={product.id} className="flex py-6 sm:py-10">
                    <div className="flex-shrink-0">
                      <img
                        src={product.products.image}
                        alt={product.products.name}
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
                                {product.products.name}
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
                            {product.products.price} vnđ
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
                              onClick={() => decrementCount(product.products)}
                            >
                              -
                            </button>
                            <input
                              className="w-10 h-8 border border-gray-300 text-center"
                              type="text"
                              value={product.products.quantity}
                            />
                            <button
                              className="w-10 h-8 border border-gray-300"
                              onClick={() => incrementCount(product.products)}
                            >
                              +
                            </button>
                          </div>
                          <div>
                            Thành tiền :{" "}
                            <span className="text-red-500">
                              {product.products.total} Vnđ
                            </span>
                          </div>

                          <div
                            className="absolute top-0 right-0"
                            onClick={() => removeCart(product.products.id)}
                          >
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
                        <span>Đã thêm vào giỏ hàng</span>
                      </p>
                    </div>
                  </li>
                </ul>
              ))}
            </section>
          </div>

          <Link to="/" className="flex  text-indigo-600 text-sm mt-10">
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Tiếp tục mua sắm
          </Link>
        </div>
        {/* SummaryCart */}
        <div id="summary" className="md:w-1/4 px-8 py-10 bg-gray-200">
          <h1 className=" text-2xl border-b pb-8 font-bold">
            Tóm tắt đơn hàng
          </h1>
          <div className="my-5 uppercase font-bold text-base">Sản phẩm 3</div>
          <div>
            <label className="font-medium inline-block mb-3 uppercase text-lg">
              Đang chuyển hàng
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Vận chuyển tiêu chuẩn - 20000 vnđ</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className=" inline-block mb-3 text-lg uppercase font-medium"
            >
              Mã khuyến mại
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Nhập mã của bạn"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 p-2 hover:bg-gray-300 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white uppercase w-full">
            Áp dụng
          </button>
          <div className="border-t mt-8">
            <div className="pb-6">
              <dl className="space-y-4">
                <div className="flex items-center justify-between space-x-2">
                  <dt className="text-sm text-gray-600">Tổng</dt>
                  <dd className="text-sm font-medium text-red-500">
                    {itemsPrice}
                  </dd>
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <dt className="text-sm text-gray-600">Phí Ship</dt>
                  <dd className="text-sm font-medium text-red-500">
                    {shippingPrice}
                  </dd>
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <dt className="text-sm text-gray-600">Thuế</dt>
                  <dd className="text-sm font-medium text-red-500">
                    {taxPrice}
                  </dd>
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <dt className="text-base font-medium text-gray-900">
                    Tổng đơn đặt hàng
                  </dt>
                  <dd className="text-base font-medium text-red-500">
                    {totalPrice}
                  </dd>
                </div>
              </dl>
            </div>
            <button className="border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 p-2 hover:bg-gray-300 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white w-full">
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
