import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import useAppStore from "@/store/store";

const WORDS = [
    {first: "Simon", second: "TESSARD"},
    {first: "Artisan", second: "web"},
    {first: "Craft", second: "moderne"},
    {first: "Pixel", second: "Perfect"}
];

export default function Entrance() {
    const entranceIsDone = useAppStore(state => state.entranceIsDone);
    const setEntranceIsDone = useAppStore(state => state.setEntranceIsDone);

    useGSAP(() => {
        const entranceEl = document.querySelector('.js-entrance');

        if (entranceIsDone) {
            entranceEl?.classList.add("hidden");
            return;
        }

        // Configuration body
        document.body.style.overflow = "hidden";
        document.body.setAttribute("data-lenis-prevent", "true");

        const tl = gsap.timeline({paused: true});

        gsap.set('.js-entrance', {autoAlpha: 0});
        tl.set('.js-entrance', {autoAlpha: 1});

        // Animation des 4 paires de mots
        WORDS.forEach((_, i) => {
            const wordNum = i + 1;
            const yOffset = -100 * wordNum;

            if (i === 0) {
                // Premier mot : fade out + déplacement
                tl.to([`.js-word-first-${wordNum}`, `.js-word-second-${wordNum}`], {
                    opacity: 0,
                    yPercent: yOffset,
                    duration: .9,
                    delay: .8,
                    ease: 'power4.out'
                }, '<');

                // Déplacement des mots suivants
                tl.to(
                    WORDS.slice(1).flatMap((_, j) => {
                        const n = j + 2;
                        return [`.js-word-first-${n}`, `.js-word-second-${n}`];
                    }),
                    {yPercent: yOffset, duration: 1, delay: .2, ease: 'power4.out'},
                    "<"
                );
            } else {
                // Mots suivants : fade out
                tl.to([`.js-word-first-${wordNum}`, `.js-word-second-${wordNum}`], {
                    opacity: 0,
                    yPercent: yOffset,
                    duration: .9,
                    delay: .2,
                    ease: 'power4.out'
                });

                // Déplacement des mots restants
                if (i < WORDS.length - 1) {
                    tl.to(
                        WORDS.slice(i + 1).flatMap((_, j) => {
                            const n = i + j + 2;
                            return [`.js-word-first-${n}`, `.js-word-second-${n}`];
                        }),
                        {yPercent: yOffset, duration: 1, delay: .2, ease: 'power4.out'},
                        "<"
                    );
                }
            }
        });

        // Disparition finale
        tl.to('.js-entrance--text', {autoAlpha: 0, duration: .6, ease: 'power4.out'})
            .to('.js-entrance', {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                duration: .8,
                ease: 'power4.inOut',
                onComplete: () => {
                    entranceEl?.remove();
                    document.body.style.overflow = "unset";
                    document.body.removeAttribute("data-lenis-prevent");
                    setEntranceIsDone(true);
                }
            }, '-=1.5');

        tl.play();
    }, [entranceIsDone]);

    return (
        <div
            className="js-entrance fixed z-[101] flex justify-center items-center h-[100dvh] md:h-screen w-full bg-primary"
            style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}}
        >
            <div className="js-entrance--text relative text-white flex gap-1.5 md:gap-2">
                <div className="overflow-hidden flex flex-col relative font-primary text-right text-2xl md:text-3xl xl:text-4xl h-7 md:h-8 xl:h-9 uppercase">
                    {WORDS.map((word, i) => (
                        <p key={i} className={`js-word-first-${i + 1}`}>{word.first}</p>
                    ))}
                </div>

                <div className="overflow-hidden flex flex-col pt-1.5 md:pt-2 xl:pt-2.5 font-secondary text-lg md:text-xl xl:text-2xl uppercase h-7 md:h-8 xl:h-[2.10rem] md:leading-8 p-1 max-md:mb-0.5">
                    {WORDS.map((word, i) => (
                        <p key={i} className={`js-word-second-${i + 1}`}>{word.second}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}