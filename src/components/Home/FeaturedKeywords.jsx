import { useNotification } from "Notifications/NotificationProvider";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomProduct } from "services/productService";


export default function InfiniteScroll() {
  const [listProduct, setListProduct] = useState([]);
  const dispatch = useNotification();
  useEffect(async () => {
    await getRandomProduct().then((response)=>{
      setListProduct(response.data);
    }).catch((error) => {
      dispatch({
        type: "error",
        message: error,
      })
    });
  }, []);
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="max-w-full mx-auto py-10 px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-10">Tìm kiếm nổi bật</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {listProduct.map((product) => (
            <Link key={product.id} to={"product/" + product.id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.url}
                  alt="photo"
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-700 text-center">{product.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}