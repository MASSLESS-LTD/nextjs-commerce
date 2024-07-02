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
      <HomeComponent />
      <Footer />
    </>
  );
}
