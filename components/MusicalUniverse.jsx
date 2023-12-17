import { client } from "@/utils/client";
import imageUrlBuilder from "@sanity/image-url";

export default function MusicalUniverse({ musicaluniverse }) {
  const first = musicaluniverse[0];
  const restelement = musicaluniverse.slice(1, 5);

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <section
      className="musical-universe-wrapper white-shade-bg bg-no-repeat bg-cover md:pt-[120px] md:pb-[100px] py-[60px] relative"
      id="songs"
    >
      <div className="container px-4 mx-auto 2xl:max-w-[1140px]">
        <h2 className="font-workSans text-[36px] leading-[40px] md:leading-[58px] md:text-[48px] font-bold text-center mb-[30px] md:mb-[50px]">
          Musical <span className="text-primary_01">Universe</span>
        </h2>
        <div className="md:gap-[24px] gap-[20px] md:columns-2">
          <div className="rounded-2xl overflow-hidden md:mb-[0px] mb-[20px]">
            <img
              className="w-full lg:h-[528px] md:h-[336px] object-cover object-top"
              src={urlFor(first.albumimage?.asset?._ref).url()}
              alt="music01"
            />
          </div>
          <div className="md:gap-[24px] gap-[20px] columns-2">
            {restelement &&
              restelement.map((obj, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden md:mb-[24px] mb-[20px]"
                >
                  <img
                    className="w-full lg:h-[250px] md:h-[156px] object-cover object-top"
                    src={urlFor(obj.albumimage?.asset?._ref).url()}
                    alt={obj.title}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
