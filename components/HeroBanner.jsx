import Slider from "react-slick";
import HeroBannerCard from "./shared/HeroBannerCard";

export default function HeroBanner({ latestsongs }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerPadding: "50px",
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          infinite: false,
          slidesToShow: 1.2,
          centerMode: false,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <>
      <div
        className="banner-section min-h-[732px] bg-cover pt-[210px] pb-[78px]"
        id="home"
      >
        <div className="container mx-auto px-4 2xl:max-w-[1140px] relative">
          <div className="banner-wrapper relative md:w-[726px] ">
            <div className="banner-content max-w-[536px] relative z-10 mt-[20px]">
              <h1 className="font-workSans text-[52px] md:text-[82px] mb-[16px] font-extrabold leading-[52px] md:leading-[82px] text-black">
                <span className="text-primary_01">Reena Mehta</span>
              </h1>
            </div>
          </div>
          <div className="banner-profile z-10 absolute right-0">
            <img src="/images/reena_mehta.png" alt="" />
          </div>
        </div>
        <div className="relative slider-profile max-w-[1530px]">
          <div className="slider-wrapper mt-[52px]">
            <Slider {...settings}>
              {latestsongs &&
                latestsongs.length > 0 &&
                latestsongs?.map((data, index) => {
                  return <HeroBannerCard item={data} key={index} />;
                })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 2xl:max-w-[1140px]">
        <div className="music-logo-section m-auto relative z-10 mt-[-30px] md:mb-[90px] mb-[60px]">
          <div className="card-wrapper justify-center flex rounded-[16px] bg-white px-[25px] md:py-[34px] py-[25px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.12)]">
            <ul className="music-brand-list flex flex-wrap items-center mx-[-20px]">
              <li className="px-[20px] mb-[10px] md:mb-[0px]">
                <img alt="zee-music" src="/images/music-01.png" />
              </li>
              <li className="px-[20px] mb-[10px] md:mb-[0px]">
                <img alt="music" src="/images/music-02.png" />
              </li>
              <li className="px-[20px] mb-[10px] md:mb-[0px]">
                <img alt="t-series" src="/images/music-03.png" />
              </li>
              <li className="px-[20px] mb-[10px] md:mb-[0px]">
                <img alt="eros_now" src="/images/music-04.png" />
              </li>
              <li className="px-[20px]">
                <img alt="hungama_music" src="/images/music-05.png" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
