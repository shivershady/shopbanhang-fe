import React, { Component, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import HeaderLeft from "../components/Header/HeaderLeft";
import HeaderCenter from "../components/Header/HeaderCenter";
import HeaderRight from "../components/Header/HeaderRight";


export default class Header extends Component {
  render() {
    return (
      <header className="bg-yellow-400 border shadow-md overflow-hidden text-base text-white">
        <div className="container mx-auto px-8 py-8 grid grid-cols-4 gap-4 my-auto items-center ">
          <HeaderLeft/>
          <HeaderCenter/>
          <HeaderRight/>
        </div>
      </header>
    );
  }
}
