
export default function NewsCard({news}) {
  return (
    <div className='news-item' key={news.id}>
      <div className='rounded-[20px] overflow-hidden relative'>
        <img className="w-full" src={news.imgUrl} alt={'news_' + news.id } />
        <div className='text-center absolute p-[20px] w-full flex bottom-[0px] justify-center items-center flex-col'>
          <h2 className='font-workSans text-[24px] leading-[32px] font-bold text-white'>{news.name}</h2>
          <p className="font-openSans text-[16px] opacity-[0.8] leading-[22px] text-white">{news.tag}</p>
        </div>
      </div>
      <p className="font-openSans text-[16px] opacity-[0.8] leading-[24px] text-black text-center m-[20px]">{news.description}</p>
    </div>
  )
}