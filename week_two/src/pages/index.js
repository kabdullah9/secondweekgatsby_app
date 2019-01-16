import React from 'react'
import { Link } from 'gatsby'
import {Elements, StripeProvider} from 'react-stripe-elements';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Stripe from '../components/stripe'
import Title from '../components/Title'
import Body from '../components/Body'
// import Grid from '../components/Grid'
import Footer from '../components/footer'

import './index.css'







const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title/>
    <div style={{ marginBottom: `1.45rem` }}> 
    <div class='pagebox'>  
    <Body/>
    </div>
    <div class='pagebox'>
    <StripeProvider apiKey="pk_test_fPUGxuUBO7BTyNHoff6sZA4p">
        <div className="example">
          <Elements>
            <Stripe/>
          </Elements>
        </div>
      </StripeProvider>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Footer/>
  </Layout>
)

export default IndexPage
