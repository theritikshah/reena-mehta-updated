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

export default function Home({
  blogpost,
  latestsongs,
  musicaluniverse,
  liveconcert,
  collaborates,
}) {
  return (
    <>
      <Head>
        <title>Reena Mehta | When words leave off, music begins</title>
      </Head>
      <Header />
      <HeroBanner latestsongs={latestsongs} />
      <AboutUs />
      <MusicalUniverse musicaluniverse={musicaluniverse} />
      <CollaboratesGenres collaborates={collaborates} />
      <Aesthetic />
      <Concert liveconcert={liveconcert} />
      <LatestNews blogpost={blogpost} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const blogpost = await client.fetch(groq` 
  *[_type == "blogpost" && publishedAt < now()] | order(publishedAt desc)
`);

  const latestsongs = await client.fetch(groq`
*[_type == "latestsongs" && publishedAt < now()] | order(publishedAt asc)
`);

  const musicaluniverse = await client.fetch(groq`
*[_type == "musicaluniverse" && publishedAt < now()] | order(publishedAt desc)
`);

  const collaborates = await client.fetch(groq`
*[_type == "collaborates" && publishedAt < now()] | order(publishedAt desc)
`);

  const liveconcert = await client.fetch(groq`
*[_type == "liveconcert" && publishedAt < now()] | order(publishedAt desc)
`);

  return {
    props: {
      blogpost,
      latestsongs,
      musicaluniverse,
      liveconcert,
      collaborates,
    },
  };
}
