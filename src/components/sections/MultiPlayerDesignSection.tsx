'use client';

import React from "react";
import { motion } from "framer-motion";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";

function MultiPlayerDesignSection() {
  const cardData = {
    avatarUrl: "/images/alon.png",
    review: "Attio has played a crucial role in scaling, building out and evolving our go-to-market model. It allows my team to easily stay on top of everything.",
    name: "Alon Bartur",
    position: "Co-foundr & CRO, Dopt",
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <CustomHeader
          title="Designed for multiplayer."
          description="The first trully multiplayer CRM. After all, the best work doesn't come from silos."
        />
      </motion.div>

      <motion.div 
        className="w-full flex flex-col gap-[28px] items-center justify-center my-[64px] bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.img
          src="/images/d_1.png"
          alt="design image"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        />
        <motion.img
          src="/images/d_2.png"
          alt="design image"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <ReviewCard {...cardData} />
      </motion.div>
    </motion.section>
  );
}

export default MultiPlayerDesignSection;
