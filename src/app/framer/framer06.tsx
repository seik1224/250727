import React from "react";
import {motion, useScroll, useTransform} from 'motion/react';

const Framer06 = () => {

    // 스크롤 진행도를 0~1사이의 값으로 나타내는 MotionValue객체
    const { scrollYProgress } = useScroll();

    // MotionValue객체를 가져와 입력값의 범위만큼 출려값으로 변화
    const backgroundColor = useTransform(
        scrollYProgress, // MotionValue객체
        [0.5, 1], // 스크롤 입력값
        ['#f00', '#00f'] // 출력값의 범위
    )

    window.addEventListener('scroll',()=>{
        // console.log(scrollYProgress);
        console.log(Math.round(scrollYProgress.get() * 100));
    })

    return (
        <>
        <motion.div
            style={{ backgroundColor }}
            className="h-[200vh] flex justify-center items-center"
        >
            <h1 className="text-white text-4xl">스크롤에 따라 색상이 변합니다</h1>
        </motion.div>
        </>
    );
};

export default Framer06;