import { client } from "@/utils/client";
import imageUrlBuilder from "@sanity/image-url";

export default function HeroBannerCard({ item }) {
  const { albumimage, albumlink, title, artist } = item;

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <article className="min-h-[300] item relative z-10 rounded-[12px] bg-white p-[20px] border border-solid border-[rgba(0, 0, 0, 0.20)]">
      <a href={albumlink} target="_blank" rel="noopener noreferrer">
        <div className="item-img relative h-[187px] overflow-hidden rounded-[8px]">
          <img
            src={urlFor(albumimage?.asset?._ref).url()}
            alt={"music-" + title}
            className="object-cover object-top h-full w-full"
          />
          <button
            type="button"
            className="btn-play w-[35px] h-[35px] absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%]"
          >
            <img src="/images/play.png" alt="play-button" />
          </button>
        </div>
        <div className="item-content">
          <h2 className="text-black font-workSans text-[18px] font-medium leading-[24px] mt-[12px]">
            {title}
          </h2>
          <p className="text-black font-openSans text-[16px] leading-[22px] opacity-[0.8]">
            {artist}
          </p>
        </div>
      </a>
    </article>
  );
}
