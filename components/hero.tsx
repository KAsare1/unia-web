"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Button } from "./button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { IphoneMockup } from "./iphone-mockup";
import Image from "next/image";

export function Hero() {
  const parentRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  return (
    <div
      ref={parentRef}
      className="relative flex max-w-7xl rounded-b-3xl my-2 md:my-20  mx-auto flex-col items-center justify-center pt-32 overflow-hidden px-4 md:px-8 bg-gradient-to-t from-[rgba(59,130,246,1)]  via-[rgba(239,246,255,1)] to-[rgba(255,255,255,1)]"
    >
      <div className="text-balance relative z-20 mx-auto mb-4 max-w-6xl text-center text-4xl font-semibold tracking-tight text-gray-700  md:text-7xl">
        <Balancer>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "inline-block bg-gradient-to-b  from-[rgba(94,94,94,1)] to-[rgba(0,0,0,1)]",
              "bg-clip-text text-transparent"
            )}
          >
            Your Campus{" "}
            <span className="bg-gradient-to-b from-[rgba(96,165,250,1)] to-[rgba(37,99,235,1)] bg-clip-text text-transparent">
              Marketplace
            </span>
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "inline-block bg-gradient-to-b from-[rgba(94,94,94,1)] to-[rgba(0,0,0,1)]",
              "bg-clip-text text-transparent py-2"
            )}
          >
            Where Students Buy & Sell{" "}
            <span className="bg-gradient-to-b from-[rgba(96,165,250,1)] to-[rgba(37,99,235,1)] bg-clip-text text-transparent">
              Smarter
            </span>
          </motion.h2>
        </Balancer>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="relative z-20 mx-auto mt-4 max-w-2xl px-4 text-center text-base/6 text-gray-600  sm:text-base"
      >
        Discover, shop, and support student businesses all in one place. UNIA
        makes it easy for students to sell, advertise, and find everything they
        need on campus.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.7 }}
        className="mb-8 mt-6 z-10 sm:mb-10 sm:mt-8 flex w-full flex-col items-center justify-center gap-4 px-4 sm:px-8 sm:flex-row md:mb-20"
      >
        <Button
          as={Link}
          href="/login"
          variant="primary"
          className="w-full sm:w-40 h-12 flex items-center justify-center"
        >
          Join UNIA
        </Button>
      </motion.div>

      <div className="pt-[2rem] w-full min-h-[21rem] relative">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute top-0 left-0 right-0  z-10"
        >
          <IphoneMockup>
            <MockScreen />
          </IphoneMockup>
        </motion.div>
        <BackgroundShape />
      </div>
    </div>
  );
}

