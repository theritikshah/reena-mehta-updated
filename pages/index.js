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
import Head from "next/head";

export default function Home({ blogpost, heroslider }) {
  console.log(heroslider);
  return (
    <>
      <Head>
        <title>Reena Mehta | When words leave off, music begins</title>
      </Head>
      <Header />
      <HeroBanner heroslider={heroslider} />
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

  const heroslider = await client.fetch(groq`
*[_type == "heroslider" && publishedAt < now()] | order(publishedAt desc)
`);
  return {
    props: {
      blogpost,
      heroslider,
    },
  };
}
