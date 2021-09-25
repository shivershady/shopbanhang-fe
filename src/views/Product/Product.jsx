import React from "react";
import ProductDetail from "./components/ProductDetail";
import ProductInformation from "./components/ProductInformation";
import ProductDescription from "./components/ProductDescription";
import ProductComment from "./components/ProductComment";
import SimilarProduct from "./components/SimilarProduct";
import ViewedProducts from "./components/ViewedProducts";
import MoreProducts from "./components/MoreProducts";

export default function Product() {
  return (
      <main className="container mx-auto space-y-10 my-10">
        {/* ProductDetail */}
        <ProductDetail />

        {/* Sản Phẩm Tương Tự */}
        <SimilarProduct />

        {/* Thông tin chi tiết */}
        <ProductInformation />

        {/* Mô tả sản phẩm */}
        <ProductDescription />

        {/* Đánh giá từ khách hàng */}
        <ProductComment />

        {/* Khám phá thêm */}
        <MoreProducts/>

        {/* Sản phẩm đã xem */}
        <ViewedProducts/>

      </main>
  );
}
