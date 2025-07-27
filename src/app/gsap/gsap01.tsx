'use client';
import { gsap } from "gsap";
import React, { useRef } from "react";

const Gsap01 = () => {
    const boxRef1 = useRef(null);
    const boxRef2 = useRef(null);
    const boxRef3 = useRef(null);
    const boxRef4 = useRef(null);

    // to 애니메이션
    const handleClickBox1 = () => {
        gsap.to(boxRef1.current, {
            x:100,
            opacity : 0.5,
            duration : 1,
            ease : 'bounce.out',
            /*
                power1, power2, power3, power4
                sine, expo, circ
                back, elastic, bounce

                .in 시작 속도 빠름
                .out 끝 속도 빠름
                .inOut 시작,끝속도빠름
            */
           repeat : 1,
           yoyo : true,
           repeatDelay : 0.5,
           delay : 0.5,
        })
    }

    // from 애니메이션
    const handleClickBox2 = () => {
        gsap.from(boxRef2.current, {
            x:200,
            opacity:0,
            duration : 1.5,
            ease : 'power4.out',
        })
    }

    // fromTo 애니메이션
    const handleClickBox3 = () => {
        gsap.fromTo(
            boxRef3.current,
            { x: 300, opacity:0},
            { 
                x:0,
                opacity:1,
                duration:1,
                ease :'power2.inOut',
                yoyo: true,
                onStart : () => console.log('START'),
                onComplete : () => console.log('END'),
            }
        )
    }

    return (
        <>
        <div ref={boxRef1} onClick={handleClickBox1} className="w-40 h-40 bg-blue-500 cursor-pointer mb-4">to</div>
        <div ref={boxRef2} onClick={handleClickBox2} className="w-40 h-40 bg-red-500 cursor-pointer mb-4">from</div>
        <div ref={boxRef3} onClick={handleClickBox3} className="w-40 h-40 bg-green-500 cursor-pointer mb-4">fromTo</div>
        <div ref={boxRef4} className="w-40 h-40 bg-yellow-500 cursor-pointer">set</div>
        </>
    );
};

export default Gsap01;