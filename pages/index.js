import AboutUs from "@/components/AboutUs";
import Aesthetic from "@/components/Aesthetic";
import CollaboratesGenres from "@/components/CollaboratesGenres";
import Concert from "@/components/Concert";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import LatestNews from "@/components/LatestNews";
import MusicalUniverse from "@/components/MusicalUniverse";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <AboutUs />
      <MusicalUniverse />
      <CollaboratesGenres />
      <Aesthetic />
      <Concert />
      <LatestNews />
      <Footer />
    </>
  );
}
