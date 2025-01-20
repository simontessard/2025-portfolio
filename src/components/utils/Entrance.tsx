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
            tl.to(['.js-up--first-1word', '.js-up--second-1word'], {opacity: 0, yPercent: -100, duration: 1, delay: .9, ease: 'power4.out',
                onStart : () => {document.body.style.overflow = "hidden"}
            }, '<')
            tl.to(['.js-up--first-2word', '.js-up--first-3word', '.js-up--first-4word', '.js-up--second-2word', '.js-up--second-3word' , '.js-up--second-4word'], {yPercent: -100, duration: 1.2, delay: .2, ease: 'power4.out'}, "<")

            // Disparition seconds mots
            tl.to(['.js-up--first-2word', '.js-up--second-2word'], {opacity: 0, yPercent: -200, duration: 1, delay: .8, ease: 'power4.out'})
            tl.to(['.js-up--first-3word', '.js-up--second-3word'], {yPercent: -200, duration: 1.2, delay: .2, ease: 'power4.out'}, "<")

            // Disparition troisième mots
            tl.to(['.js-up--first-3word', '.js-up--second-3word'], {opacity: 0, yPercent: -300, duration: 1, delay: .8, ease: 'power4.out'})
            tl.to(['.js-up--first-4word', '.js-up--second-4word'], {yPercent: -300, duration: 1.2, delay: .2, ease: 'power4.out'}, "<")

            // Disparition quatrième mots
            tl.to(['.js-up--first-4word', '.js-up--second-4word'], {opacity: 0, yPercent: -400, duration: 1, delay: .8, ease: 'power4.out'})

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
            }, '-=1.3')

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

            <div className="js-entrance--text relative text-white flex gap-1.5 md:gap-2">

                {/*<div className="absolute z-10 top-0 mx-auto right-0 left-20 w-60 bg-black h-9"></div> */}

                <div className="overflow-hidden flex flex-col relative font-primary text-right text-2xl md:text-3xl xl:text-4xl h-7 md:h-8 xl:h-9 uppercase">
                    <p className="js-up--first-1word">Simon</p>
                    <p className="js-up--first-2word">Créations</p>
                    <p className="js-up--first-3word">Designs</p>
                    <p className="js-up--first-4word">Interfaces</p>
                </div>

                <div className="overflow-hidden flex flex-col pt-1.5 md:pt-2 xl:pt-2.5 font-secondary text-lg md:text-xl xl:text-2xl uppercase h-7 md:h-8 xl:h-[2.10rem] w-32 md:leading-8 p-1 max-md:mb-0.5">
                    <p className="js-up--second-1word">TESSARD</p>
                    <p className="js-up--second-2word">uniques</p>
                    <p className="js-up--second-3word">soignés</p>
                    <p className="js-up--second-4word">modernes</p>
                </div>

            </div>
        </div>
    )
}