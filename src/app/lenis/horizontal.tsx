import React, { useRef, useEffect } from "react";

const Horizontal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const updateScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollPosition = window.scrollY;
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const windowHeight = window.innerHeight;

    // 컨테이너 상단이 뷰포트 상단에 도달했을 때부터 처리
    if (scrollPosition >= containerTop) {
      // 스크롤 진행률 계산 (0 ~ 1)
      const scrollProgress = Math.min(
        Math.max(
          (scrollPosition - containerTop) / (containerHeight - windowHeight),
          0
        ),
        1
      );

      // 컨테이너의 실제 너비를 기준으로 계산
      const containerWidth = container.offsetWidth;
      const translateX =
        -scrollProgress * (containerWidth * (sectionsRef.current.length - 1));

      sectionsRef.current.forEach((section) => {
        if (section) {
          section.style.transform = `translateX(${translateX}px)`;
        }
      });
    }
  };

  useEffect(() => {
    updateScroll();
    window.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <>
      <section className="h-screen"></section>

      <section ref={containerRef} className="relative w-full h-[400vh]">
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
          <div className="flex w-full h-screen">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                ref={(el: HTMLDivElement) => {
                  if (el) sectionsRef.current[index] = el;
                }}
                className={`flex justify-center items-center text-4xl text-white w-full h-screen flex-shrink-0`}
                style={{
                  backgroundColor: `hsl(${index * 100}, 70%, 50%)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                SECTION {index + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-screen"></section>
    </>
  );
};

export default Horizontal;