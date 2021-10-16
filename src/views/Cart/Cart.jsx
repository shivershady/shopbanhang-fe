import React, { Component } from "react";

import AllProductCart from "./components/AllProductCart";
import SummaryCart from "./components/SummaryCart";
import Footer from "components/Footers/Footer";
import Header from "components/Headers/Header";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container mx-auto mt-10">
          <div className="md:flex shadow-md my-10 rounded-xl overflow-hidden">
            <AllProductCart />
            <SummaryCart />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
