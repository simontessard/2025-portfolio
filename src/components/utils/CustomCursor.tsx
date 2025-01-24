'use client';

import React, { useState, useEffect } from 'react';
import { MousePointer, Hand } from 'lucide-react';
import {usePathname} from "next/navigation";

export default function CustomCursor() {
    const pathname = usePathname();
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Hide native cursor globally
        document.body.style.cursor = 'none';

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: Event) => {
            setIsHovering(true);
        };

        const handleMouseOut = (e: Event) => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Add event listeners to all clickable elements
        const clickableElements = document.querySelectorAll('a, button, [onclick], [role="button"]');
        clickableElements.forEach(el => {
            el.addEventListener('mouseover', handleMouseOver);
            el.addEventListener('mouseout', handleMouseOut);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clickableElements.forEach(el => {
                el.removeEventListener('mouseover', handleMouseOver);
                el.removeEventListener('mouseout', handleMouseOut);
            });
        };
    }, [pathname]);

    return (
        <div
            className="fixed pointer-events-none z-[9999]"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)'
            }}
        >
            {isHovering ? (
                <Hand
                    className="text-primary"
                    size={24}
                    strokeWidth={1.5}
                />
            ) : (
                <MousePointer
                    className="text-primary"
                    size={24}
                    strokeWidth={1.5}
                />
            )}
        </div>
    );
}