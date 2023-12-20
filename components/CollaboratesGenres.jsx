import { client } from "@/utils/client";
import imageUrlBuilder from "@sanity/image-url";

export default function CollaboratesGenres({ collaborates }) {
  const { mainImage, Description } = collaborates[0];
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <section
      className="collaborates-wrapper bg-center bg-no-repeat bg-cover lg:pt-[150px] lg:pb-[100px] md:py-[80px] py-[40px] relative"
      id="collaborating"
    >
      <div className="container px-4 mx-auto 2xl:max-w-[1140px]">
        <div className="md:flex">
          <h2 className="md:w-6/12 font-workSans text-[36px] md:mb-[52px] mb-[20px] md:text-[48px] font-extrabold leading-[40px] md:leading-[58px] text-black">
            <span className="text-primary_01">Collaborates</span> Across Genres
          </h2>
          <p className="md:w-6/12 font-openSans text-[16px] opacity-[0.8] leading-[24px] text-black md:mb-[52px] mb-[30px] relative top-[12px]">
            {Description}
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <img
            className="w-full"
            src={urlFor(mainImage?.asset?._ref).url()}
            alt="collaborate"
          />
        </div>
      </div>
    </section>
  );
}
