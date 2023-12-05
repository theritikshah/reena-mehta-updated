import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../utils/client";

export default function NewsCard({ news }) {
  const { mainImage, body, tag, title } = news;

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <article>
      <div className="rounded-[20px] overflow-hidden relative">
        <img
          className="w-full"
          src={urlFor(mainImage?.asset?._ref).url()}
          alt={"news_" + news.id}
        />
        <div className="text-center absolute p-[20px] w-full flex bottom-[0px] justify-center items-center flex-col">
          <h2 className="font-workSans text-[24px] leading-[32px] font-bold text-white">
            {title}
          </h2>
          <p className="font-openSans text-[16px] opacity-[0.8] leading-[22px] text-white">
            {tag}
          </p>
        </div>
      </div>
      {body[0]?.children.map((obj) => (
        <p className="font-openSans text-[16px] opacity-[0.8] leading-[24px] text-black text-center m-[20px]">
          {obj.text}
        </p>
      ))}
    </article>
  );
}
