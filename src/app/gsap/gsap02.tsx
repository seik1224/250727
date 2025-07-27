import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";


const Gsap02 = () => {
    const boxRef = useRef(null);

    useEffect(()=>{
        const element = boxRef.current;
        if(!element) return;

        const animation = gsap.to(element, {
            scrollTrigger : {
                trigger : element, // 어떤 요소를 만났을때 애니메이션 시작
                start : 'top 80%', // 요소의 top부분이 뷰포트 80% 지점에 도달했을때 애니메이션 시작
                end : 'bottom 20%', // 요소의 bottom부분이 뷰포트 30% 지점에 도달했을때 애니메이션 끝
                scrub:true, // 스크롤에 따라 애니메이션 진행
                markers : true,
            },
            x:100,
            duration:1,
        });

        return () => {
            animation.kill();
            gsap.killTweensOf(element);
            ScrollTrigger.getAll().forEach((trigger)=>trigger.kill());
        }
    },[])

    

    return (
        <section className="h-[200vh] flex justify-center items-center">
            <div ref={boxRef} className="size-20 bg-red-600">BOX</div>
        </section>
    );
};

export default Gsap02;