export default function MusicalUniverse() {
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
              src='/images/musical-universe/music01.png'
              alt="music01"
            />
          </div>
          <div className="md:gap-[24px] gap-[20px] columns-2">
            <div className="rounded-2xl overflow-hidden md:mb-[24px] mb-[20px]">
              <img
                className="w-full lg:h-[250px] md:h-[156px] object-cover object-top"
                src='/images/musical-universe/music02.png'
                alt="music02"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                className="w-full lg:h-[250px] md:h-[156px] object-cover object-top"
                src='/images/musical-universe/music03.png'
                alt="music03"
              />
            </div>
            <div className="rounded-2xl overflow-hidden md:mb-[24px] mb-[20px]">
              <img
                className="w-full lg:h-[250px] md:h-[156px] object-cover object-top"
                src='/images/musical-universe/music04.png'
                alt="music04"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                className="w-full lg:h-[250px] md:h-[156px] object-cover object-top"
                src='/images/musical-universe/music02.png'
                alt="music05"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
