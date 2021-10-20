import React from "react";

import Footer from "components/Footers/Footer";
import Header from "components/Headers/Header";
import ProductDetail from "components/Product/ProductDetail";
import ProductInformation from "components/Product/ProductInformation";
import ProductDescription from "components/Product/ProductDescription";
import ProductComment from "components/Product/ProductComment";
import SimilarProduct from "components/Product/SimilarProduct";
import ViewedProducts from "components/Product/ViewedProducts";
import MoreProducts from "components/Product/MoreProducts";

export default function Product() {
  return (
    <div>
      <Header />
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
        <MoreProducts />

        {/* Sản phẩm đã xem */}
        <ViewedProducts />
      </main>
      <Footer />
    </div>
  );
}
