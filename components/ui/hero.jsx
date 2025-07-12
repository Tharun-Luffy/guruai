"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./button";
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      console.log("scrolling", window.scrollY);
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="text-center space-y-6">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient gradient-title">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance Your career with personalized guidance, Interview prep and
            AI powered tools for Job Success
          </p>
        </div>
        <Link href="/dashboard">
          <Button>Get Started</Button>
        </Link>
      </div>
      <div className="hero-image-wrapper mt-5 ">
        <div ref={imageRef} className="hero-image">
          <Image
            src={"/banner2.jpeg"}
            width={1280}
            height={720}
            alt="Resume Banner"
            className="rounded-lg shadow-2xl border mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
