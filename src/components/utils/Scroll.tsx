"use client";
import { ReactLenis } from 'lenis/react'

type SmoothScrollProps = {
    children: React.ReactNode
}
export default function Scroll({ children } : SmoothScrollProps) {
    return (
        <ReactLenis root options={{ lerp: 0.05, duration: 1.5 }}>
            {children}
        </ReactLenis>
    );
}