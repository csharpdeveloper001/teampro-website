import Link from 'next/link'
import React from 'react'
import { SiApollographql } from 'react-icons/si'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { IoMdCall } from 'react-icons/io'
import {BsFillCaretRightFill} from 'react-icons/bs'

const footerLink = [
  {
    name: 'Case Study',
    href: '/case-study'
  },
  {
    name: 'Insights',
    href: '/insights'
  },
  {
    name: 'Newsroom',
    href: '/newsroom'
  },
  {
    name: 'Careers',
    href: '/careers'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Disclaimer',
    href: '/disclaimer'
  },
  {
    name: 'Sitemap',
    href: '/sitemap'
  },
  {
    name: 'Locate Us',
    href: '/global-presence'
  },
]
const footerServices = [
  {
    nav: 'eCommerce development',
    href: '/ecommerce',
  },
  {
    nav: 'Mobile strategy',
    href: '/mobile-application-development',
  },
  {
    nav: 'Fullstack Development',
    href: '/full-stack-development',
  },
  {
    nav: 'Microsoft Solutions',
    href: '/microsoft-enterprise-services',
  },
  {
    nav: 'Cloud Automation',
    href: '/cloud-services',
  },
  {
    nav: 'Enterprice Services',
    href: '/enterprice-solution',
  },
  {
    nav: 'Digital Marketing',
    href: '/digital-marketing',
  },
  {
    nav: 'Web Development',
    href: 'lamp-application-development',
  },
]
const footerIndustries = [
  {
    nav: 'Retails',
    href: '/retail',
  },
  {
    nav: 'Education',
    href: '/education',
  },
  {
    nav: 'Automotive',
    href: '/industries/automotive',
  },
  {
    nav: 'Diamond&Jewelry',
    href: '/industries/diamond',
  },
]
const footerNews = [
  {
    url: 'https://www.brainvire.com/wp/wp-content/uploads/2021/01/New_PR_Thumbnail_Alokozay.jpg',
    cap: 'Mobile App streamlines operational efficiencies for a FMCG Market Leader in the Middle East',
    href: '/mobile-app-streamlines-operational-for-fmcg-brand'
  },
  {
    url: 'https://www.brainvire.com/wp/wp-content/uploads/2021/01/New_PR_Thumbnail_DG-Guitar.jpg',
    cap: 'Native Android eLearning Guitar App Helps Master Guitar Chords',
    href: '/android-elearning-guitar-app'
  }
]
class Footer extends React.Component {
  render() {
    return (
      <footer className='w-full px-8 footer-group'>
        <div className='flex justify-between items-center footer-one'>
          <Link href='/'>
            <a  className='flex flex-row items-center text-white hover:text-blue-500 text-7xl'>
              <SiApollographql className='w-10' />
              <span className='text-3xl mr-1'>Team Pro</span>
            </a>
          </Link>
          <div className='flex justify-between items-center text-xl text-white hover:text-blue-500 cursor-pointer'>
            <BiMessageRoundedDetail />
            <span className='ml-1 text-xl'>info@brainvire.com</span>
          </div>
          <div className='flex justify-between items-center text-xl text-white hover:text-blue-500 cursor-pointer'>
            <IoMdCall />
            <span className='ml-1 text-xl'>+998 (99) 873-48-36</span>
          </div>
          <div className='flex justify-between items-center'>
            <img className='footer-image-one' src='https://www.brainvire.com/wp/wp-content/uploads/2020/09/Top-Digital_Agencies_2020.png' alt='Image Alt' />
            <img className='footer-image-one' src='https://www.brainvire.com/wp/wp-content/uploads/2020/09/Top-Digital_Agencies_2020.png' alt='Image Alt' />
            <img className='footer-image-one' src='https://www.brainvire.com/wp/wp-content/uploads/2020/03/iso-27001.png' alt='Image Alt' />
            <img className='footer-image-one' src='https://www.brainvire.com/wp/wp-content/uploads/2020/03/Goodfirms.png' alt='Image Alt' />
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='w-2/5'>
            <h1 className='text-2xl text-white mb-3'>Our Services</h1>
            <ul className='flex flex-row items-center flex-wrap'>
              {footerServices.map((service, index) => (
                <li key={index} style={{width: '250px', marginRight: '40px'}}>
                  <Link href={service.href}>
                    <a className='flex flex-row items-center text-white mb-2 hover-effect text-xl'>
                      <BsFillCaretRightFill className='text-sm mr-2' />
                      {service.nav}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-3/5 flex justify-between items-center'>
            <div className='w-2/5'>
              <h1 className='text-2xl text-white mb-3'>Industries</h1>
              <ul className='flex flex-col text-xl text-white'>
                {footerIndustries.map((industry, index) => (
                  <li key={index}>
                    <Link href={industry.href}>
                      <a className='flex flex-row items-center text-white mb-2 hover-effect text-xl'>
                        <BsFillCaretRightFill className='text-sm mr-2' />
                        {industry.nav}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-3/5'>
              <h1 className='text-2xl text-white' style={{marginBottom: '35px'}}>Recent News</h1>
              <ul className='flex flex-col text-xl text-white'>
                {footerNews.map((industry, index) => (
                  <li key={index}>
                    <Link href={industry.href}>
                      <a className='flex flex-row items-center text-white mb-2 hover-effect text-xl'>
                        <img style={{width: '85px',height: '54px',marginRight: '20px'}} src={industry.url} alt="Image" />
                        {industry.cap}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div style={{marginBottom: '35px',marginTop: '35px'}} className='flex flex-row justify-center items-center'>
          {footerLink.map((item, index) => (
            <div key={index} className='ml-4'>
              <Link href={item.href}>
                <a className='text-xl text-white hover:no-underline hover-effect'>{item.name}</a>
              </Link>
            </div>
          ))}
        </div>
        <div style={{marginBottom: '0',marginTop: '0'}} className='flex justify-center items-center text-gray-500 text-xl footer-footer'>
          <span>Copyright © 2021 Brainvire Infotech Inc.</span>
        </div>
      </footer>
    )
  }
}

export default Footer;