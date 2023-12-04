import Image from 'next/image';
import ProfileImg from '../../assets/images/reena_mehta.png';
import MusicImg01 from '../../assets/images/music-01.png';
import MusicImg02 from '../../assets/images/music-02.png';
import MusicImg03 from '../../assets/images/music-03.png';
import MusicImg04 from '../../assets/images/music-04.png';
import MusicImg05 from '../../assets/images/music-05.png';
import Slider from "react-slick";
import { HeroBannerJSON } from '../shared/Helper';
import HeroBannerCard from '../shared/HeroBannerCard';

export default function HeroBanner() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    centerPadding: "50px",
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3.5,
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          infinite: false,
          slidesToShow: 1.2,
          centerMode: false,
          centerPadding: "10px",
        }
      },
    ]
  };

  return (
    <>
      <div className='banner-section min-h-[732px] bg-cover pt-[130px] pb-[78px]' id="home">
        <div className="container mx-auto px-4 2xl:max-w-[1140px]">
          <div className='banner-wrapper relative md:w-[726px] '>
            <div className='banner-content max-w-[536px] relative z-10 mt-[20px]'>
              <h1 className='font-workSans text-[52px] md:text-[82px] mb-[16px] font-extrabold leading-[52px] md:leading-[82px] text-black'>Hello I Am <span className="text-primary_01">Reena Mehta</span></h1>
              <p className='font-openSans text-[20px] opacity-[0.8] leading-[24px] text-black'>When words leave off, music begins</p>
            </div>
          </div>
        </div>
        <div className='relative slider-profile max-w-[1530px] mr-auto'>
          <div className='profile z-10'>
            <Image src={ProfileImg} alt='' />
          </div>
          <div className='slider-wrapper mt-[52px]'>
            <Slider {...settings}>
              {
                HeroBannerJSON.map((data, key) => {
                  return (
                    <HeroBannerCard item={data} key={key}/>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 2xl:max-w-[1140px]'>
        <div className='music-logo-section m-auto relative z-10 mt-[-30px] md:mb-[90px] mb-[60px]'>
          <div className='card-wrapper justify-center flex rounded-[16px] bg-white px-[25px] md:py-[34px] py-[25px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.12)]'>
            <ul className='music-brand-list flex flex-wrap items-center mx-[-20px]'>
              <li className='px-[20px] mb-[10px] md:mb-[0px]'>
                <Image alt="zee-music" src={MusicImg01} />
              </li>
              <li className='px-[20px] mb-[10px] md:mb-[0px]'>
                <Image alt="music" src={MusicImg02} />
              </li>
              <li className='px-[20px] mb-[10px] md:mb-[0px]'>
                <Image alt="t-series" src={MusicImg03} />
              </li>
              <li className='px-[20px] mb-[10px] md:mb-[0px]'>
                <Image alt="eros_now" src={MusicImg04} />
              </li>
              <li className='px-[20px]'>
                <Image alt="hungama_music" src={MusicImg05} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}