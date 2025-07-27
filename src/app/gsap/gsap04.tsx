import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const Gsap04 = () => {
    const triggerRef = useRef(null);
    const gsap01Ref = useRef(null);
    const gsap02Ref = useRef(null);
    const gsap03Ref = useRef(null);
    const gsap04Ref = useRef(null);
    const gsap05Ref = useRef(null);

    useEffect(()=>{
        const tl = gsap.timeline({
            scrollTrigger : {
                trigger : triggerRef.current,
                start : 'top top',
                end : '+=200', // 시작부분에서 200씩 갈때마다 end
                scrub:2,
                markers:true,
            }
        })
        .fromTo(
            [
                gsap01Ref.current,
                gsap02Ref.current,
                gsap03Ref.current,
                gsap04Ref.current,
                gsap05Ref.current,
            ],
            { y : '400%'},
            {
                y: '0',
                stagger : 0.5, // 각 요소 사이의 지연시간
                duration : 1, // 각 애니메이션 지속 시간
            }
        )

        return ()=>{
            tl.kill();
            ScrollTrigger.getAll().forEach((trigger)=>trigger.kill());
        }

    },[])

    return (
        <>
        <section className="h-screen"></section>
        <section ref={triggerRef} className="relative h-dvh bg-black flex justify-center items-center border-4 border-red-600">
            {[
                { ref:gsap01Ref, bg: "#fee8b0", rotate: -12 },
                { ref:gsap02Ref, bg: "#ffbbcc", rotate: 12 },
                { ref:gsap03Ref, bg: "#ffcccc", rotate: -15 },
                { ref:gsap04Ref, bg: "#df9773", rotate: 18 },
                { ref:gsap05Ref, bg: "#d9eccb", rotate: -3 },
            ].map((card, index) => (
            <span
                key={index}
                className={`w-60 h-80 absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-4xl`}
                ref={card.ref}
                style={{
                transform: `translate(-50%, -50%) rotate(${card.rotate}deg)`,
                background: `${card.bg}`,
                }}
            >
                Card{index + 1}
            </span>
            ))}
        </section>
        <section className="h-screen"></section>
        </>
    );
};

export default Gsap04;