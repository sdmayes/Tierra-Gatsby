import React, { useContext, useState, useEffect } from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import ShopContext from "../Context/ShopContext"

const ImageWrapper = styled.div`
  width: 36px;
`

const StyledSVG = styled.svg`
  fill: #fff;
  @media screen and (max-width: 1024px) {
    fill: ${props =>
      props.scrolled ? props.colors.black : props.colors.white};
  }
`

const Circle = styled.div`
  font-family: "Montserrat Medium";
  color: #fff;
  background: #ee4266;
  width: 21px;
  height: 21px;
  border-radius: 21px;
  position: absolute;
  text-align: center;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    display: ${props => (props.items === 0 ? "none" : "flex")};
    position: absolute;
    margin-left: 20px;
    margin-top: -20px;
  }
  @media screen and (min-width: 480px) {
    display: ${props => (props.items === 0 ? "none" : "flex")};
    position: absolute;
    margin-left: 20px;
    margin-top: -20px;
  }
`

const MobileCartWhite = props => {
  const store = useContext(ShopContext)
  const [items, setItems] = useState(0)
  const [colors, setColors] = useState({ black: "#000", white: "#fff" })
  useEffect(() => {
    if (store.checkout && store.checkout.lineItems != items) {
      setItems(store.checkout.lineItems.length)
    }
  }, [store.checkout])
  return (
    <ImageWrapper>
      <Link to="/cart/">
        <StyledSVG
          scrolled={props.scrolled}
          colors={colors}
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
        >
          <path d="M32.4 31.119L30.34 7.907A.992.992 0 0029.352 7h-4.24A7.118 7.118 0 0018 0a7.118 7.118 0 00-7.111 7.001H6.648a.987.987 0 00-.987.906l-2.06 23.212c0 .03-.008.059-.008.088C3.593 33.85 6.015 36 8.996 36h18.008c2.981 0 5.403-2.15 5.403-4.793 0-.03 0-.059-.007-.088zM18 1.988A5.13 5.13 0 0123.124 7H12.876A5.13 5.13 0 0118 1.988zm9.004 32.024H8.996c-1.87 0-3.386-1.236-3.416-2.76L7.554 8.995h3.327v3.019a.99.99 0 00.994.994.99.99 0 00.994-.994V8.996h10.255v3.019a.99.99 0 00.994.994.99.99 0 00.994-.994V8.996h3.327l1.98 22.255c-.029 1.524-1.553 2.761-3.415 2.761z" />
        </StyledSVG>
        <Circle items={items}>{items}</Circle>
      </Link>
    </ImageWrapper>
  )
}

export default MobileCartWhite
