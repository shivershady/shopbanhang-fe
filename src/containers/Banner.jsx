import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div
        className="bg-cover bg-center  h-auto text-black py-24 px-10 object-fill"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/Banner1.jpg')`,
        }}
      ></div>
    );
  }
}
