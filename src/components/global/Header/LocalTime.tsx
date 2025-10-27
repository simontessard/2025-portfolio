import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import useAppStore from "@/store/store";

export default function LocalTime() {
    const [time, setTime] = useState("");
    const color = useAppStore((state) => state.color);

    useGSAP(() => {
        gsap.to('.local-time', {
            scrollTrigger: {
                trigger: '.local-time',
                start: '=+70px',
                scrub: 1,
            },
            duration: .5,
            autoAlpha: 0,
        })
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const parisTime = new Date().toLocaleString("fr-FR", {
                timeZone: "Europe/Paris",
                hour: "2-digit",
                minute: "2-digit",
            });
            setTime(parisTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="local-time max-md:hidden size-fit fixed z-50 top-4 md:top-6 mx-auto inset-x-0 flex items-center gap-5">

            <div className="flex items-center gap-2">
                <p style={{color}}
                   className="uppercase font-primary text-sm md:text-lg">
                    Rennes, France
                </p>

                <span style={{ backgroundColor: color }} className="block size-1.5 rounded-full"/>

                <p style={{color}}
                   className="uppercase font-primary text-sm md:text-lg">
                    {time}
                </p>
            </div>

        </div>

    )
}