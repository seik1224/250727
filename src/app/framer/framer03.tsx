import React from "react";
import {motion} from 'motion/react';

const itemVariants = {
    hidden : { opacity : 0, y :20 },
    visible : { opacity : 1, y :0 }
}

const Framer03 = () => {
  return (
    <>
      <motion.ul>
        {[1, 2, 3].map((item, index) => (
          <motion.li
          key={item}
          initial={{opacity : 0, y :20}}
          animate={{opacity : 1, y :0}}
          transition ={{
            duration : 0.5,
            delay : index * 0.4,
            type : 'spring',
          }}
          >리스트 항목 {item}</motion.li>
        ))}
      </motion.ul>
      <motion.ul
        initial ='hidden'
        animate = 'visible'
        transition={{
            // delayChildren : 1.5,
            staggerChildren : 0.4,
        }}
      >
        {[1, 2, 3].map((item) => (
          <motion.li variants={itemVariants} key={item}>리스트 항목 {item}</motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Framer03;