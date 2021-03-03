import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import cart from "../.././images/bag.svg"

const StyledImage = styled.img`
margin-bottom: 0;

` 

const ImageWrapper = styled.div`
  width: ${props => props.width || "28"}px;
  transition: all 0.10s ease-out;
  &:hover {
  transform: scale(1.1,1.1);
  filter: invert(33%) sepia(100%) saturate(2181%) hue-rotate(326deg) brightness(99%) contrast(88%);
  }
`

const LogoCart = (props) => { 

  return <ImageWrapper width={props.width}><Link to={"/cart/"}><StyledImage src={cart} /></Link></ImageWrapper>
  
}


export default LogoCart


