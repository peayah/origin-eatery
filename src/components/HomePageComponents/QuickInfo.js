import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"
import { Link } from "gatsby"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="a little something" />
        <QuickInfoWrapper>
          <p className="text">
            We have our own garden ten miles from the restaurant,
            and a prep cook who doubles as the garden manager. We
            have no freezer, and get everything fresh in daily.
            Life is similar to when Mark Twain was chugging up and
            down the river – the garden produce, the way everyone
            knows each other. Except Mark Twain probably never saw
            a microgreen, and we helped out microgreen grower start
            her business.
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>about the food</SectionButton>
          </Link>
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
