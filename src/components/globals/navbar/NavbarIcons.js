import React, { Component } from "react"
import { FaInstagram, FaTwitter } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"
export default class NavbarIcons extends Component {
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
      <IconWrapper>
        {this.state.icons.map(item => (
          <a
            href={item.path}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    // margin-right: 2rem;
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};
  }
  
  
  

  .facebook-icon {
    color: #000000;
  }
  .twitter-icon {
    color: #000000;
  }
  .instagram-icon {
    color: #000000;
  }
  .icon:hover {
    color: ${styles.colors.mainYellow};
  }
  display: none;
  @media (min-width: 768px) {
    width: 10rem;
    display: flex;
    justify-content: space-around;
  }
`
