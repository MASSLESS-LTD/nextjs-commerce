import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import { HomeComponent } from 'components/home-component';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'Ninja Shanti Clothing Store',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Carousel />
      <Footer />
      <HomeComponent />
    </>
  );
}
