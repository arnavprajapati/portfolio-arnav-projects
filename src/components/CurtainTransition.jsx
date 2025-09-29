import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CurtainTransition = ({ isTransitioning, onComplete }) => {
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);
    const containerRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isTransitioning && containerRef.current && !hasAnimated.current) {
            hasAnimated.current = true;

            const boxes = [
                box1.current,
                box3.current,
                box2.current,
                box4.current
            ];

            if (boxes.some(box => !box)) {
                hasAnimated.current = false;
                return;
            }

            boxes.forEach(box => gsap.killTweensOf(box));

            gsap.set(boxes, { y: "-100%", force3D: true });

            const tl = gsap.timeline({
                onComplete: () => {
                    hasAnimated.current = false;
                    if (onComplete) {
                        onComplete();
                    }
                }
            });

            tl.to(box4.current, {
                y: "0%",
                duration: 0.8,
                ease: "power3.inOut",
                force3D: true
            });

            tl.to({}, { duration: 0.2 });

            tl.set(boxes, { y: "0%" });

            tl.to(
                [box4.current, box2.current, box3.current, box1.current],
                {
                    y: "-100%",
                    duration: 1.2,
                    ease: "power3.inOut",
                    stagger: 0.2,
                    force3D: true
                }
            );
        } else if (!isTransitioning) {
            hasAnimated.current = false;
        }
    }, [isTransitioning, onComplete]);

    if (!isTransitioning) return null;

    return (
        <div ref={containerRef} className="fixed top-0 left-0 w-screen h-screen z-[100] pointer-events-none overflow-hidden">
            <div ref={box1} className="absolute top-0 left-0 h-full w-full bg-pink-400 z-10" style={{ transform: 'translateY(-100%)', willChange: 'transform' }}></div>
            <div ref={box3} className="absolute top-0 left-0 h-full w-full bg-cyan-400 z-20" style={{ transform: 'translateY(-100%)', willChange: 'transform' }}></div>
            <div ref={box2} className="absolute top-0 left-0 h-full w-full bg-white z-30" style={{ transform: 'translateY(-100%)', willChange: 'transform' }}></div>
            <div ref={box4} className="absolute top-0 left-0 h-full w-full bg-[#ACDDDE] z-40" style={{ transform: 'translateY(-100%)', willChange: 'transform' }}></div>
        </div>
    );
};

export default CurtainTransition;