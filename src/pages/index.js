import Image from "next/image";

import { ArrowDownIcon } from "@heroicons/react/24/solid";

import logo from "../static/carpentry-cup.png";

export default function Home() {
  return (
    <>
      <div className="flex-col justify-center items-center h-screen">
        <div className="flex justify-center">
          <Image
            src={logo}
            width="200"
            height="200"
            className="rounded-lg mr-3 mb-16 mt-16"
          />
        </div>
        <div className="grid grid-rows-3">
          <div className="flex justify-center">
            <h1 className="font-dela-gothic text-cal-orange text-5xl">
              Cal Commit
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="font-dm-sans text-white text-3xl">Carpentry Cup</p>
          </div>
          <div className="flex justify-center">
            <ArrowDownIcon className="animate-bounce text-white w-10 h-10 border rounded-full p-2" />
          </div>
        </div>
      </div>
    </>
  );
}
