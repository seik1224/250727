import React, { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';

const Framer11 = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target:ref,
        offset : ['center end', 'end center']
    })

    const opacity1 = useTransform(scrollYProgress, [0,0.3],[0,1])
    const opacity2 = useTransform(scrollYProgress, [0.3,0.6],[0,1])
    const opacity3 = useTransform(scrollYProgress, [0.6,0.9],[0,1])

    const y1 = useTransform(scrollYProgress, [0,0.3],[50,0])
    const y2 = useTransform(scrollYProgress, [0.3,0.6],[50,0])
    const y3 = useTransform(scrollYProgress, [0.6,0.9],[50,0])

    /*
        [ useMotionValueEvent ]
        모션값의 변화를 감지하고 반응할 수 있게 해주는 도구
    */
    useMotionValueEvent( scrollYProgress, 'change', (latest)=>{
        console.log('스크롤 : ', latest);
        if(latest > 0.48 && latest < 0.52) console.log("MIDDLE!");
        if(latest === 1) console.log("END!");
    })

    return (
        <>
        <section className="h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold">상단 섹션</h1>
        </section>
        <section ref={ref} className="h-[100vh] flex items-center justify-center">
            <div className="flex space-x-4">
            <motion.div style={{opacity : opacity1, y:y1}} className="bg-blue-500 w-20 h-20" />
            <motion.div style={{opacity : opacity2, y:y2}} className="bg-blue-500 w-20 h-20" />
            <motion.div style={{opacity : opacity3, y:y3}} className="bg-blue-500 w-20 h-20" />
            </div>
        </section>
        <section className="h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold">하단 섹션</h1>
        </section>
        </>
    );
};

export default Framer11;