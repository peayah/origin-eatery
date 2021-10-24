import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/menuBcg.jpeg"
import Starters from "../components/MenuPageComponents/Starters";
import MainDishes from "../components/MenuPageComponents/MainDishes";
import Desserts from "../components/MenuPageComponents/Desserts";

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <Banner title="our menu" subtitle="everything's gluten and dairy free" />
    </PageHeader>
      <Starters />
      <MainDishes />
      <Desserts />
  </Layout>
)

export default MenuPage
