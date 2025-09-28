import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const CustomCursor = () => {
    useEffect(() => {
        const crsr = document.querySelector(".crsr");
        const handleMouseMove = (dets) => {
            if (crsr) {
                gsap.to(crsr, { left: dets.x, top: dets.y });
            }
        };
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const cursorClasses = "fixed h-[1vw] w-[1vw] rounded-[50%] z-[9999] border-2 border-[#ffffffbe] -translate-x-1/2 -translate-y-1/2 bg-blend-difference";
    return <div className={`crsr ${cursorClasses}`}></div>;
};

const CurtainLoader = ({ children, onAnimationComplete }) => {
    const h1Ref = useRef(null);
    const loaderRef = useRef(null);

    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);
    const contentRef = useRef(null);


    const h1Text = "CODE ARCHITECT DEPLOY SEE THE MERN STACK IN ACTION";
    const splittedText = h1Text.split(" ");
    const loaderWords = splittedText.map((elem, index) => (
        <span
            key={index}
            className="word opacity-0 flex items-center gap-[0.2em] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
        >
            <span className="dot w-[10px] h-[10px] bg-[#bdbdbd] rounded-full mr-[0.4em]"></span>
            {elem}
        </span>
    ));

    useEffect(() => {
        gsap.set(contentRef.current, { opacity: 0, y: 50 });

        const words = document.querySelectorAll(".word");
        let current = 0;

        if (h1Ref.current) h1Ref.current.classList.remove("invisible");

        const showNextWord = () => {
            if (current < words.length) {
                words[current].style.opacity = 1;
                let delay = (current === 0 || current === words.length - 1) ? 1200 : 200;

                setTimeout(() => {
                    words[current].style.opacity = 0;
                    current++;
                    showNextWord();
                }, delay);
            } else {
                const tl = gsap.timeline({
                    onComplete: () => {
                        if (onAnimationComplete) {
                            onAnimationComplete();
                        }
                    }
                });

                tl.to(loaderRef.current, {
                    opacity: 0,
                    duration: 0.3,
                });

                const boxes = [
                    box4.current,
                    box2.current,
                    box3.current,
                    box1.current
                ];

                tl.to(
                    boxes,
                    {
                        y: "-100%",
                        duration: 1.2,
                        ease: "power3.inOut",
                        stagger: 0.2,
                    },
                    "+=0.2"
                );

                tl.to(
                    contentRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "power2.out",
                    },
                    "-=1.5"
                );
            }
        };

        showNextWord();

    }, [onAnimationComplete]); 

    return (
        <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden">
            <div id="loader" ref={loaderRef} className="w-full h-full flex justify-center items-center absolute z-[999] bg-black">
                <h1 ref={h1Ref} className="text-white font-[gilroy] text-5xl relative">
                    {loaderWords}
                </h1>
            </div>

            <div
                ref={contentRef}
                className="absolute w-full h-full flex items-center justify-center bg-gray-100 z-0"
            >
                {children}
            </div>

            <div className="absolute w-screen h-screen z-10">

                <div ref={box4} className="absolute h-full w-full bg-black z-40"></div>
                <div ref={box2} className="absolute h-full w-full bg-white z-30"></div>
                <div ref={box3} className="absolute h-full w-full bg-cyan-400 z-20"></div>
                <div ref={box1} className="absolute h-full w-full bg-pink-400 z-10"></div>
            </div>
        </div>
    );
};

export default CurtainLoader;