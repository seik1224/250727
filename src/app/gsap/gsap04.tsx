import React from "react";

const Gsap04 = () => {
  return (
    <>
      <section className="h-screen"></section>
      <section className="relative h-dvh bg-black flex justify-center items-center border-4 border-red-600">
        {[
          { bg: "#fee8b0", rotate: -12 },
          { bg: "#ffbbcc", rotate: 12 },
          { bg: "#ffcccc", rotate: -15 },
          { bg: "#df9773", rotate: 18 },
          { bg: "#d9eccb", rotate: -3 },
        ].map((card, index) => (
          <span
            key={index}
            className={`w-60 h-80 absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-4xl`}
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