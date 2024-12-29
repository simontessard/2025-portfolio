import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import useAppStore from "@/store/store";

export default function Entrance() {
    const entranceIsDone = useAppStore(state => state.entranceIsDone);
    const setEntranceIsDone = useAppStore(state => state.setEntranceIsDone);

    useGSAP(() => {
        if (!entranceIsDone) {
            const entranceElement = document.querySelector('.js-entrance');
            const tl = gsap.timeline({ paused: true });

            gsap.set('.js-entrance', {autoAlpha: 0})
            tl.set('.js-entrance', {autoAlpha: 1})

            tl.to('.js-up--second', {
                yPercent: -100,
                duration: 1,
                stagger: 0.1,
                ease: 'power4.out',
                delay: 1
            })

            tl.to('.js-up--first', {
                yPercent: -100,
                duration: 1,
                ease: 'power4.out',
            }, '<')

            tl.to('.js-up--second', {
                yPercent: -200,
                duration: 1,
                stagger: 0.1,
                ease: 'power4.out',
                delay: 1
            })

            tl.to('.js-up--first', {
                yPercent: -200,
                duration: 1,
                ease: 'power4.out',
            }, '<')

            tl.to('.js-entrance--text', {
                autoAlpha: 0,
                duration: .6,
                ease: 'power4.out',
                delay: .5
            })

            tl.to('.js-entrance', {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                duration: .8,
                ease: 'power4.inOut',
                onComplete: () => {
                    if (entranceElement) {
                        entranceElement.remove();
                    }
                    setEntranceIsDone(true)
                }
            }, '-=.6')

            if (!entranceIsDone) {
                tl.play();
            } else {
                if (entranceElement) {
                    entranceElement.remove();
                }
            }
        } else {
            const entranceElement = document.querySelector('.js-entrance');
            if (entranceElement) {
                entranceElement.classList.add("hidden");
            }
        }
    })
    return (
        <div className="js-entrance fixed z-[101] flex justify-center items-center h-[100dvh] md:h-screen w-full bg-primary"
        style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}}>
            <div className="js-entrance--text relative text-white flex items-center gap-3">

                <div className="relative font-primary overflow-hidden text-2xl md:text-3xl uppercase p-1">
                    <p className="js-up--first absolute">Interface</p>
                    <p className="opacity-0">Interface</p>
                    <p className="js-up--first absolute">Creation</p>
                    <p className="js-up--first translate-y-full absolute">Interface</p>
                </div>

                <div className="relative font-secondary overflow-hidden text-[1.45rem] md:text-[1.75rem] uppercase h-7 md:h-8 md:leading-8 p-1">
                    <p className="js-up--second absolute max-md:top-0">Responsive</p>
                    <p className="opacity-0">Responsive</p>
                    <p className="js-up--second absolute max-md:-translate-y-1">Contenu</p>
                    <p className="js-up--second absolute translate-y-8 md:translate-y-full">Creatif</p>
                </div>
            </div>
        </div>
    )
}