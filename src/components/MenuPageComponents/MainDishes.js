import React, { Component } from "react"
import { Section, Title } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Magnificient" title="Main Courses $25"/>
        <QuickInfoWrapper>
          <p className="text">
              <strong>The Vegetarian</strong>: Vegan Mexican Quinoa Bowl with Green Chile Cilantro Sauce. Quinoa gets tossed with red bell peppers, black beans, romaine, and red onions, then smothered in a dairy-free sauce with a jalapeño kick.
          </p>
            <p className="text">
              <strong>The White Meat</strong>: Honey garlic chicken breast with potatoes.
          </p>
                   <p className="text">
              <strong>The Red Meat</strong>: Coffee crusted beef ribs with kale.
          </p>

            <p className="text">
              <strong>The Fish</strong>: Sartheles Psites (baked sardines with garlic and oregano) on a bed of spinish leaves.
          </p>
            <p className="text">
              <strong>The Pizza</strong>: Choose between white sauce with chicken and vegetables or red sauce with pepperoni.
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
