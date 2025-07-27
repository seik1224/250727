import React, { useEffect, useRef } from "react";

const Observer01 = () => {
    const targetRef = useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    if(entry.isIntersecting){
                        (entry.target as HTMLElement).style.opacity = '1';
                    } else {
                        (entry.target as HTMLElement).style.opacity = '0';
                    }
                })
            },
            {
                threshold : 0.5 // box가 화면상에서 50%보일때
            }
        )

        const currentTarget = targetRef.current; 

        if(currentTarget){
            observer.observe(currentTarget);
        }

        return () => {
            if(currentTarget){
                observer.unobserve(currentTarget);
            }
        }
    }, [])

    return (
        <>
        <div className="h-[300vh] ">
            <div className="w-full h-screen bg-yellow-500 flex justify-center items-center">
            부드러운 스크롤 제공하는 라이브러리
            </div>
            <div className="w-full h-screen bg-blue-500 flex justify-center items-center">
            <div
                ref={targetRef}
                className="target-element bg-red-500 size-28"
                style={{ transition: "opacity 1s ease-in-out" }}
            ></div>
            </div>
            <div className="w-full h-screen bg-green-500 flex justify-center items-center">
            부드러운 스크롤 제공하는 라이브러리
            </div>
        </div>
        </>
    );
};

export default Observer01;