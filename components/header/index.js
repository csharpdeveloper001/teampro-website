import {React, useState} from 'react'
import Link from 'next/link'
import { SiApollographql } from 'react-icons/si'
import { BiMessageRoundedDetail,BiSearch } from 'react-icons/bi'
import { IoMdCall } from 'react-icons/io'
import { AiFillCaretDown } from 'react-icons/ai'
import { IoDocumentTextOutline } from 'react-icons/io5'

const navbarOne = [
  {
    name: 'Insights',
    href: '/insights'
  },
  {
    name: 'Newsroom',
    href: '/newsroom'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Careers',
    href: '/careers'
  },
  {
    name: 'Locate Us',
    href: '/global-presence'
  },
]
const navabrTwo = [
  {
    name: 'Services',
    href: '',
    information: [
      {
        head: 'ECOMMERCE',
        info: [
          {
            tit: 'Magento Development'
          },
          {
            tit: 'Magento 2 Migration'
          },
          {
            tit: 'Odoo Erp'
          },
          {
            tit: 'Mobile Commerce'
          },
          {
            tit: 'CRM for Commerce'
          },
        ]
      },
      {
        head: 'Lamp Technology',
        info: [
          {
            tit: 'Php development'
          },
          {
            tit: 'Laravel development'
          },
          {
            tit: 'WordPress Development'
          },
          {
            tit: 'Symfony development'
          },
          {
            tit: 'Progressive Web App'
          },
        ]
      },
      {
        head: 'Mobile',
        info: [
          {
            tit: 'IPhone App Develoopment'
          },
          {
            tit: 'Android App Development'
          },
          {
            tit: 'Hybrid App Development'
          },
          {
            tit: 'Ionic Development'
          },
          {
            tit: 'Xamarin App Development'
          }
        ]
      },
      {
        head: 'Node.js & MongoDb',
        info: [
          {
            tit: 'Full Stack Development'
          },
          {
            tit: 'Mern Stack'
          },
          {
            tit: 'ReactJS'
          },
          {
            tit: 'Node.JS Development'
          },
          {
            tit: 'React Native Development'
          }
        ]
      },
      {
        head: 'MICROSOFT',
        info: [
          {
            tit: 'ASP.NET Development'
          },
          {
            tit: '.NET Core Development'
          },
          {
            tit: 'SharePoint Development'
          },
          {
            tit: 'PowerBI Development'
          },
          {
            tit: 'PowerApps Development'
          }
        ]
      },
      {
        head: 'CLOUD SERVICES',
        info: [
          {
            tit: 'DevOps'
          },
          {
            tit: 'Amazon Web Services'
          },
          {
            tit: 'Azure Cloud Services'
          },
          {
            tit: 'Google App Engine Services'
          },
          {
            tit: 'office 365 Services'
          }
        ]
      },
      {
        head: 'ENTERPRISE SERVICES',
        info: [
          {
            tit: 'Augmented Reality'
          },
          {
            tit: 'CRM'
          },
          {
            tit: 'Enterprise Mobility Services'
          },
          {
            tit: 'Blockchain Services'
          },
          {
            tit: 'Business Intelligence'
          }
        ]
      },
      {
        head: 'Digital Marketing',
        info: [
          {
            tit: 'Search Engine Optimization'
          },
          {
            tit: 'Paid Advertising'
          },
          {
            tit: 'Social Media Marketing'
          },
          {
            tit: 'SEO eCommerce'
          },
          {
            tit: 'Content Marketing'
          }
        ]
      }
    ]
  },
  {
    name: 'Industries',
    href: ''
  },
  {
    name: 'Products',
    href: '',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
  {
    name: 'Case Study',
    href: '/case-study',
  },
  {
    name: 'Company',
    href: '',
  },
]

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [ind, setInd] = useState(null);
  const changeBackground = () => {
    if (window.scrollY <= 100) {
      setScroll(true);
    }
    else {
      setScroll(false);
    }
  }
  // console.log(window.scrollY);
  return (
    <>
      <div className='header-top top-0 left-0 w-full'>
        <div className='w-full px-8'> 
          <div className='flex justify-between items-center'>
            <div className='header-left flex justify-between items-center'>
              <div className='flex justify-between items-center text-xl text-gray-900 hover:text-blue-500 cursor-pointer'>
                <BiMessageRoundedDetail />
                <span className='ml-1 text-sm'>info@brainvire.com</span>
              </div>
              <div className='flex justify-between items-center text-xl text-gray-900 hover:text-blue-500 cursor-pointer'>
                <IoMdCall />
                <span className='ml-1 text-sm'>+998 (99) 873-48-36</span>
              </div>
            </div>
            <div className='header-right'>
              <ul className='list-unstyled  flex justify-between items-center w-full'>
                {navbarOne.map((item, index) => (
                  <li key={index} className='ml-9'>
                    <Link href={item.href}>
                      <a className='text-sm text-gray-900 hover:no-underline hover:text-blue-500'>
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full' className={scroll?'header-scroll-main':'header-main'}>
        <div className='px-8 w-full'>
          <div className='header-main-navbar'>
            <Link href='/'>
              <a  className='flex flex-row items-center text-gray-900 hover:text-blue-500 text-7xl'>
                <SiApollographql className='w-10' />
                <span className='text-3xl mr-1'>Team Pro</span>
              </a>
            </Link>
            <div className='flex justify-between items-center'>
              <ul className='flex justify-between items-center'>
                {navabrTwo.map((item, index) => (
                  <li key={index} onMouseEnter={()=>setInd({ind: index})} className='ml-10'>
                    {item.href.length >= 1 ?
                      <a className='text-sm cursor-pointer flex justify-between items-center text-gray-900 hover:text-blue-500'>
                        {item.name}
                      </a>: <a className='text-sm cursor-pointer flex justify-between items-center text-gray-900 hover:text-blue-500'>
                        {item.name}
                        <AiFillCaretDown className='text-xs ml-1' />
                      </a>}
                  </li>
                ))}
              </ul>
              <div className='button-all header-button'>
                <Link href='/request-quote'>
                  <a className='text-white'>Request A Quote</a>
                </Link>
              </div>
              <div className='header-search'>
                <BiSearch className='text-2xl' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full-section'>
        <section className='w-full px-8'>
          {/* <div className='flex flex-row flex-wrap items-stretch content-start'>
            {navabrTwo.map(items => (
              <div className='flex flex-col' key={ind}>
                <h3>{items.information.head}</h3>
                <ul className='flex flex-col'>
                  {items.information.info.map((item, index) => (
                    <li key={index}>
                      <Link href='/'>
                        <a className='text-gray-500 hover:text-blue-500'>
                          {item.tit}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
          <div className='section-bottom hidden'>
            <Link href='/'>
              <a className=' flex justify-between rounded-full items-center hover:no-underline text-sm text-gray-900 hover:text-blue-500 cursor-pointer'>
                <IoMdCall className='rounded-full-s text-xs mr-3' />
                <div className='flex flex-col text-sm'>
                  <span>CALL US</span>
                  <span>+998 (99) 873-48-36</span>
                </div>
              </a>
            </Link>
            <Link href='/'>
              <a className='flex justify-between rounded-full items-center hover:no-underline text-sm text-gray-900 hover:text-blue-500 cursor-pointer'>
                <BiMessageRoundedDetail className='rounded-full-s text-xs mr-3' />
                <div className='flex flex-col text-sm'>
                  <span>EMAIL US</span>
                  <span>info@brainvire.com</span>
                </div>
              </a>
            </Link>
            <Link href='/'>
              <a className=' flex justify-between rounded-full items-center hover:no-underline text-sm text-gray-900 hover:text-blue-500 cursor-pointer'>
                <IoDocumentTextOutline className='rounded-full-s text-xs mr-3' />
                <span className='text-sm'>GET A QUOTE</span>
              </a>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default Header;