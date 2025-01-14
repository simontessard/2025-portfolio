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

            // Disparition premiers mots
            tl.to(['.js-up--first-1word', '.js-up--second-1word'], {opacity: 0, yPercent: -100, duration: 1.5, delay: 1.2, ease: 'power4.out',
                onStart : () => {document.body.style.overflow = "hidden"}
            }, '<')
            tl.to(['.js-up--first-2word', '.js-up--first-3word', '.js-up--second-2word', '.js-up--second-3word'], {yPercent: -100, duration: 1.2, delay: .2, ease: 'power4.out'}, "<")

            // Disparition seconds mots
            tl.to(['.js-up--first-2word', '.js-up--second-2word'], {opacity: 0, yPercent: -200, duration: 1.5, delay: 1, ease: 'power4.out'})
            tl.to(['.js-up--first-3word', '.js-up--second-3word'], {yPercent: -200, duration: 1.2, delay: .2, ease: 'power4.out'}, "<")

            // Disparition troisième mots
            tl.to(['.js-up--first-3word', '.js-up--second-3word'], {opacity: 0, yPercent: -200, duration: .8, ease: 'power4.out'})

            // Disparition du contenu
            tl.to('.js-entrance--text', {autoAlpha: 0, duration: .6, ease: 'power4.out'})

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
            }, '-=1.5')

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

                <div className="relative overflow-hidden font-primary text-right text-2xl md:text-3xl xl:text-4xl uppercase">
                    <p className="js-up--first-1word absolute right-0">Créations</p>
                    <p className="opacity-0">Interfaces</p>
                    <p className="js-up--first-2word absolute right-0">Designs</p>
                    <p className="js-up--first-3word translate-y-full absolute">Interfaces</p>
                </div>

                <div className="overflow-hidden flex flex-col font-secondary text-lg md:text-xl xl:text-2xl uppercase h-7 md:h-8 xl:h-[2.10rem] w-32 md:leading-8 p-1 max-md:mb-0.5">
                    <p className="js-up--second-1word">uniques</p>
                    <p className="js-up--second-2word">soignés</p>
                    <p className="js-up--second-3word">modernes</p>
                </div>

            </div>
        </div>
    )
}