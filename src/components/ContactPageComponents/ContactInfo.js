import React, { Component } from "react"
import { Section } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <QuickInfoWrapper>
          <p className="text"><strong>Sales</strong></p>
          <p className="text">Jerry Alpha .. (123) 323-4565 (jerrya@eatery.com)</p>
          <p className="text">Gene Omega .. (123) 323-4565 (geneo@eatery.com)</p>
            <br/><p className="text"><strong>Press</strong></p>

          <p className="text">June Delta .. (565) 434-6500 (press@eatery.com)</p>
            <br/>
            <p className="text"><strong>Marketing</strong></p>

          <p className="text">Janet Olson .. (565) 434-6300 (marketing@eatery.com)</p>
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
