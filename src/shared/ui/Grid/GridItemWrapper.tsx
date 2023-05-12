'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
};

const GridItemWrapper = ({ children }: Props) => {
  return (
    <motion.div
      className="flex flex-auto"
      initial={{ opacity: 0, y: '50%' }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '300px 0px 300px 0px ' }}
    >
      {children}
    </motion.div>
  );
};

export default GridItemWrapper;
