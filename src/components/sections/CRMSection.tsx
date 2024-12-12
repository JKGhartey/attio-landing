'use client';

import React from "react";
import { motion } from "framer-motion";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";

function CRMSection() {
  const cardData = {
    avatarUrl: "/images/degrasse.png",
    review: "My team loves Attio's reporting system because it's so dynamic. We can splice our data in so many different ways and combinations.",
    name: "DeGresse Schrader",
    position: "Chief of Staff, Pallet",
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
          title="A CRM created to be your own."
          description="Tweak anything and everything to ensure Attio fits your business, not the other way around."
        />
      </motion.div>

      <motion.div 
        className="w-full flex justify-center my-[64px]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8,
          delay: 0.2,
          type: "spring",
          stiffness: 100
        }}
      >
        <motion.img
          src="/images/crm.png"
          alt="crm image"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
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

export default CRMSection;
