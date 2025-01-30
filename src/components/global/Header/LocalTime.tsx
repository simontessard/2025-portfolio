import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import useAppStore from "@/store/store";
import LanguageSwitch from "@/components/global/LanguageSwitch";
import {useTranslations} from "next-intl";

export default function LocalTime() {
    const [time, setTime] = useState("");
    const color = useAppStore((state) => state.color);
    const t = useTranslations('others');

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

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="local-time max-md:hidden size-fit fixed top-4 md:top-6 mx-auto inset-x-0 flex items-center gap-3 md:gap-5">
            <p style={{color}}
               className="uppercase font-primary text-sm md:text-lg">
                {t('time')} : {time}
            </p>
            <LanguageSwitch/>
        </div>

    )
}