/* eslint-disable */

import Image from "next/image";
import profile from "@/assets/Profile.png";
import splatter from "@/assets/Splatter.png";
import splatter_svg from "@/assets/Splatter.svg";
import Navbar from "@/components/navbar";
import RandomQuote from "@/components/what_I_mean";
import ScrollDownArrow from "@/components/arrow_down_more_about_me";
export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center">
      <Image
        src={splatter_svg}
        height={500}
        width={500}
        alt="profile"
        className="absolute left-0 top-0 z-[-1] h-full w-full"
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
              <h1 className="text-7xl font-bold capitalize">Heritier Kaumbu</h1>
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
                Dive into the vibrant world of my software development journey!
                This portfolio is a curated showcase of my proficiency in
                JavaScript, React, and Python, featuring a rich gallery of
                diverse projects 🚀.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
          <ScrollDownArrow />
        </div>
      </div>
    </main>
  );
}
