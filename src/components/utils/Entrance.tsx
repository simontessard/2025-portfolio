import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import useAppStore from "@/store/store";

export default function Entrance() {
    const entranceIsDone = useAppStore(state => state.entranceIsDone);
    const setEntranceIsDone = useAppStore(state => state.setEntranceIsDone);

    useGSAP(() => {
        const tl = gsap.timeline({ paused: true });

        gsap.set('.js-entrance', {
            autoAlpha: 0
        })

        tl.set('.js-entrance', {
            autoAlpha: 1
        })

        tl.to('.js-up', {
            yPercent: -100,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out',
            delay: 1
        })

        tl.to('.js-up', {
            yPercent: -200,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out',
            delay: 1
        })

        tl.to('.js-entrance--text', {
            autoAlpha: 0,
            duration: .6,
            ease: 'power4.out',
            delay: .5
        })

        tl.to('.js-entrance', {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            duration: 1,
            stagger: 0.1,
            ease: 'power4.inOut',
            onComplete: () => {
                const entranceElement = document.querySelector('.js-entrance');
                if (entranceElement) {
                    entranceElement.remove();
                }
                setEntranceIsDone(true)
            }
        }, '-=.6')

        if (!entranceIsDone) {
            tl.play();
        }
    })
    return (
        <div className="js-entrance fixed z-[101] flex justify-center items-center h-screen w-full bg-primary"
        style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}}>
            <div className="js-entrance--text relative text-white flex items-center gap-6 font-secondary text-2xl md:text-3xl uppercase">
                <p className="font-primary leading-3">Bonjour</p>
                <div className="relative overflow-hidden translate-y-1 px-1">
                    <p className="js-up absolute">Simon</p>
                    <p className="opacity-0">Dans mon monde</p>
                    <p className="js-up absolute">Bienvenue</p>
                    <p className="js-up absolute translate-y-full">Dans mon monde</p>
                </div>
            </div>
        </div>
    )
}