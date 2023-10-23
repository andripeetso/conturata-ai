import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 1000); // This delay matches the transition duration we'll set in the CSS
  }, []);

  return (
    <div className="flex flex-col gap-20 items-center justify-center min-h-screen">
      <title>Conturata.ai</title>
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
      <div
        className={`transition-opacity duration-1000 max-w-lg mx-auto ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative bg-black p-10">
          <p className="text-white font-mono text-lg sm:text-2xl">
            //Hello world!
            <br />
            <br />
            We are = Web developers;
            <br />
            Experts in AI = true;
            <br />
            Experts in SQL = true;
            <br />
            Experts in React = true;
            <br />
            Experts in Python = true;
          </p>
          <div className="absolute bottom-11 right-8 mt-10 animate-blink bg-white w-2 h-6"></div>
        </div>
      </div>
    </div>
  );
}
