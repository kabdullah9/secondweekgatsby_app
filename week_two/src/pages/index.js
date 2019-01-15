import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/button'
import Title from '../components/Title'
import Body from '../components/Body'
import Grid from '../components/Grid'






const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>    
    <Body/>
    <Button/>
    <Grid/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
