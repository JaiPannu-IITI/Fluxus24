import React from 'react'

import AboutUs from '@/components/AboutUs'
import Ca_responsibilities from '@/components/ca_responsibilities'
import Footer from '../../components/Footer'
import FAQ from '@/components/faq'

const page = () => {
  return (
    <>  
        <AboutUs/>
        <Ca_responsibilities/>
        <FAQ/>
        <Footer/>
    </>
  )
}

export default page
