import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/aboutBcg.jpeg"
import Vendors from "../components/AboutPageComponents/Vendors";
import Kitchen from "../components/AboutPageComponents/Kitchen";

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Dairy free dining`, `glutenfree dining`, `organic food`]} />
    <PageHeader img={img}>
      <Banner title="about us" subtitle="a peak behind the scenes" />
    </PageHeader>
      <Kitchen />
      <Vendors/>
  </Layout>
)

export default AboutPage
