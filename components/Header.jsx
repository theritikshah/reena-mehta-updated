"use client";

import Image from "next/image";
import { useState } from "react";
import { Link } from "react-scroll";
import LogoImg from "../../assets/images/logo.svg";

export default function Header() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <header className="w-full fixed top-0 left-0 z-20 shadow-[0_0px_7px_rgba(0,0,0,0.1)]">
      <nav className="bg-white px-[15px] py-[20px]">
        <div className="flex justify-between items-center mx-auto container px-4 2xl:max-w-[1140px]">
          <a href="#" className="flex items-center md:h-[35px] h-[29px]">
            <Image
              src={LogoImg}
              className="mr-3 w-full h-full"
              alt="Reena Mehta"
            />
          </a>
          <div className="lg:hidden flex">
            <a href="#" onClick={() => setIsMenu(!isMenu)}>
              <i className="icon-bar text-primary_01 text-[32px]"></i>
            </a>
          </div>
          <div
            className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 navigation-menu ${
              isMenu && "active"
            }`}
          >
            <div className="navigation-menu-inner">
              <ul className="flex flex-col lg:flex-row m-0">
                <li>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block py-2 px-3 font-openSans text-black hover:text-primary_01 active:text-primary_01 text-[16px] cursor-pointer"
                    onClick={() => setIsMenu(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="about-us"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block py-2 px-3 font-openSans text-black hover:text-primary_01 active:text-primary_01 text-[16px] cursor-pointer"
                    onClick={() => setIsMenu(false)}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="songs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block py-2 px-3 font-openSans text-black hover:text-primary_01 active:text-primary_01 text-[16px] cursor-pointer"
                    onClick={() => setIsMenu(false)}
                  >
                    Songs
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="collaborating"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block py-2 px-3 font-openSans text-black hover:text-primary_01 active:text-primary_01 text-[16px] cursor-pointer"
                    onClick={() => setIsMenu(false)}
                  >
                    Collaborating
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block py-2 px-3 font-openSans text-black hover:text-primary_01 active:text-primary_01 text-[16px] cursor-pointer"
                    onClick={() => setIsMenu(false)}
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
