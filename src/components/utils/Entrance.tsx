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
                duration: .8,
                stagger: 0.1,
                ease: 'power4.out',
                delay: 1,
                onStart : () => {document.body.style.overflow = "hidden"}
            })

            tl.to('.js-up--first', {
                yPercent: -100,
                duration: .8,
                ease: 'power4.out',
            }, '<')

            tl.to('.js-up--second', {
                yPercent: -200,
                duration: .8,
                stagger: 0.1,
                ease: 'power4.out',
                delay: .7
            })

            tl.to('.js-up--first', {
                yPercent: -200,
                duration: .8,
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
                    document.body.style.overflow = "unset";
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

            <div className="js-entrance--text relative text-white flex items-end gap-3">

                <div className="relative font-primary overflow-hidden text-right text-2xl md:text-3xl uppercase">
                    <p className="js-up--first absolute right-0">Créations</p>
                    <p className="opacity-0">Interfaces</p>
                    <p className="js-up--first absolute right-0">Designs</p>
                    <p className="js-up--first translate-y-full absolute">Interfaces</p>
                </div>

                <div className="overflow-hidden flex flex-col font-secondary text-lg md:text-xl uppercase h-7 md:h-8 w-32 md:leading-8 p-1 max-md:mb-0.5">
                    <p className="js-up--second">uniques</p>
                    <p className="js-up--second">soignés</p>
                    <p className="js-up--second">modernes</p>
                </div>

            </div>
        </div>
    )
}