import React, { useEffect, useState } from "react";

import Footer from "components/Footers/Footer";
import Header from "components/Headers/Header";
import ProductDetail from "components/Product/ProductDetail";
import ProductInformation from "components/Product/ProductInformation";
import ProductDescription from "components/Product/ProductDescription";
import ProductComment from "components/Product/ProductComment";
import SimilarProduct from "components/Product/SimilarProduct";
import ViewedProducts from "components/Product/ViewedProducts";
import MoreProducts from "components/Product/MoreProducts";
import { useParams } from "react-router-dom";
import { useNotification } from "Notifications/NotificationProvider";
import { getProductById } from "services/productService";

export default function Product() {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  const dispatch = useNotification();
  useEffect(async () => {
    await getProductById(id)
      .then((response) => {
        setProduct(response.productDetails[0]);
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
          name={product.name}
          price={product.price}
          iHot={product.iHot}
          iPay={product.iPay}
          quantity={product.quantity}
          view={product.view}
          image={product.image}
        />

        {/* Sản Phẩm Tương Tự */}
        <SimilarProduct />

        {/* Thông tin chi tiết */}
        <ProductInformation content={product.content} />

        {/* Mô tả sản phẩm */}
        <ProductDescription description={product.description} />

        {/* Đánh giá từ khách hàng */}
        <ProductComment />

        {/* Khám phá thêm */}
        <MoreProducts />

        {/* Sản phẩm đã xem */}
        <ViewedProducts />
      </main>
      <Footer />
    </div>
  );
}
