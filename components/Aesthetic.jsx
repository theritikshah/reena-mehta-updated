import Image from 'next/image';
import Image01 from '../../assets/images/aesthetic/image01.png';
import Image02 from '../../assets/images/aesthetic/image02.png';
import Image03 from '../../assets/images/aesthetic/image03.png';
import Image04 from '../../assets/images/aesthetic/image04.png';
import Image05 from '../../assets/images/aesthetic/image05.png';
import Image06 from '../../assets/images/aesthetic/image06.png';
import Image07 from '../../assets/images/aesthetic/image07.png';
import Image08 from '../../assets/images/aesthetic/image08.png';

export default function Aesthetic() {
  return (
    <section className="aesthetic-world-wrapper white-shade-bg bg-no-repeat bg-cover md:py-[80px] py-[50px] relative" id="gallery">
      <div className="container px-4 mx-auto 2xl:max-w-[1140px]">
        <h2 className='font-workSans text-[36px] md:text-[48px] leading-[40px] md:leading-[58px] font-bold text-center mb-[30px] md:mb-[50px]'>The <span className="text-primary_01">Aesthetic World</span> of <br /> Reena Mehta</h2>

        <div className="md:gap-[24px] gap-[20px] md:columns-3">
          <div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <Image className="w-full lg:h-[398px] md:h-[268px] object-cover object-top" src={Image01} alt="image01" />
            </div>
            <div className='rounded-2xl overflow-hidden md:mb-[0px] mb-[20px]'>
              <Image className="w-full lg:h-[398px] md:h-[268px] object-cover object-top" src={Image02} alt="image02" />
            </div>
          </div>
          <div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <Image className="w-full lg:h-[186px] md:h-[122px] object-cover object-top" src={Image03} alt="image03" />
            </div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <Image className="w-full lg:h-[186px] md:h-[122px] object-cover object-top" src={Image04} alt="image04" />
            </div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <Image className="w-full lg:h-[186px] md:h-[122px] object-cover object-top" src={Image05} alt="image05" />
            </div>
            <div className='rounded-2xl overflow-hidden md:mb-[0px] mb-[20px]'>
              <Image className="w-full lg:h-[186px] md:h-[122px] object-cover object-top" src={Image06} alt="image06" />
            </div>
          </div>
          <div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <Image className="w-full lg:h-[398px] md:h-[268px] object-cover object-top" src={Image07} alt="image07" />
            </div>
            <div className='rounded-2xl overflow-hidden'>
              <Image className="w-full lg:h-[398px] md:h-[268px] object-cover object-top" src={Image08} alt="image08" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}