import React from 'react'
import Banner from "../../components/Banner/Banner";
import HomeQuicklinksTabContainer from "./components/HomeQuicklinksTabContainer";
import BrandStaticWidget from "./components/BrandStaticWidget";
import FeaturedCategorises from "./components/FeaturedCategorises";
import FeaturedKeywords from "./components/FeaturedKeywords";
import InfiniteScroll from "./components/InfiniteScroll";



function Home(props) {
  const { doGetUser } = props;
  doGetUser();
  return (
    <main className="container mx-auto space-y-4 my-10 space-y-8">
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
  )
}

export default Home

