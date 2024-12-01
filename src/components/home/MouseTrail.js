'use client';
import { useRef, useEffect } from 'react';
import {gsap} from "gsap";

export default function MouseTrail({ children, className }) {
    let steps = 0;
    let currentIndex = 0;
    let nbOfImages = 0;
    let maxNumberOfImages = 8;
    let refs = [];
    let idleTimeout = null;

    const manageMouseMove = (e) => {
        const { clientX, clientY, movementX, movementY } = e;

        resetIdleTimer();

        steps += Math.abs(movementX) + Math.abs(movementY);

        if (steps >= currentIndex * 150) {
            moveImage(clientX, clientY);

            if (nbOfImages === maxNumberOfImages) {
                removeImage();
            }
        }

        if (currentIndex === refs.length) {
            currentIndex = 0;
            steps = -150;
        }
    };

    const moveImage = (x, y) => {
        const currentImage = refs[currentIndex].current;
        currentImage.style.left = x + "px";
        currentImage.style.top = y + "px";
        gsap.to(currentImage, {
            display: "block",
            duration: 0.3,
            scale: 1,
        })
        currentIndex++;
        nbOfImages++;
        setZIndex();
    };

    const setZIndex = () => {
        const images = getCurrentImages();
        for (let i = 0; i < images.length; i++) {
            images[i].style.zIndex = 50 + i;
        }
    };

    const removeImage = () => {
        const images = getCurrentImages();
        gsap.to(images[0], {
            display: "none",
            duration: 0.3,
            scale: 0,
        })
        nbOfImages--;
    };

    const getCurrentImages = () => {
        let images = [];
        let indexOfFirst = currentIndex - nbOfImages;
        for (let i = indexOfFirst; i < currentIndex; i++) {
            let targetIndex = i;
            if (targetIndex < 0) targetIndex += refs.length;
            images.push(refs[targetIndex].current);
        }
        return images;
    };

    const resetIdleTimer = () => {
        if (idleTimeout) clearTimeout(idleTimeout);
        idleTimeout = setTimeout(() => {
            hideAllImages();
        }, 1000);
    };

    const hideAllImages = () => {
        refs.forEach((ref) => {
            if (ref.current) {
                gsap.to(ref.current, {
                    scale: 0,
                    display: "none",
                    duration: 0.3,
                });
            }
        });
        nbOfImages = 0;
    };

    useEffect(() => {
        return () => {
            if (idleTimeout) clearTimeout(idleTimeout);
        };
    }, []);

    return (
        <div onMouseMove={(e) => {manageMouseMove(e)}}
            onMouseLeave={() => {hideAllImages()}}
            className={`relative cursor-pointer ${className}`}>

            {children}

            {
                [...Array(19).keys()].map((_, index) => {
                    const ref = useRef(null);
                    refs.push(ref);
                    return (
                        <img
                            key={index}
                            ref={ref}
                            className="scale-0 size-40 object-cover absolute hidden -translate-y-1/2 -translate-x-1/2"
                            src={`/images/${index}.jpg`}
                        />
                    );
                })
            }
        </div>
    );
}
