import Link from "next/link";
import { Carousel } from "react-bootstrap";

const carousels = [
  {
    src: 'https://images.unsplash.com/photo-1611081979431-38dfd805e733?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Cluth Developer',
    captOne: 'Digital Transformation',
    capTwo: 'Modernize process by Full Stack Development',
    capThree: 'Next generation cross platform application that run without restriction of platform using Full Stack. Contact us today to discuss in details.',
    btnHref: '/full-stack'
  },
  {
    src: 'https://image.shutterstock.com/image-photo/communication-technology-internet-business-global-600w-1421446100.jpg',
    title: 'BlockChain',
    captOne: 'Digital Transformation',
    capTwo: 'Modernize process by Full Stack Development',
    capThree: 'Next generation cross platform application that run without restriction of platform using Full Stack. Contact us today to discuss in details.',
    btnHref: '/full-stack'
  },
  {
    src: 'https://image.shutterstock.com/image-illustration/image-flu-covid19-virus-cell-260nw-1661849266.jpg',
    title: 'Software 4.0',
    captOne: 'Digital Transformation',
    capTwo: 'Modernize process by Full Stack Development',
    capThree: 'Next generation cross platform application that run without restriction of platform using Full Stack. Contact us today to discuss in details.',
    btnHref: '/full-stack'
  },
]
const Carousels = () => {
  return (
    <Carousel>
      {carousels.map((carousel, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={carousel.src}
            alt="First slide"
            style={{width: '100%',height: '90vh'}}
          />
          <Carousel.Caption style={{textAlign:'left'}} className='px-8 carousel-caption-clone'>
            <h1 className='text-4xl media-size-4xl'>{carousel.title}</h1>
            <h2 className='text-6xl media-size-6xl'>{carousel.captOne}</h2>
            <h3 className='text-3xl media-size-3xl'>{carousel.capTwo}</h3>
            <p className='text-xl media-size-xl'>{carousel.capThree}</p>
            <Link href={carousel.btnHref}>
              <a style={{padding: '10px 20px'}} className='text-sm btn-carousel-href button-all text-white hover:no-underline'>View More</a>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Carousels;