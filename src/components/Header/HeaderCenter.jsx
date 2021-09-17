import React from 'react'

export default function HeaderCenter() {
    return (
        <div className="col-span-2">
            <form className=" grid grid-cols-4 gap-4">
            <input
              type="text"
              className="h-10 col-span-3"
              placeholder="Tìm danh mục sản phẩm mong muốn"
            />
            <button className=" bg-purple-800 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800 hidden lg:block">
              Tìm kiếm
            </button>
            <button className=" bg-purple-800 text-white rounded hover:bg-gray-200 hover:text-gray-800 p-2 mx-auto lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
          <div className="hidden lg:flex justify-evenly mt-4">
              <div>Sản phẩm </div>
              <div>Sản phẩm </div>
              <div>Sản phẩm </div>
              <div>Sản phẩm </div>
              <div>Sản phẩm </div>
              <div>Sản phẩm </div>
              <div>Sản phẩm </div>
              <div>Sản phẩm </div>
              <div>Sản phẩm </div>
          </div>
        </div>
    )
}
