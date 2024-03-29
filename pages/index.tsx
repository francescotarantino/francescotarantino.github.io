import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import {
  faGithub,
  faLinkedin,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Scrolldown from "../components/scrolldown";
import { isBrowser } from "react-device-detect";

const LinkIcons = () => (
  <p className="font-sans font-bold p-4 text-2xl text-secondary-800">
    <a href="https://t.me/francesco_tar" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faTelegram} />
    </a>
    {"  "}
    <a
      href="https://github.com/francescotarantino"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
    {"  "}
    <a
      href="https://www.linkedin.com/in/francesco-tarantino2"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    {"  "}
    <a
      href="https://twitter.com/_francescotar"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  </p>
);

export default function Home() {
  const scrolldown = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    if (isBrowser) {
      content.current.classList.add("h-screen");

      const scrollbar = Scrollbar.initAll({
        damping: 0.1,
      });

      scrollbar[0].addListener((status) => {
        if (status.offset.y === 0) {
          scrolldown.current.classList.remove("hidden");
        } else {
          scrolldown.current.classList.add("hidden");
        }
      });
    } else {
      scrolldown.current.classList.add("hidden");
    }
  }, [isBrowser]);

  return (
    <>
      <Head>
        <title>Francesco Tarantino</title>
      </Head>
      <div className="z-20 fixed pointer-events-none touch-none top-0 left-0 w-full h-screen">
        <div className="relative border-[1rem] md:border-[1.5rem] border-transparent w-full h-full border-primary-200">
          <div className="w-full h-full border-2 rounded-xl border-secondary-800">
            <div className="z-30 w-auto mx-20 fixed rounded-b-xl border-t-0 border-2 border-secondary-800 backdrop-blur-sm invisible md:visible">
              <p className="font-sans font-bold p-4 text-2xl text-secondary-800">
                Francesco Tarantino
              </p>
            </div>
          </div>

          <div className="z-30 pointer-events-auto touch-auto absolute bottom-0.5 right-0 mx-20 rounded-t-xl border-b-0 border-2 border-secondary-800 backdrop-blur-sm invisible md:visible">
            <LinkIcons />
          </div>
        </div>
      </div>

      <div
        ref={content}
        className="w-screen min-h-screen bg-primary-200"
        data-scrollbar
      >
        <div className="flex sm:min-h-screen w-screen px-4 sm:px-20 flex-col md:flex-row">
          <div className="font-sans font-bold pt-8 text-2xl text-secondary-800 text-center md:hidden">
            Francesco Tarantino
            <LinkIcons />
          </div>

          <div className="m-auto grow justify-center flex flex-col pointer-events-none text-center md:text-left">
            <p className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-secondary-800">
              Computer engineer
            </p>
            <p className="font-display text-xl sm:text-4xl text-secondary-800/75">
              (almost a...)
            </p>
          </div>

          <div className="m-auto">
            <p className="font-sans w-full text-center text-secondary-800">
              Currently studying at
            </p>
            <a href={"https://polimi.it"} target={"_blank"} rel="noreferrer">
              <Image
                src="/img/polimi_black.svg"
                height={200}
                width={200}
                alt={"Polimi logo"}
              />
            </a>
          </div>
        </div>

        <div className="flex sm:min-h-screen px-4 pb-4 sm:px-20 flex-col-reverse md:flex-row text-center md:text-left">
          <div className="m-auto flex-1">
            <p className="font-display font-extrabold text-4xl sm:text-7xl uppercase text-secondary-800">
              Work in progress...
            </p>
          </div>
        </div>
      </div>

      <div
        ref={scrolldown}
        className="fixed bottom-10 inset-x-0 flex justify-center invisible md:visible"
      >
        <Scrolldown />
      </div>
    </>
  );
}
