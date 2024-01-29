/* eslint-disable */

import Image from "next/image";
import profile from "@/assets/Profile.png";
import splatter_svg from "@/assets/Splatter.svg";
import Navbar from "@/components/navbar";
import RandomQuote from "@/components/what_I_mean";
import ScrollDownArrow from "@/components/arrow_down_more_about_me";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn sm:hidden btn-ghost drawer-button m-2 sticky top-5 "
        >
          <HiOutlineMenuAlt2 className="text-2xl" />
        </label>
        <div className="relative flex flex-col items-center -z-10 ">
          <Image
            src={splatter_svg}
            height={500}
            width={500}
            alt="profile"
            className="absolute left-0 top-0 z-[-1] h-full w-full opacity-40 sm:opacity-100"
          />
          <Navbar />

          <div className="hero min-h-screen max-w-[90vw] items-start pt-5">
            <div className="hero-content flex-col justify-between space-y-16">
              <div className=" flex flex-col space-x-3 lg:flex-row-reverse lg:items-center">
                <div className="flex flex-col items-center justify-center">
                  <Image src={profile} height={500} width={500} alt="profile" />
                  <RandomQuote />
                </div>
                <div className="m-3">
                  <h1 className="text-7xl font-bold capitalize">
                    Heritier Kaumbu
                  </h1>
                  <h2 className="text-3xl font-bold capitalize text-secondary">
                    Software Developer
                  </h2>
                  <h2 className="text-3xl font-bold capitalize text-secondary">
                    Designer
                  </h2>
                  <h2 className="text-3xl font-bold capitalize text-secondary">
                    Teacher
                  </h2>
                  <p className="py-6 pr-10 text-xl">
                    Dive into the vibrant world of my software development
                    journey! This portfolio is a curated showcase of my
                    proficiency in JavaScript, React, and Python, featuring a
                    rich gallery of diverse projects 🚀.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
              <ScrollDownArrow />
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full flex-col  bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <Link
            href="#"
            className="link-hover link p-4 text-xl hover:text-primary"
          >
            Heritier
          </Link>
          <Link
            href="#"
            className="link-hover link p-4 text-xl hover:text-primary"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="link-hover link p-4 text-xl hover:text-primary"
          >
            Works
          </Link>
          <Link
            href="#"
            className="link-hover link p-4 text-xl hover:text-primary"
          >
            Contact
          </Link>
          <Link
            href={"https://github.com/iam-hbk"}
            target="_blank"
            className="link-hover link p-4 text-xl hover:text-primary items-center flex-row"
          >
            <span>Github</span>
            <FaGithub className="ml-2 mb-2 inline" />
          </Link>
        </ul>
      </div>
    </div>
  );
}
