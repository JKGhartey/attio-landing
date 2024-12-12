'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedLayoutProps {
  children: React.ReactNode;
}

const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLayout;
