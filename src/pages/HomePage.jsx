import NewsTicker from '../components/NewsTicker';
import HeroCarousel from '../components/HeroCarousel';
import About from '../components/About';
import Features from '../components/Features';
import Products from '../components/Products';
import PromoVideos from '../components/PromoVideos';
import Clients from '../components/Clients';
import usePageTitle from '../hooks/usePageTitle';

export default function HomePage() {
  usePageTitle('Embesys Innovative Technologies Pvt. Ltd');
  return (
    <>
      <NewsTicker />
      <HeroCarousel />
      <About />
      <Features />
      <Products />
      <PromoVideos />
      <Clients />
    </>
  );
}
