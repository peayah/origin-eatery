import React, { Component } from "react"
import { Section, Title } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Delicious" title="Desserts $10"/>
        <QuickInfoWrapper>
          <p className="text">
              <strong>Two Scoops of Gelato</strong>: Always in season fruits with chocolate sauce.
          </p>
            <p className="text">
              <strong>Three Aebleskiver</strong>: Danish panfried cake with a soft apple core. Served with powdered sugar with a hint of cinnamon.
          </p>
                   <p className="text">
              <strong>Carol's Carrot Cake</strong>: Old family recipe with a secret amount of spices and carrot's from the garden.
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
