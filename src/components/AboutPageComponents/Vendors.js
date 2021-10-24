import React, { Component } from "react"
import { Section, Title } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="our fantastic" title="vendors" />
        <QuickInfoWrapper>
          <p className="text">
            Our vendors are passionately devoted to sourcing and delivering high-quality, safe organic ingredients in order to protect and promote the companies that we work with. From the corporate brands, product developers, professional chefs, and all the way through to the home cooks, families, and individuals who will consume the final product, everyone needs to have Multiple Organics!</p>


        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2em;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
