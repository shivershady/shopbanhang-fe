import React, { useEffect, useState } from "react";

import Footer from "components/Footers/Footer";
import Header from "components/Headers/Header";
import ProductDetail from "components/Product/ProductDetail";
import ProductComment from "components/Product/ProductComment";
import SimilarProduct from "components/Product/SimilarProduct";
import MoreProducts from "components/Product/MoreProducts";
import { useParams } from "react-router-dom";
import { useNotification } from "Notifications/NotificationProvider";
import { getProductById } from "services/productService";

export default function Product() {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState([]);

  const { id } = useParams();
  const dispatch = useNotification();
  useEffect(async () => {
    await getProductById(id)
      .then((response) => {
        setProduct(response.data);
        setImage(response.data.url);
      })
      .catch((error) => {
        dispatch({
          type: "error",
          message: "Lấy thông tin thất bại" + error,
        });
      });
  }, []);
  return (
    <div>
      <Header />
      <main className="container mx-auto space-y-10 my-10">
        {/* ProductDetail */}
        <ProductDetail
          id={id}
          name={product.name}
          price={product.price}
          iHot={product.iHot}
          iPay={product.iPay}
          quantity={product.quantity}
          view={product.view}
          image={image}
          discount={product.discount_id}
          content={product.content}
          description={product.description}
        />

        {/* Sản Phẩm Tương Tự */}
        <SimilarProduct />

        {/* Đánh giá từ khách hàng */}
        <ProductComment />

        {/* Khám phá thêm */}
        <MoreProducts />
      </main>
      <Footer />
    </div>
  );
}
