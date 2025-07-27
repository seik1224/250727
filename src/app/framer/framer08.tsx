import React, { useRef } from "react";
import {motion, useScroll, useTransform} from 'motion/react';

const Framer08 = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const { scrollYProgress } = useScroll({
        target : ref1, // 스크롤 측정할 대상 요소
        offset : ['start end', 'end start'],
        /*
            요소의 top이 뷰포트의 end에 도달했을때 : 0
            요소의 bottom이 뷰포트의 start에 도달했을때 : 1
        */
    })
    const rotate = useTransform(
        scrollYProgress,
        [0.4, 0.6],
        [0,360]
    )

    const { scrollYProgress : scrollYProgress2 } = useScroll({
        target : ref2, 
        offset : ['-100px','100px']
        // section의 -100px부터 100px까지 스크롤 진행도를 측정
    })
    
    const opacity = useTransform(
        scrollYProgress2,
        [0,1],
        [0,1]
    )

    return (
        <>
        <section className="h-screen"></section>
        {/* 첫 번째 섹션 */}
        <section ref={ref1} className="h-screen bg-gray-100 flex justify-center items-center">
            <motion.div style={{rotate}} className="bg-blue-500 w-40 h-40 rounded-lg">섹션 1</motion.div>
        </section>

        {/* 두 번째 섹션 */}
        <section ref={ref2} className="h-screen bg-gray-300 flex justify-center items-center">
            <motion.div style={{opacity}} className="bg-green-500 w-40 h-40 rounded-lg">섹션 2</motion.div>
        </section>
        <section className="h-screen"></section>
        </>
    );
};

export default Framer08;