export default function HeroBannerCard({ item }) {
  const { albumlink, title, artist } = item;

  function extractVideoID(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  const videoId = extractVideoID(albumlink);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return (
    <article className="min-h-[260px] item relative z-10 rounded-[12px] bg-white p-[20px] border border-solid border-[rgba(0, 0, 0, 0.20)]">
      <a href={albumlink} target="_blank" rel="noopener noreferrer">
        <div className="item-img relative h-[187px] overflow-hidden rounded-[8px]">
          <img src={thumbnailUrl} alt={"music-" + title} />
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
