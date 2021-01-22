import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import { FaPlay, FaTimes,FaQuoteLeft } from 'react-icons/fa';

const cardcarousel = [
  {
    title: 'Chad Gundry',
    caption: 'The completed application has drawn positive internal reviews ahead of its official launch. Brainvire Infotech features a dedicated and flexible team ',
    text: 'CEO - Capchur'
  },
  {
    title: 'Chad Gundry',
    caption: 'The completed application has drawn positive internal reviews ahead of its official launch. Brainvire Infotech features a dedicated and flexible team ',
    text: 'CEO - Capchur'
  },
  {
    title: 'Chad Gundry',
    caption: 'The completed application has drawn positive internal reviews ahead of its official launch. Brainvire Infotech features a dedicated and flexible team ',
    text: 'CEO - Capchur'
  },
]

const OurClinetSimply = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <div className='px-8 py-16'>
      <h1 className='text-6xl font-semibold py-8'>Our Clients Simply Love Our Work</h1>
      <h2 style={{ margin: '30px 0 90px 0'}} className='text-4xl'>Rated 4.8/5.0 By 500+ Clients For IOS And Android Development Services On Various Platforms</h2>
      <div className='flex justify-between items-center px-10'>
        <div className='flex flex-row bg-blue-500'>
          <div style={{padding: '85px 10px 10px 40px'}} className='flex flex-col'>
            <h1 className='text-3xl font-semibold text-white'>#Clientspeak</h1>
            <span className='text-white text-xl py-5'>Learn more about our processes from clients</span>
            <button onClick={()=>{setToggle(!toggle)}} style={{padding: '10px 20px',width: '130px'}} className='rounded flex flex-row items-center bg-white text-sm hover:text-blue-500 hover:bg-blue-600 text-gray-400'>
              <p className='mr-1'>Play Video</p>
              <FaPlay className='text-xs' />
            </button>
          </div>
          <div className='mt-14'>
            <img src="https://www.brainvire.com/wp/wp-content/uploads/2020/09/client-1.png" alt='Png Image' />
          </div>
        </div>
          <Carousel className='w-3/5 flex items-center justify-center'>
            {cardcarousel.map(item => (
              <Carousel.Item style={{width: '100%', height: '350px'}}>
                <FaQuoteLeft className='d-block w-100 text-5xl text-blue-500 mb-8' />
                <Carousel.Caption className='text-center text-gray-600 mt-6'>
                  <h3 className='text-xl'>{item.caption}</h3>
                  <p style={{ margin: '45px 0 15px'}} className='font-semibold text-2xl'>{item.title}</p>
                  <p className='text-xl text-blue-500'>{item.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
      </div>
      <div className={!toggle?'youtube-video-embed':'youtube-video-embed active'}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6hmS9Ho85eg" frameborder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <FaTimes onClick={()=>setToggle(!toggle)} className='text-2xl cursor-pointer text-white hover:text-blue-500 youtube-video-close'/>
      </div>
    </div>
  )
}

export default OurClinetSimply;