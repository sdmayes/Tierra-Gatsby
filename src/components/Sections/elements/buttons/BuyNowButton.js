import React from 'react'
import styled from 'styled-components'
import ShopContext from '../Context/ShopContext'

const StyledButton = styled.button`
    background-color: ${props => props.type === "Primary" ? "#ee4266" : "#fff"};
    font-size: ${props => props.fontSize || "24px"};
    color:${props => props.type === "Primary" ? "#fff" : "#ee4266"};
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    font-weight: 300;
    border: ${props => props.type === "Primary" ? "none" : "1px solid #ee4266"};
    width: ${props => props.width || "auto"};
    margin: ${props => props.margin || "none"};
    &:hover {
        cursor: pointer;
    }
`

function AddToCartButton(props) {
    return (
        <div>
            <ShopContext.Consumer>
            {value =>
            <StyledButton
                onClick={() => value.addVariantToCart(props.variant, props.quantity)}
                type={props.type} 
                fontSize={props.fontSize} 
                width={props.width} 
                margin={props.margin}
                > 
                {props.text}
            </StyledButton>
            }
            </ShopContext.Consumer>
        </div>
    )
}

export default AddToCartButton
