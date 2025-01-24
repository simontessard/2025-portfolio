'use client';

import React, { useState, useEffect } from 'react';
import { MousePointer, Hand } from 'lucide-react';
import {usePathname} from "next/navigation";

export default function CustomCursor() {
    const pathname = usePathname();
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            setIsHovering(
                target.closest('a, button, [onclick], [role="button"], [data-cursor-hover]') !== null
            );
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleHover);
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