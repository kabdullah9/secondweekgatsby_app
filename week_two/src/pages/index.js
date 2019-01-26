import React from 'react'
// import { Link } from 'gatsby'
import {Elements, StripeProvider} from 'react-stripe-elements';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Stripe from '../components/stripe'
import Title from '../components/Title'
import Body from '../components/Body'
// import Grid from '../components/Grid'
import About from '../components/about'
import Basic from '../components/formiktest'
import InputForm from '../components/InputForm'

import './index.css'







const IndexPage = () => { 
    return (
    <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="tpagebox"><Title/></div>
    <div style={{ marginBottom: `1.45rem` }}> 
    <div className='pagebox'>
    <About/>
    </div>
    <div className='pagebox'>  
    <Body/>

      {/* <InputForm/> */}

    {/* <Basic/> */}
    </div>
    <div className='pagebox'>
    <StripeProvider apiKey="pk_test_fPUGxuUBO7BTyNHoff6sZA4p">
        <div className="example">
          <Elements>
            <Stripe/>
          </Elements>
        </div>
      </StripeProvider>
      </div>
    </div>
  </Layout>
 );
};
 export default IndexPage
