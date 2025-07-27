import React, { useRef } from "react";
import {motion, useInView} from 'motion/react';

const Framer05 = () => {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once : false, // 한번만 실행 여부
        // amount : 0.5
        margin: '100px'
    })
    console.log(isInView);
    return (
        <>
        <div className="h-[200vh]"></div>
        <div className="border border-red-500">
            <motion.div
                ref={ref}
                initial = {{opacity:0}}
                animate = {{opacity: isInView ? 1 : 0, x: isInView ? 0 : 200}}
                transition={{ duration:1, ease:'easeInOut'}}
                className="bg-blue-500 size-40"
            >
                BOX
            </motion.div>
        </div>
        </>
    );
};

export default Framer05;