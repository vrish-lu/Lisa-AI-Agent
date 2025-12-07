"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextRevealProps {
    text: string;
    className?: string;
}

const SplitTextReveal = ({ text, className = "" }: SplitTextRevealProps) => {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const element = textRef.current;

        // Manual splitting since SplitText is a Club GSAP plugin (paid).
        // We'll implement a basic version for free.
        const chars = text.split('').map(char => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.style.transform = 'translateY(100%)'; // Initial state
            span.style.opacity = '0';
            return span;
        });

        element.innerHTML = '';
        chars.forEach(char => element.appendChild(char));

        // Animate
        gsap.fromTo(element.children,
            {
                y: 80,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "circ.out",
                stagger: 0.02,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%", // Start when top of element hits 80% viewport height
                    toggleActions: "play none none reverse"
                }
            }
        );

        return () => {
            // Cleanup if needed
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [text]);

    return (
        <h2 ref={textRef} className={`split-text-reveal ${className}`} style={{ overflow: 'hidden', display: 'inline-block' }}>
            {text}
        </h2>
    );
};

export default SplitTextReveal;
