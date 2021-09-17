import React, { Component } from "react";
import "../sass/Home.scss";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import HomeQuicklinksTabContainer from "../components/Home/HomeQuicklinksTabContainer";
import BrandStaticWidget from "../components/Home/BrandStaticWidget";
import FeaturedCategorises from "../components/Home/FeaturedCategorises";
import FeaturedKeywords from "../components/Home/FeaturedKeywords";
import InfiniteScroll from "../components/Home/InfiniteScroll";
export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid space-y-10">
        <Header></Header>
        <main className="container mx-auto space-y-4">
          {/* BANNER */}
          <Banner></Banner>
          {/* Trang chủ liên kết nhanh */}
          <HomeQuicklinksTabContainer/>
          {/* Thương hiệu chính hãng */}
          <BrandStaticWidget/>
          {/* Danh mục sản phẩm */}
          <FeaturedCategorises/>
          {/* Từ khóa */}
          <FeaturedKeywords/>
          {/* Gợi ý hôm nay */}
          <InfiniteScroll/>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
