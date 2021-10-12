import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Fragment } from "react";
import { LoginItem, SignupItem } from "./HeaderUser";
import { SolutionsItem, ResourcesItem } from "./HeaderTitle";

export function Dropdown() {
  return (
    <Popover.Button className="bg-indigo-600 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
      <MenuIcon className="h-6 w-6" aria-hidden="true" />
    </Popover.Button>
  );
}

export function DropdownItem(props) {
  const { solutions, resources } = props;
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute top-0 z-50 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>

            <div className="mt-6">
              <SolutionsItem solutions={solutions} />
            </div>
          </div>

          <div className="py-6 px-5 space-y-6">
            <ResourcesItem resources={resources} />

            <div>
              <LoginItem />
              <SignupItem />
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}
export const HeaderDropdow = {
  Dropdown,
  DropdownItem,
};
