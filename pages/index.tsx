import { Fragment } from "react";
import { Transition } from "@headlessui/react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Transition
        as={Fragment}
        show={true}
        enter="transform transition-all duration-1000"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
      >
        <h1 className="text-6xl text-white font-bold text-gradient bg-gradient-to-r from-blue-500 to-green-500 font-poppins rounded-xl px-4 py-2">
          ConturatΔ
        </h1>
      </Transition>
    </div>
  );
}
