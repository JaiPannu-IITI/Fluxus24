import React from 'react'

import AboutUs from '@/components/AboutUs'
import Ca_responsibilities from '@/components/ca_responsibilities'
import Footer from '../../components/Footer'
import FAQ from '@/components/faq'
import WhyCA from '@/components/Incentives&whyCA/WhyCA'
import CampusAmbassadorIncentives from '@/components/Incentives&whyCA/caincentives'

const page = () => {
  return (
    <>  
        <AboutUs/>
        <WhyCA/>
        <CampusAmbassadorIncentives/>
        <Ca_responsibilities/>
        <FAQ/>
        <Footer/>
    </>
  )
}

export default page
