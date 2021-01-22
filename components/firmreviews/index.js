import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link'
import ReactStars from "react-rating-stars-component";

const firmreview = [
  {
    url: 'https://www.brainvire.com/wp/wp-content/uploads/2020/05/Michelle-Marcial.png',
    caption: 'In their ongoing testing of the completed work, the partner has noticed significant improvements in the quality of code and usability of the overall solution. The product no longer crashes and contains fewer bugs. The team’s transparency and commitment to set timelines added value to the engagemen',
    name: 'Michelle Marcial',
    desigantion: 'CEO, Food Waste Prevention Startup',
    starNum: 152,
    monthh: 10,
    rating: 5
  },
  {
    url: 'https://www.brainvire.com/wp/wp-content/uploads/2020/05/Andy-Ginjupalli.png',
    caption: 'The capabilities enabled by the design of the new website have saved the client an incredible amount of money and time, more than paying for the cost of the project itself and pleasing company stakeholders. The Brainvire Infotech team is creative, responsive, and flexible to changing requirements.',
    name: 'Andy Ginjupalli',
    desigantion: 'President, Bay Alarm Medical',
    starNum: 152,
    monthh: 10,
    rating: 5
  },
  {
    url: 'https://www.brainvire.com/wp/wp-content/uploads/2020/05/Jamal-Al-Masri.png',
    caption: 'The solutions provided by Brainvire Infotech have satisfied all project requirements, successfully modernizing the interface and allowing the client to continue to expand their business. Their team is hardworking and creative, adapting flexibly to changing requirements throughout the project.',
    name: 'Jamal Al Masri',
    desigantion: 'General Manager, Blink',
    starNum: 152,
    monthh: 10,
    rating: 5
  }
]

const FirmReviews = () => {
  const ratingChanged = (newRating) => {
  console.log(newRating);
  };
  return (
    <div className='px-8 py-14'>
      <div className='flex justify-between items-center'>
        <h1 className='text-6xl'>Clutch & Good <br/> Firm Reviews</h1>
        <div className='flex justify-between items-center'>
          <div className='flex flex-row mr-4'>
            <img src='https://www.brainvire.com/assets/images/export-clutch.png' style={{height: '60px'}} alt='Clutch Good Firm Reviews' />
            <div className='flex flex-col mt-2 text-2xl font-medium'>
              <div className='flex flex-row'>
                <p>4.8</p>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#D83838"
                />
              </div>
              <span>152 Reviews</span>
            </div>
          </div>
          <span className='ml-10 text-xl'>Outperforming competitors by highest number of <br/> reviews shows success ratio of Brainvire</span>
        </div>
      </div>
      <div className='flex flex-row items-center w-full'>
        <div className='flex justify-between items-center w-full text-gray-600'>
            {firmreview.map(item => (
              <Card className='card-style-design'>
                <Card.Text>{item.caption}</Card.Text>
                <div className='flex flex-row items-center mt-2 mb-1'>
                  <span className='text-xl mr-1'>{item.rating}</span>
                  <ReactStars
                    value={item.rating}
                    count={5}
                    onChange={(e)=>setRating({rating: e.target.value})}
                    size={24}
                    activeColor="#D83838"
                  />
                </div>
                <span className='mb-2'>{item.monthh} months ago</span>
                <Card.Body>
                  <div className='flex flex-row items-center'>
                    <Card.Img className='rounded-full w-20 h-20 mr-4' src={item.url}/>
                    <div className='flex flex-col'>
                      <Card.Title className='text-2xl'>{item.name}</Card.Title>
                      <Card.Text>{item.desigantion}</Card.Text>
                    </div>
                  </div>
                  <Link href='https://clutch.co/profile/brainvire-infotech'>
                    <a className='mt-4 hover:no-underline hover:text-blue-500 text-xl'>{item.starNum} Reviews</a>
                  </Link>
                </Card.Body>
                <span className='flex flex-row'>
                  <p className='mr-2 text-xl'>Powered by Clutch</p>
                  <img src='https://www.brainvire.com/assets/images/export-clutch.png' style={{width: '30px',height: '30px'}} alt='Clutch Good Firm Reviews' />
                </span> 
              </Card>
            ))}
        </div>
        <div className=''></div>
      </div>
    </div>
  )
}

export default FirmReviews;