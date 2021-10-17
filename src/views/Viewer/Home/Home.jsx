import React from "react";

import Footer from "components/Footers/Footer";
import Header from "components/Headers/Header";
import Banner from "components/Banner/Banner";
import HomeQuicklinksTabContainer from "./components/HomeQuicklinksTabContainer";
import BrandStaticWidget from "./components/BrandStaticWidget";
import FeaturedCategorises from "./components/FeaturedCategorises";
import FeaturedKeywords from "./components/FeaturedKeywords";
import InfiniteScroll from "./components/InfiniteScroll";

function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto space-y-4 my-10 space-y-8">
        {/* BANNER */}
        <Banner></Banner>

        {/* Trang chủ liên kết nhanh */}
        <HomeQuicklinksTabContainer />

        {/* Thương hiệu chính hãng */}
        <BrandStaticWidget />

        {/* Danh mục sản phẩm */}
        <FeaturedCategorises />

        {/* Từ khóa */}
        <FeaturedKeywords />

        {/* Gợi ý hôm nay */}
        <InfiniteScroll />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
