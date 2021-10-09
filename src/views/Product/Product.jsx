import React, { useEffect, useState } from "react";
import ProductDetail from "./components/ProductDetail";
import ProductInformation from "./components/ProductInformation";
import ProductDescription from "./components/ProductDescription";
import ProductComment from "./components/ProductComment";
import SimilarProduct from "./components/SimilarProduct";
import ViewedProducts from "./components/ViewedProducts";
import MoreProducts from "./components/MoreProducts";
import productApi from "../../services/productApi";

export default function Product() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params ={
          _page : 1,
          _limit : 10,
        };
        const response = await productApi.getData(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log("Thêm thất bại", error);
      }
    };
    fetchProductList();
  }, []);

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
