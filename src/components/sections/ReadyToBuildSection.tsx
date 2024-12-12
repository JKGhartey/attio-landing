'use client';

import { gilroyBold } from "@/lib/utils";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import MainButton from "../common/MainButton";

function ReadyToBuildSection() {
  return (
    <motion.section 
      className="flex flex-col md:flex-row justify-between gap-16 items-center !bg-[#266DF0] px-4 md:px-[94px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className={cn(
            gilroyBold.className,
            "text-[40px] leading-tight md:leading-normal text-[#A0BFF8]"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to build your team&apos;s{" "}
          <motion.span 
            className="text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            dream CRM?
          </motion.span>
        </motion.p>
        <motion.div 
          className="flex gap-[12px] justify-start mt-[32px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <MainButton
              text="Start for free"
              size="small"
              className="border-none rounded-[12px] bg-[#538BF3]/40 hover:bg-[#538BF3]/40"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <MainButton
              text="Talk to sales"
              size="small"
              className="rounded-[12px] border-[1px] border-[#EDEEF0] bg-white hover:bg-white text-[#31373D]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          delay: 0.2
        }}
      >
        <motion.img 
          src="/images/ready_to_build.png" 
          alt="security"
          whileHover={{ 
            scale: 1.05,
            rotateZ: 2,
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>
    </motion.section>
  );
}

export default ReadyToBuildSection;
