
export default function Aesthetic() {
  return (
    <section className="aesthetic-world-wrapper white-shade-bg bg-no-repeat bg-cover md:py-[80px] py-[50px] relative" id="gallery">
      <div className="container px-4 mx-auto 2xl:max-w-[1140px]">
        <h2 className='font-workSans text-[36px] md:text-[48px] leading-[40px] md:leading-[58px] font-bold text-center mb-[30px] md:mb-[50px]'>The <span className="text-primary_01">Aesthetic World</span> of <br /> Reena Mehta</h2>

        <div className="md:gap-[24px] gap-[20px] md:columns-3">
          <div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <img className="w-full lg:h-[398px] md:h-[268px] object-cover object-top" src='/images/aesthetic/image01.png' alt="image01" />
            </div>
            <div className='rounded-2xl overflow-hidden md:mb-[0px] mb-[20px]'>
              <img className="w-full lg:h-[398px] md:h-[268px] object-cover object-top" src='/images/aesthetic/image02.png' alt="image02" />
            </div>
          </div>
          <div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <img className="w-full lg:h-[186px] md:h-[122px] object-cover object-top" src='/images/aesthetic/image03.png' alt="image03" />
            </div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <img className="w-full lg:h-[186px] md:h-[122px] object-cover object-top" src='/images/aesthetic/image04.png' alt="image04" />
            </div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <img className="w-full lg:h-[186px] md:h-[122px] object-cover object-top" src='/images/aesthetic/image05.png' alt="image05" />
            </div>
            <div className='rounded-2xl overflow-hidden md:mb-[0px] mb-[20px]'>
              <img className="w-full lg:h-[186px] md:h-[122px] object-cover object-top" src='/images/aesthetic/image06.png' alt="image06" />
            </div>
          </div>
          <div>
            <div className='rounded-2xl overflow-hidden md:mb-[25px] mb-[20px]'>
              <img className="w-full lg:h-[398px] md:h-[268px] object-cover object-top" src='/images/aesthetic/image07.png' alt="image07" />
            </div>
            <div className='rounded-2xl overflow-hidden'>
              <img className="w-full lg:h-[398px] md:h-[268px] object-cover object-top" src='/images/aesthetic/image08.png' alt="image08" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}