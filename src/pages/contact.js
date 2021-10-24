import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/contactBcg.jpeg"
import ContactInfo from "../components/ContactPageComponents/ContactInfo";

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <Banner title="contact us" subtitle="let's get in touch" />
    </PageHeader>
      <ContactInfo />


  </Layout>
)

export default ContactPage
