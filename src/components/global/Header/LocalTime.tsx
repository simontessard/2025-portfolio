import { useState, useEffect } from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

export default function LocalTime() {
    const [time, setTime] = useState("");

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
                second: "2-digit",
            });
            setTime(parisTime);
        }, 1000);

        return () => clearInterval(interval); // Nettoyage à la fin du composant
    }, []);

    return <p className="local-time max-md:hidden fixed size-fit top-4 md:top-6 mx-auto inset-x-0 uppercase font-primary text-primary text-sm md:text-lg">
        Heure : {time}
    </p>
}