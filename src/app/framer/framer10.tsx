import React, { useRef } from "react";
import { motion, useScroll, useTransform } from 'motion/react';

const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
];

const Framer10 = () => {
    const containerRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target : containerRef,
        offset : ['start start', 'end end'],
    });

    const x = useTransform(
        scrollYProgress,
        [0,1],
        ['0%', `-${(colors.length - 1) * 100}%`]
    )

    return (
        <>
        <section className="h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold">상단 섹션</h1>
        </section>

        <div ref={containerRef} className="h-[400vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
                <motion.div style={{x}} className="flex h-full items-center">
                    {colors.map((color, index) => (
                    <div key={index} className={`h-[100vh] w-full flex-shrink-0`}>
                        <div
                        className={`w-full h-full ${color} rounded-xl flex items-center justify-center text-white text-4xl font-bold`}
                        >
                        SECTION {index + 1}
                        </div>
                    </div>
                    ))}
                </motion.div>
            </div>
        </div>

        <section className="h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold">하단 섹션</h1>
        </section>
        </>
    );
};

export default Framer10;