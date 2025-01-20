import Link from 'next/link';
import Curve from "@/components/utils/Curve";

export default function Custom404() {

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

                    <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20
                        text-primary uppercase transition-colors duration-300">
                        Retour à l'accueil
                    </Link>

                </div>
            </div>
        </Curve>
    );
}