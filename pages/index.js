import AboutUs from "@/components/AboutUs";
import Aesthetic from "@/components/Aesthetic";
import CollaboratesGenres from "@/components/CollaboratesGenres";
import Concert from "@/components/Concert";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import LatestNews from "@/components/LatestNews";
import MusicalUniverse from "@/components/MusicalUniverse";
import groq from "groq";
import { client } from "../utils/client";

export default function Home({ blogpost }) {
  console.log(blogpost, "post");
  const seoData = {
    title: "Wafr - Home",
    description: "Your Loyalty memberships & rewards in one place",
  };

  return (
    <>
      <Header />
      <HeroBanner />
      <AboutUs />
      <MusicalUniverse />
      <CollaboratesGenres />
      <Aesthetic />
      <Concert />
      <LatestNews blogpost={blogpost} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const blogpost = await client.fetch(groq`
  *[_type == "blogpost" && publishedAt < now()] | order(publishedAt desc)
`);
  return {
    props: {
      blogpost,
    },
  };
}
