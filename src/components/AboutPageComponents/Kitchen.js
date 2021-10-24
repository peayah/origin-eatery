import React, { Component } from "react"
import { Section, Title } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="what we do" title="in our kitchen" />
        <QuickInfoWrapper>
          <p className="text">
            We make our sauces and condiments from scratch. We base our menu around seasonal produce, unique flavor combinations, and creative techniques. We also use top-notch ingredients and locally grown fruits and vegetables.
          </p>
          <p className="text">
            Our menu is about bringing the flavors of these wonderful fruits and vegetables to life and letting them shine. We are constantly experimenting with new ingredients and techniques to create dishes that elevate plant-based food beyond the standard. Try our seasonal menu today and join us on our culinary journey.
          </p>
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
