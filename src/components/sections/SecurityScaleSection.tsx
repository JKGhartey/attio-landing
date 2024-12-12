'use client';

import { gilroyBold } from "@/lib/utils";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import MainButton from "../common/MainButton";

function SecurityScaleSection() {
  return (
    <motion.section 
      className="flex flex-col md:flex-row justify-between gap-16 items-center"
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
            "text-[40px] leading-tight md:leading-normal text-primary"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Scale with <motion.span 
            className="text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            security
          </motion.span>
        </motion.p>
        <motion.p 
          className="text-[20px] text-primary mt-1.5 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Attio is audited and certified by industry leading Third Party
          standards.
        </motion.p>

        <motion.div 
          className="flex gap-[12px] justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <MainButton
              text="Start for free"
              size="small"
              className="border-none rounded-[12px]"
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
          src="/images/security_scale.png" 
          alt="security"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>
    </motion.section>
  );
}

export default SecurityScaleSection;
