import HeroHeader from "@/components/home/HeroHeader";
import Curve from "@/components/utils/Curve";
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Home() {
  return (
      <Curve>
          <HeroHeader/>
      </Curve>
  );
}
