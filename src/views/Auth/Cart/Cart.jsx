import React, { Component } from "react";

import AllProductCart from "./components/AllProductCart";
import SummaryCart from "./components/SummaryCart";

export default class Cart extends Component {
  render() {
    return (
        <main className="container mx-auto mt-10">
          <div className="md:flex shadow-md my-10 rounded-xl overflow-hidden">
            <AllProductCart />
            <SummaryCart />
          </div>
        </main>
    );
  }
}