const UpComingEvent = () => {
    const upComingEventDatas = [
        {
            timeInfo: 'Thursday, December 17 to Thursday December 17, 2020 1:30 PM CST',
            img: 'https://www.brainvire.com/wp/wp-content/uploads/2020/12/BV-Logo-Event.png',
            alt: 'Logo',
            title: 'Virtual',
            content: 'Join us to learn how our customers get $20 on every $1 spent on their Mobile Applications using consumer data. In this Webinar you will learn everything in between How to Collect Data to Taking Action with Data.',
            watchBtn: 'Watch Video',
            watchBtn2: ''
        },
        {
            timeInfo: 'Thursday, December 17 to Thursday December 17, 2020 1:30 PM CST',
            img: 'https://www.brainvire.com/wp/wp-content/uploads/2020/12/BV-Logo-Event.png',
            alt: 'Logo',
            title: 'Virtual',
            content: 'Join us to learn how our customers get $20 on every $1 spent on their Mobile Applications using consumer data. In this Webinar you will learn everything in between How to Collect Data to Taking Action with Data.',
            watchBtn: 'Watch Session One',
            watchBtn2: 'Watch Session Two'
        },
        {
            timeInfo: 'Thursday, December 17 to Thursday December 17, 2020 1:30 PM CST',
            img: 'https://www.brainvire.com/wp/wp-content/uploads/2020/12/BV-Logo-Event.png',
            alt: 'Logo',
            title: 'Virtual',
            content: 'Join us to learn how our customers get $20 on every $1 spent on their Mobile Applications using consumer data. In this Webinar you will learn everything in between How to Collect Data to Taking Action with Data.',
            watchBtn: '',
            watchBtn2: ''
        },
      
    ]
  return (
    <div className='px-8'>
 <h1 className='text-6xl my-4'>Upcoming Events</h1>
<div className='flex flex-wrap justify-evenly'>
   
    {upComingEventDatas.map((upComingEventData, index) => (
 <li key={index} className='list-none bg-gray-100 p-8 flex-col w-full md:w-1/3 lg:1/4 xl:w-1/4  m-4  border-2 border-black'>
 <p>{upComingEventData.timeInfo}</p>
 <img className='py-8' src={upComingEventData.img} alt={upComingEventData.alt}/>
 <h2 className='font-extrabold'>{upComingEventData.title}</h2>
 <p className='py-4'>{upComingEventData.content}</p>
 <div className='flex justify-between'>
 {upComingEventData.watchBtn ? 
 <button className='w-2/5 text-sm py-2 px-2 text-center mt-12 bg-blue-600 text-white cursor-pointer rounded-lg'>{upComingEventData.watchBtn}</button>
  : null}
 {upComingEventData.watchBtn2 ? 
 <button className='w-2/5 text-sm py-2 px-2 text-center mt-12 bg-blue-600 text-white cursor-pointer rounded-lg'>{upComingEventData.watchBtn2}</button>
  : null}
  </div>
 </li>
    ))}
   
</div>


        </div>
    )
}

export default UpComingEvent;