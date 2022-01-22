import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, PlusSmIcon } from "@heroicons/react/solid";
import { useParams } from "react-router-dom";

import ProductGrid from "components/Category/ProductGrid";
import Footer from "components/Footers/Footer";
import Header from "components/Headers/Header";
import { useNotification } from "Notifications/NotificationProvider";
import { getCategory } from "services/categorySevice";
import { Link } from "react-router-dom";
import { getProductByCategory } from "services/productService";
import { getAllProduct } from "services/productService";

export default function Category() {
  const { id } = useParams();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [listProduct, setListProduct] = useState([]);

  const dispatch = useNotification();
  useEffect(async () => {
    await getCategory()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        dispatch({
          type: "error",
          message: error,
        });
      });
  }, []);

  useEffect(async () => {
    if (id) {
      await getProductByCategory(id)
        .then((response) => {
          setListProduct(response.data);
        })
        .catch((error) => {
          dispatch({
            type: "error",
            message: error,
          });
        });
    } else {
      await getAllProduct()
        .then((response) => {
          setListProduct(response.data);
        })
        .catch((error) => {
          dispatch({
            type: "error",
            message: error,
          });
        });
    }
  }, []);

  const updateProduct = async (id) => {
    await getProductByCategory(id)
      .then((response) => {
        setListProduct(response.data);
      })
      .catch((error) => {
        dispatch({
          type: "error",
          message: error,
        });
      });
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden my-10">
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Bộ Lọc</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  <div>
                    <div className="block text-sm font-medium text-gray-900 px-6">
                      Danh mục
                    </div>
                    <div className="pt-6 space-y-3 px-6">
                      {categories.map((category, categoryIdx) => (
                        <div key={categoryIdx} className="flex items-center">
                          <Link
                            to={"/category/" + category.id}
                            className="text-blue-400 ml-4"
                            onClick={() => updateProduct(category.id)}
                          >
                            {category.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 pb-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Danh mục sản phẩm
            </h1>
          </div>

          <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Bộ lọc
                </span>
                <PlusSmIcon
                  className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                <form className="divide-y divide-gray-200 space-y-10">
                  <div>
                    <div className="block text-sm font-medium text-gray-900">
                      Danh mục
                    </div>
                    <div className="pt-6 space-y-3">
                      {categories.map((category, categoryIdx) => (
                        <div key={categoryIdx} className="flex items-center">
                          <Link
                            to={"/category/" + category.id}
                            className="text-blue-400 ml-4"
                            onClick={() => updateProduct(category.id)}
                          >
                            {category.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </form>
              </div>
            </aside>

            <div className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
              {/* Replace with your content */}
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-full">
                <div className="max-w-full mx-auto py-10 px-4">
                  <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {listProduct.map((product) => (
                      <Link
                        key={product.id}
                        to={"product/" + product.id}
                        className="group"
                      >
                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                          <img
                            src={product.url}
                            alt={product.name}
                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                          />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">
                          {product.price} vnđ
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
