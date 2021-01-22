import Head from 'next/head'
import UILayout from '../components/layouts/'
import Carousels from '../components/carousel'
import Header from '../components/header'
import Footer from '../components/footer'
import IdeaToLife from '../components/ideasToLife'
import OurClinetSimply from '../components/ourClients'
import FirmReviews from '../components/firmreviews'
import UpComingEvent from '../components/upComingEvent'
import Partners from '../components/parthners'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Team Pro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Carousels />
      <IdeaToLife />
      <OurClinetSimply />
      <FirmReviews />
      <UpComingEvent />
      <Partners/>
      <Footer/>
    </div>
  )
}
