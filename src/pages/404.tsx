import Curve from "@/components/utils/Curve";
import NavigationButton from "@/components/global/NavigationButton";
import {usePathname} from "next/navigation";
import {useEffect} from "react";
import useAppStore from "@/store/store";

export default function Custom404() {
    const pathname = usePathname();
    const setEntranceIsDone = useAppStore((state) => state.setEntranceIsDone);

    useEffect(() => {
        setEntranceIsDone(true);
    }, [pathname]);

    return (
        <Curve>
            <div className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden">

                <div className="relative z-10 text-center px-4">

                    <h1 className="font-primary text-[12rem] md:text-[20rem] font-bold text-primary/15 leading-none select-none">
                        404
                    </h1>

                    <h2 className="font-secondary italic text-2xl md:text-4xl text-primary mb-4">
                        Page non trouvée
                    </h2>

                    <p className="text-primary/70 max-w-md mx-auto max-md:text-sm mb-8 md:mb-10">
                        La page que vous recherchez semble avoir disparu dans le néant numérique.
                    </p>

                    <NavigationButton href="/" text="Retour à l'accueil"/>

                </div>
            </div>
        </Curve>
    );
}