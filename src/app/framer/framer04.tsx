import React from "react";
import {motion} from 'motion/react';

const Framer04 = () => {
  return (
    <>
      <motion.div
      drag
      dragConstraints={{
        top:0,
        left:0,
        right:40,
        bottom:40,
      }}
      className="bg-red-500 h-40 w-40 rounded shadow-lg">DRAG</motion.div>
    </>
  );
};

export default Framer04;