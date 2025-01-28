'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import useAppStore from "@/store/store";

export default function CustomCursor() {
    const pathname = usePathname();
    const color = useAppStore((state) => state.color);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cursorState, setCursorState] = useState<'default' | 'hover' | 'grab'>('default');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Vérifier si l'appareil est mobile
        const checkMobile = () => {
            setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        };

        // Vérifier initialement et ajouter un écouteur de redimensionnement
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Ne pas ajouter les écouteurs d'événements sur mobile
        if (isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hoverableElements = target.closest('a, button, [onclick], [role="button"], [data-cursor-hover]');
            const grabElements = target.closest('.grab-me');

            if (grabElements) {
                setCursorState('grab');
            } else if (hoverableElements) {
                setCursorState('hover');
            } else {
                setCursorState('default');
            }
        };

        const handleMouseUp = () => {
            setCursorState('default');
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleHover);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleHover);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [pathname, isMobile]);

    if (isMobile) return null;

    const renderCursor = () => {
        switch (cursorState) {
            case 'hover':
                return (
                    <svg className="size-8" viewBox="0 0 52 52" width="24" height="24">
                        <use href="#i-cursor-click" style={{fill: color}}/>
                    </svg>
                );
            case 'grab':
                return (
                    <svg className="size-16" viewBox="0 0 70 70" width="24" height="24">
                        <use href="#i-cursor-grab" style={{fill: color}}/>
                    </svg>
                );
            default:
                return (
                    <svg viewBox="0 0 27 27" width="24" height="24">
                        <use href="#i-cursor" style={{fill: color}}/>
                    </svg>
                );
        }
    };

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
                <symbol xmlns="http://www.w3.org/2000/svg" id="i-cursor" viewBox="0 0 40 40">
                    <path d="M40 15.172L0 0l15.172 40 6.897-17.93L40 15.171z"/>
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="i-cursor-click" viewBox="0 0 52 52">
                    <path d="M35.893 43.034l-3.6-3.6-8.904-1.42-10.74-10.74 2.797-6.525L.462 5.765l4.66-4.66 9.054 9.054 5.612-3.748 2.247 2.248 5.573-3.709 2.038 2.038L35.24 3.26l11.45 11.452 1.434 8.89 3.6 3.6-15.832 15.832z"/>
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="i-cursor-grab" viewBox="0 0 70 70">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.706 27.437L2.5 34.643l7.206 7.206 1.406-1.406-4.806-4.806H16.5V33.65H6.306l4.806-4.806-1.406-1.406z"/>
                    <path d="M26.514 49.286v-3.862l-4.014-5.54V28.363l5-2v-7.526l5-1V20l5.02 1v2.412l4.98 1v2.186l5 1v12.287l-4 5.539v3.862H26.514z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M60.294 27.437l7.206 7.206-7.206 7.206-1.406-1.406 4.806-4.806H53.5V33.65h10.194l-4.806-4.806 1.406-1.406z"/>
                </symbol>
            </svg>
            <div className="fixed pointer-events-none z-[9999]"
                style={{left: `${position.x}px`, top: `${position.y}px`, transform: 'translate(-15%, -10%)'}}>
                {renderCursor()}
            </div>
        </>
    );
}