'use client';

import React from "react";
import { motion } from "framer-motion";
import HeroHeaderSection from "./HeroHeaderSection";
import MainButton from "../common/MainButton";
import { cn } from "@/lib/utils";
import { gilroyBold } from "@/lib/utils";
import { HeroYoutubeModal } from "../modals/HeroYoutubeModal";

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <HeroHeaderSection />
      <div>
        <motion.div
          className={cn(
            gilroyBold.className,
            "text-4xl md:text-[92px] text-center text-primary md:leading-[5.5rem] my-8"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Customer <br /> relationship magic.
        </motion.div>

        <motion.p 
          className="mb-8 text-[22px] text-center text-[#31373D]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Powerful, flexible and data-driven, Attio makes it easy to build the
          exact CRM your business needs.
        </motion.p>

        <motion.div 
          className="flex gap-[12px] justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MainButton
            text="Start for free"
            size="small"
            className="border-none rounded-[12px]"
          />
          <MainButton
            text="Talk to sales"
            size="small"
            className="rounded-[12px] border-[1px] border-[#EDEEF0] bg-white hover:bg-white text-[#31373D]"
          />
        </motion.div>

        <motion.div 
          className="flex w-full justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <HeroYoutubeModal />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
