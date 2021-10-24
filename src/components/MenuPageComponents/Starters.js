import React, { Component } from "react"
import { Section, Title } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Satisfying" title="Starters $15"/>
        <QuickInfoWrapper>
          <p className="text">
              <strong>The Shrimp Salad</strong>: Jumbo shrimp with greens, in season veggies and the westcoast's best seafood dressing.
          </p>
            <p className="text">
              <strong>The Chicken Wings</strong>: House Seasoning and grilled, with a smokey bbq sauce for dipping.
          </p>
                   <p className="text">
              <strong>Falafels Forever</strong>: A handful of falafels with served with tahini sauce.
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
