
const Partners = () => {    
const techPartnersInfos = [
  {
      img: 'https://www.brainvire.com/wp/wp-content/uploads/2020/10/AWS-Partner.png',
      alt: 'AWS'
  },
  {
      img: 'https://www.brainvire.com/wp/wp-content/uploads/2020/10/AutomationAnywhere-Partner.png',
      alt: 'AutomationAnywhere'
  },
  {
      img: 'https://www.brainvire.com/wp/wp-content/uploads/2020/12/SAP-Gold-Partner.png',
      alt: 'SAP-Gold-Partners'
  },
  {
      img: 'https://www.brainvire.com/wp/wp-content/uploads/2020/12/Odoo-Gold-Partner.png',
      alt: 'Odoo-Gold-Partner'
  },
  {
      img: 'https://www.brainvire.com/wp/wp-content/uploads/2020/10/Magento-Partner.png',
      alt: 'Magento-Partner'
  },
  {
      img: 'https://www.brainvire.com/wp/wp-content/uploads/2020/10/Microsoft-Partner.png',
      alt: 'Microsoft-Partner'
  }
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
return (
  <>
    <div className='px-8'>
        <h1 className='text-5xl my-10'>Tech Partners</h1>
    </div>
    <ul className='bg-gray-200 flex justify-center items-center px-8 h-96'>
    {
      techPartnersInfos.map((techPartnersInfo) => (
        <li className='list-none my-5 mx-4 w-44 h-40 bg-white p-4 flex rounded-md justify-center items-center shadow-2xl md:w-32 lg:w-48'>
        <img src={techPartnersInfo.img} />
        </li>
      ))}
    </ul>
  </>
  )
}

export default Partners;