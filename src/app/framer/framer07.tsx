import React from "react";
import {motion, useScroll, useTransform} from 'motion/react';

const Framer07 = () => {
    const { scrollYProgress} = useScroll();
    const scale = useTransform(
        scrollYProgress,
        [0,1],
        [0.5, 1.5]
    )
    const x = useTransform(
        scrollYProgress,
        [0,1],
        [0, -300]
    )

    window.addEventListener('scroll', ()=>{
        console.log(scale.get());
    })

    return (
        <>
        <div className="h-[150vh] flex justify-center items-center">
            <motion.img style={{scale,x}} src="/thumb.jpg" className="w-64 h-64 object-cover" />
        </div>
        </>
    );
};

export default Framer07;