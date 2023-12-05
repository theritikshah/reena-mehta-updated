import Slider from "react-slick";
import { LatestNewsJSON } from "./shared/Helper";
import NewsCard from "./shared/NewsCard";

export default function LatestNews({ blogpost }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
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
    <section className="latest-news-wrapper white-shade-bg bg-no-repeat bg-cover md:py-[80px] py-[50px] relative">
      <div className="container px-4 mx-auto 2xl:max-w-[1140px]">
        <h2 className="font-workSans text-[36px] md:text-[48px] leading-[40px] md:leading-[58px] font-bold text-center mb-[30px] md:mb-[50px]">
          Latest <span className="text-primary_01">News</span>
        </h2>

        <div className="slider-wrapper md:mx-[0px] mx-[-15px]">
          <Slider {...settings}>
            {blogpost &&
              blogpost.length > 0 &&
              blogpost?.map((news, index) => (
                <NewsCard news={news} key={index} />
              ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