function BackgroundShape({
  mobileBreakpoint = "(max-width: 768px)",
  sizes = {
    mobile: {
      outer: 800,
      middle: 600,
      inner: 400,
    },
    desktop: {
      outer: 1400,
      middle: 1100,
      inner: 800,
    },
  },
  animations = {
    middle: {
      scale: [1, 1.02, 1],
      y: [0, -5, 0],
      duration: 2,
    },
    inner: {
      scale: [1, 1.03, 1],
      y: [0, -7, 0],
      duration: 2.5,
    },
  },
  gradientColors = {
    start: "rgba(255,255,255,1)",
    mid1: "rgba(255,255,255,0.8)",
    mid2: "rgba(255,255,255,0.4)",
    end: "rgba(255,255,255,0)",
  },
}) {
  const isMobile = useMediaQuery(mobileBreakpoint);
  const { outer, middle, inner } = isMobile ? sizes.mobile : sizes.desktop;

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div
        className="absolute z-0 rounded-full border border-white/30"
        style={{
          width: outer,
          height: outer,
        }}
      />
      <motion.div
        className="absolute z-0 rounded-full border border-white"
        style={{
          width: middle,
          height: middle,
          clipPath: "circle(50% at 50% 50%)",
          background: `
            radial-gradient(
              circle at center,
              ${gradientColors.start} 0%,
              ${gradientColors.mid1} 20%, 
              ${gradientColors.mid2} 40%,
              ${gradientColors.end} 60%
            )
          `,
        }}
        animate={{
          scale: animations.middle.scale,
          y: animations.middle.y,
        }}
        transition={{
          duration: animations.middle.duration,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      ></motion.div>
      <motion.div
        className="absolute bg-white/5 z-2 
          rounded-full 
          border border-[rgba(255,255,255,0.1)]
          shadow-[0_0_200px_80px_rgba(255,255,255,0.1)]"
        style={{
          width: inner,
          height: inner,
        }}
        animate={{
          scale: animations.inner.scale,
          y: animations.inner.y,
        }}
        transition={{
          duration: animations.inner.duration,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      />
    </div>
  );
}


const MockScreen = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex justify-between w-full p-2 gap-2">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 7H16V6C16 4.34315 14.6569 3 13 3H11C9.34315 3 8 4.34315 8 6V7H5C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7ZM10 6C10 5.44772 10.4477 5 11 5H13C13.5523 5 14 5.44772 14 6V7H10V6Z"
              fill="#4A4A4A"
            />
            <path
              d="M5 11V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V11H17V19H7V11H5Z"
              fill="#4A4A4A"
            />
            <path
              d="M9 13V17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V13C11 12.4477 10.5523 12 10 12C9.44772 12 9 12.4477 9 13Z"
              fill="#4A4A4A"
            />
            <path
              d="M13 13V17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17V13C13 12.4477 14.5523 12 14 12C13.4477 12 13 12.4477 13 13Z"
              fill="#4A4A4A"
            />
          </svg>
          <span>Orders</span>
        </div>
        <div className="flex gap-2">
          <span>See all</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="24"
            viewBox="0 0 12 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.1569 12.7116L4.49994 18.3686L3.08594 16.9546L8.03594 12.0046L3.08594 7.05463L4.49994 5.64062L10.1569 11.2976C10.3444 11.4852 10.4497 11.7395 10.4497 12.0046C10.4497 12.2698 10.3444 12.5241 10.1569 12.7116Z"
              fill="#4A4A4A"
            />
          </svg>
        </div>
      </div>

      <div className="w-full px-2 py-3">
        <div className="bg-[#E0F2FE] rounded-xl p-2 w-full">
          <div className="flex justify-between items-start">
            <h3 className="text-[#0C4A6E] text-md font-medium">
              Order from Ama K.
            </h3>
            <button className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <p className="text-[#0369A1] text-xs mt-1">2 hours ago</p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col items-start mt-4 gap-1">
              <div className="flex -space-x-2">
                <Image
                  src="/images/ama_student.jpg"
                  alt="Ama"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  height={32}
                  width={32}
                />
                <Image
                  src="/images/current_user.jpg"
                  alt="You"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  height={32}
                  width={32}
                />
                <div className="w-8 h-8 rounded-full bg-[#BAE6FD] border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-[#0C4A6E]">✓</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-[#0369A1]">Handmade Bracelet</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#BAE6FD] text-sm text-[#0C4A6E] font-medium">
              ₵45
            </span>
          </div>
        </div>
      </div>

      <div className="w-full px-2 py-3">
        <div className="bg-[#DBEAFE] rounded-xl p-2 w-full">
          <div className="flex justify-between items-start">
            <h3 className="text-[#1E40AF] text-md font-medium">
              New Order - Kofi M.
            </h3>
            <button className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <p className="text-[#1D4ED8] text-xs mt-1">5 minutes ago</p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col items-start mt-4 gap-1">
              <div className="flex -space-x-2">
                <Image
                  src="/images/kofi_student.jpg"
                  alt="Kofi"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  height={32}
                  width={32}
                />
                <Image
                  src="/images/sarah_student.jpg"
                  alt="Sarah"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  height={32}
                  width={32}
                />
                <Image
                  src="/images/current_user.jpg"
                  alt="You"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  height={32}
                  width={32}
                />
                <div className="w-8 h-8 rounded-full bg-[#BFDBFE] border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-[#1E40AF]">!</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-[#1D4ED8]">Study Guide - Math 101</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#BFDBFE] text-sm text-[#1E40AF] font-medium">
              ₵20
            </span>
          </div>
        </div>
      </div>

      <div className="w-full px-2 py-3">
        <div className="bg-[#F0F9FF] rounded-xl p-2 w-full">
          <div className="flex justify-between items-start">
            <h3 className="text-[#1E3A8A] text-md font-medium">
              Order from Efua's Store
            </h3>
            <button className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <p className="text-[#1E40AF] text-xs mt-1">1 day ago</p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col items-start mt-4 gap-1">
              <div className="flex -space-x-2">
                <Image
                  src="/images/efua_student.jpg"
                  alt="Efua"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  height={32}
                  width={32}
                />
                <Image
                  src="/images/current_user.jpg"
                  alt="You"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  height={32}
                  width={32}
                />
                <div className="w-8 h-8 rounded-full bg-[#DBEAFE] border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-[#1E3A8A]">🎨</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-[#1E40AF]">Campus delivery</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#DBEAFE] text-sm text-[#1E3A8A] font-medium">
              Art Print
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};