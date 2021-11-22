import React, { useEffect, useState } from "react";

import Footer from "components/Footers/Footer";
import Header from "components/Headers/Header";
import Banner from "components/Banner/Banner";
import HomeQuicklinksTabContainer from "components/Home/HomeQuicklinksTabContainer";
import BrandStaticWidget from "components/Home/BrandStaticWidget";
import FeaturedCategorises from "components/Home/FeaturedCategorises";
import FeaturedKeywords from "components/Home/FeaturedKeywords";
import InfiniteScroll from "components/Home/InfiniteScroll";
import { useNotification } from "Notifications/NotificationProvider";
import { getRandomProduct } from "services/productService";
import { getCategory } from "services/categorySevice";

function Home() {
  const [categories, setCategories] = useState([]);
  const dispatch = useNotification();

  useEffect( async () => {
    await getCategory().then((response)=>{
      setCategories(response.data);
    }).catch((error) => {
      dispatch({
        type: "error",
        message: error,
      })
    })
  },[])
  return (
    <div>
      <Header />
      <main className="container mx-auto space-y-4 my-10 space-y-8">
        {/* BANNER */}
        <Banner></Banner>

        {/* Trang chủ liên kết nhanh */}
        <HomeQuicklinksTabContainer />

        {/* Thương hiệu chính hãng */}
        <BrandStaticWidget/>

        {/* Danh mục sản phẩm */}
        <FeaturedCategorises categories={categories}/>

        {/* Tìm kiếm nổi bật*/}
        <FeaturedKeywords/>

        {/* Gợi ý hôm nay */}
        <InfiniteScroll />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
