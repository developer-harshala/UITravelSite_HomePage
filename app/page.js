'use client'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header'
import MainContent from '@/Components/MainContent'
import TravelSites from '@/Components/TravelSites'
import ServiceCategories from '@/Components/ServiceCategories'
import SubscribeToNewsletter from '@/Components/SubscribeToNewsletter/SubscribeToNewsletter'
import TravelPoint from '@/Components/TravelPoint'

const page = () => {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <Header />
        <MainContent />
        <TravelSites />
        <ServiceCategories />
        <TravelPoint />
        <SubscribeToNewsletter />
        <Footer />
      </div>
    </>
  )
}

export default page
