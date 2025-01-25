'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";

export default function CustomCursor() {
    const pathname = usePathname();
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cursorState, setCursorState] = useState<'default' | 'hover' | 'click' | 'grab'>('default');

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hoverableElements = target.closest('a, button, [onclick], [role="button"], [data-cursor-hover]');

            if (hoverableElements) {
                setCursorState('hover');
            } else {
                setCursorState('default');
            }
        };

        const handleMouseDown = () => {
            setCursorState('click');
        };

        const handleMouseUp = () => {
            setCursorState('default');
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleHover);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleHover);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [pathname]);

    const renderCursor = () => {
        switch (cursorState) {
            case 'hover':
                return (
                    <svg className="size-8" viewBox="0 0 52 52" width="24" height="24">
                        <use href="#i-cursor-click"/>
                    </svg>
                );
            case 'click':
                return (
                    <svg className="size-9" viewBox="0 0 52 52" width="24" height="24">
                        <use href="#i-cursor-click" />
                    </svg>
                );
            case 'grab':
                return (
                    <svg viewBox="0 0 70 70" width="24" height="24">
                        <use href="#i-cursor-grab" />
                    </svg>
                );
            default:
                return (
                    <svg viewBox="0 0 27 27" width="24" height="24">
                        <use href="#i-cursor" />
                    </svg>
                );
        }
    };

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
                <symbol xmlns="http://www.w3.org/2000/svg" id="i-cursor" className="fill-primary" viewBox="0 0 40 40">
                    <path d="M40 15.172L0 0l15.172 40 6.897-17.93L40 15.171z"/>
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="i-cursor-click" className="fill-primary" viewBox="0 0 52 52">
                    <path d="M35.893 43.034l-3.6-3.6-8.904-1.42-10.74-10.74 2.797-6.525L.462 5.765l4.66-4.66 9.054 9.054 5.612-3.748 2.247 2.248 5.573-3.709 2.038 2.038L35.24 3.26l11.45 11.452 1.434 8.89 3.6 3.6-15.832 15.832z"/>
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="i-cursor-grab" fill="#0156CF" viewBox="0 0 70 70">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.706 27.437L2.5 34.643l7.206 7.206 1.406-1.406-4.806-4.806H16.5V33.65H6.306l4.806-4.806-1.406-1.406z" fill="currentColor"/>
                    <path d="M26.514 49.286v-3.862l-4.014-5.54V28.363l5-2v-7.526l5-1V20l5.02 1v2.412l4.98 1v2.186l5 1v12.287l-4 5.539v3.862H26.514z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M60.294 27.437l7.206 7.206-7.206 7.206-1.406-1.406 4.806-4.806H53.5V33.65h10.194l-4.806-4.806 1.406-1.406z" fill="currentColor"/>
                </symbol>
            </svg>
            <div className="fixed pointer-events-none z-[9999]"
                style={{left: `${position.x}px`, top: `${position.y}px`, transform: 'translate(-15%, -10%)'}}>
                {renderCursor()}
            </div>
        </>
    );
}