import Home_deal from "../components/home/Home_deal";
import Home_quicklinks_tab_container from "../components/home/Home_quicklinks_tab_container";
import Top_trending from "../components/home/Top_trending";
import Home_banner_primary_container from "../components/home/Home_banner_primary_container";
import Brand_static_widget from "../components/home/Brand_static_widget";
import Featured_categories from "../components/home/Featured_categories";
import Featured_keywords from "../components/home/Featured_keywords";
import Home_banner_middle_container from "../components/home/Home_banner_middle_container";
import Infinite_scroll from "../components/home/Infinite_scroll";
import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div>
        <Home_deal></Home_deal>
        <Home_quicklinks_tab_container></Home_quicklinks_tab_container>
        <Top_trending></Top_trending>
        <Home_banner_primary_container></Home_banner_primary_container>
        <Brand_static_widget></Brand_static_widget>
        <Featured_categories></Featured_categories>
        <Featured_keywords></Featured_keywords>
        <Home_banner_middle_container></Home_banner_middle_container>
        <Infinite_scroll></Infinite_scroll>
      </div>
    )
  }
}

export default Home