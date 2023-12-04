import Image from "next/image";
import LaptopImg from '../../assets/images/laptop.svg';
import Iframe from 'react-iframe';

export default function Concert() {
  return (
    <section className="concert-wrapper md:py-[80px] py-[30px] relative">
      <div className="container px-4 mx-auto 2xl:max-w-[1140px] relative z-10">
        <h2 className='font-workSans text-[36px] md:text-[48px] leading-[40px] md:leading-[58px] font-bold text-center mb-[50px]'>Reena mehta - Live Concert <br className="md:block hidden"/> <span className="text-primary_01">Chicago 2019</span></h2>
        <div className="concert-video xl:w-[1015px] lg:w-[980px] md:w-[724px] w-[330px] relative m-auto">
          <Image src={LaptopImg} alt="laptop" />
          <div className="video-group absolute top-0 left-0 w-full h-full">
            <Iframe className="w-full h-full" src="https://www.youtube.com/embed/njX2bu-_Vw4?si=uFmGLP0Cfj3PqrT8" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
          </div>
        </div>
      </div>
    </section>
  )
}