import { useNotification } from "Notifications/NotificationProvider";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProduct } from "services/productService";


export default function Productgrid() {
  const [listProduct, setListProduct] = useState([]);
  const dispatch = useNotification();
  useEffect(async () => {
    await getAllProduct().then((response)=>{
      setListProduct(response.data);
    }).catch((error) => {
      dispatch({
        type: "error",
        message: error,
      })
    });
  }, []);
  return (
    <div className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
      {/* Replace with your content */}
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-full">
        <div className="max-w-full mx-auto py-10 px-4">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {listProduct.map((product) => (
              <Link key={product.id} to={"product/" + product.id} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.url}
                    alt={product.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
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
  );
}
