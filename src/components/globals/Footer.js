import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { FaInstagram, FaTwitter } from "react-icons/fa"
export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: `https://www.twitter.com`,
      },
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: `https://www.instagram.com`,
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="title">origin eatery</div>
        <div className="address">112 Main Street</div>
        <div className="address">94574 CA St. Helena</div>
        <div className="address">(123)456-7890</div>


        <p className="copyright">copyright &copy; Origin Eatery</p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 2em auto;
  }
  
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainPrimary};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    padding:2rem 0 0
  }
  .title {
    text-align: center;
    width: 30rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 1rem auto;
    font-size: 1.5rem;
  }
  
  .address {
  text-align: center;
    width: 30rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    margin: 0 auto 0 ;
    font-size: .75rem;
  }
`
