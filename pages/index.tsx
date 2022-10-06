import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  useEffect(() => {
    Scrollbar.initAll({
      damping: 0.1,
    });
  });

  return (
    <>
      <div className="z-20 fixed pointer-events-none touch-none top-0 left-0 w-full h-screen">
        <div className="relative border-[1rem] md:border-[1.5rem] border-transparent w-full h-full border-orange-100">
          <div className="w-full h-full border-2 rounded-xl border-green-800">
            <div className="z-30 fixed mx-20 rounded-b-xl border-t-0 border-2 border-green-800 backdrop-blur-sm">
              <p className="font-sans font-bold p-4 text-2xl text-green-800">
                Francesco Tarantino
              </p>
            </div>
          </div>

          <div className="z-30 pointer-events-auto touch-auto absolute bottom-0.5 right-0 mx-20 rounded-t-xl border-b-0 border-2 border-green-800 backdrop-blur-sm">
            <p className="font-sans font-bold p-4 text-2xl text-green-800">
              <a href="https://github.com/francescotarantino">
                <FontAwesomeIcon icon={faGithubAlt} />
              </a>
              {"  "}
              <a href="https://www.linkedin.com/in/francesco-tarantino2">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen bg-orange-100" data-scrollbar>
        <div className="flex h-screen w-screen px-20 flex-col-reverse md:flex-row">
          <div className="m-auto flex-1 pointer-events-none">
            <p className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-green-800">
              Computer engineer
            </p>
            <p className="font-display text-xl sm:text-4xl text-green-800/75">
              (almost a...)
            </p>
          </div>

          <div className="m-auto flex-initial">
            <p className="font-sans w-full text-center text-green-800">
              Currently studying at
            </p>
            <a href={"https://polimi.it"} target={"_blank"}>
              <Image
                src="/img/polimi_black_text.svg"
                height={200}
                width={200}
              />
            </a>
          </div>
        </div>

        <div className="flex h-screen px-20 flex-col-reverse md:flex-row">
          <div className="m-auto flex-1">
            <p className="font-display font-extrabold text-4xl sm:text-7xl uppercase text-green-800">
              My projects
            </p>
          </div>

          <div className="flex-1"></div>
        </div>
      </div>
    </>
  );
}
