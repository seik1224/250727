import React from "react";
import { motion } from 'motion/react';

const Framer01 = () => {
  return (
    <>
      <motion.div
        whileHover={{scale:1.2, rotate:90}}
        whileTap={{scale:0.8, borderRadius:'100%'}}
        className="bg-blue-500 text-white rounded size-40 flex justify-center items-center">
        CLICK
      </motion.div>
      <motion.div
        initial = {{opacity:0, y:100}}
        animate = {{opacity:1, y:0}}
        transition={{
            duration:1.5,
            delay:0.5,
            ease : 'easeInOut',
            type : 'spring',
            bounce : 0.25, // 탄성
            repeat : Infinity,
            repeatType : 'reverse',
            repeatDelay : 1,
        }}
        className="bg-green-500 size-32 m-4">

      </motion.div>
    </>
  );
};

export default Framer01;