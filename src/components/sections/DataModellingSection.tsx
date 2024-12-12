'use client';

import React from "react";
import { motion } from "framer-motion";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";

function DataModellingSection() {
  const cardData = {
    avatarUrl: "/images/filip.png",
    review: "Attio is an incredibly flexible product, you can build anything on it. It gives you the tools you need to build a CRM that's exactly right to your business, your data, and your processes.",
    name: "Filip Mark",
    position: "Chief of Staff, PassionFoot",
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
          title="Modeled around your data and workflows."
          description="A CRM should go beyond deals. Attio is built for any business process."
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
          src="/images/m_1.png"
          alt="crm image"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        />
        <motion.img
          src="/images/m_2.png"
          alt="crm image"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
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

export default DataModellingSection;
