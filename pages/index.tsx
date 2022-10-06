import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

export default function Home() {
  useEffect(() => {
    Scrollbar.initAll({
      damping: 0.1,
    });
  });

  return (
    <>
      <div className="z-20 fixed pointer-events-none touch-none top-0 left-0 w-full h-screen">
        <div className="border-[1rem] md:border-[1.5rem] border-transparent w-full h-full">
          <div className="w-full h-full border-2 rounded-xl border-primary" />
        </div>
      </div>
      <div className="z-30 fixed top-15 left-10 rounded-b-xl border-2 border-primary border-t-0 text-primary bg-white dark:bg-black">
        <p className="font-sans p-4 text-2xl">
          Francesco
          <br />
          Tarantino
        </p>
      </div>

      <div className="w-full h-screen" data-scrollbar>
        <div>
          <div className="flex h-screen px-20">
            <div className="m-auto flex-1">
              <p className="font-display font-extrabold text-7xl uppercase">
                Computer engineer
              </p>
              <p className="font-display text-4xl">(almost a...)</p>
            </div>
            <div className="flex-1"></div>
          </div>

          <div className="flex h-screen px-20">
            <div className="m-auto flex-1">
              <p className="font-display font-extrabold text-7xl uppercase">
                Computer engineer
              </p>
              <p className="font-display text-4xl">(almost a...)</p>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
