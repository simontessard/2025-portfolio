import HeroHeader from "@/components/home/HeroHeader";
import Curve from "@/components/utils/Curve";
import Head from "next/head";

export default function Home() {
  return (
      <Curve>
          <Head>
              <title>Accueil - Simon TESSARD</title>
          </Head>

          <HeroHeader/>
      </Curve>
  );
}
