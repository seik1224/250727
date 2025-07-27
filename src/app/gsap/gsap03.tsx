import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const Gsap03 = () => {
    const boxRef = useRef(null);

    useEffect(()=>{
        const el = boxRef.current;
        if(!el) return;

        const tl = gsap.timeline({
            scrollTrigger : {
                trigger : el,
                start : 'top 80%',
                end : 'top 30%',
                scrub:true,
                markers:true,
            }
        })
        // duration : 애니메이션 지속 시간내의 상대적인 진행속도
        .to(el, {x:100, duration:1})
        .to(el, {x:-50, duration:1})
        .to(el, {rotation:360, duration:2})
        .to(el, {scale : 1.5, duration:1})

        return ()=>{
            tl.kill();
            gsap.killTweensOf(el);
            ScrollTrigger.getAll().forEach((trigger)=>trigger.kill());
        }

    },[])

    return (
        <section className="h-[200vh] flex justify-center items-center">
            <div ref={boxRef} className="size-20 bg-red-600">BOX</div>
        </section>
    );
};

export default Gsap03;