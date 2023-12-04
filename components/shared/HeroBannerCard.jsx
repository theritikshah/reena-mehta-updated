export default function HeroBannerCard({item}) {
  return (
    <div key={item.id} className='min-h-[300] item relative z-10 rounded-[12px] bg-white p-[20px] border border-solid border-[rgba(0, 0, 0, 0.20)]'>
      <div className='item-img relative h-[187px] overflow-hidden rounded-[8px]'>
        <img src={item.imgUrl} alt={'music-' + item.id } className='object-cover object-top h-full w-full' />
        <button type='button' className='btn-play w-[35px] h-[35px] absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%]'>
          <svg width="35" height="35" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_2_1255)">
            <rect x="0.96875" y="0.96875" width="35.0625" height="35.0625" rx="17.5312" fill="white" fill-opacity="0.01"/>
            <rect x="1.46875" y="1.46875" width="34.0625" height="34.0625" rx="17.0312" stroke="#C25858"/>
            <path d="M24.8953 16.9911C25.233 17.1707 25.5154 17.4387 25.7124 17.7666C25.9093 18.0944 26.0134 18.4696 26.0134 18.8521C26.0134 19.2345 25.9093 19.6097 25.7124 19.9375C25.5154 20.2654 25.233 20.5334 24.8953 20.713L15.8881 25.611C14.4377 26.3998 12.6562 25.3734 12.6562 23.7508V13.954C12.6562 12.33 14.4377 11.3043 15.8881 12.0924L24.8953 16.9911Z" fill="#C25858"/>
            </g>
            <defs>
            <filter id="filter0_b_2_1255" x="-4.03125" y="-4.03125" width="45.0625" height="45.0625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_1255"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2_1255" result="shape"/>
            </filter>
            </defs>
          </svg>
        </button>
      </div>
      <div className='item-content'>
        <h2 className='text-black font-workSans text-[18px] font-medium leading-[24px] mt-[12px]'>{item.title}</h2>
        <p className='text-black font-openSans text-[16px] leading-[22px] opacity-[0.8]'>{item.name}</p>
      </div>
    </div>
  )
}
