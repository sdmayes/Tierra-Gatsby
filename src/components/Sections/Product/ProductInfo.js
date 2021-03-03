import React, { Component } from "react"
import AddToCartButton from "../elements/buttons/AddToCartButton"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import QuantitySelector from "./QuantitySelector"

export default class ProductInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      visible: false,
    }
  }

  updateQuantity = newQuantity => {
    parseInt(newQuantity, 10)
    this.setState({ quantity: newQuantity })
  }

  setVisible = () => {
    this.setState({ visible: !this.state.visible })
  }

  // Change the text based on our state
  dropDownMessage = () => {
    if (this.state.visible) {
      return "- Hide Ingredients"
    } else return "+ Show Full Ingredients"
  }

  render() {
    const product = this.props.product
    const contentfulData = this.props.contentfulData
    const body = contentfulData.description.json

    // Handle different types of nodes in our contentful data
    const options = {
      renderNode: {
        // Description Body
        [BLOCKS.PARAGRAPH]: (node, children) => (
          <p class="text-sm md:text-base leading-relaxed">{children}</p>
        ),
        // description headings (benefits/key ingredients)
        [BLOCKS.HEADING_4]: (node, children) => (
          <h3 class="text-lg mt-4">{children}</h3>
        ),
        [BLOCKS.UL_LIST]: (node, children) => (
          <ul class="list-disc ml-6">{children}</ul>
        ),
      },
    }
    return (
      <div class="flex flex-col">
        <h1 class="text-2xl lg:text-3xl">{contentfulData.productName}</h1>
        <h2 class="text-accent text-lg lg:text-2xl mb-3">
          {contentfulData.subtitle}
        </h2>

        <div class="mb-4">
          {documentToReactComponents(body, options)}
          <div
            class={`overflow-hidden transition-all mt-4 duration-500 ${
              this.state.visible
                ? "mb-4 opacity-100 max-h-96"
                : "opacity-0 max-h-0"
            }`}
          >
            <span class="text-xs text-gray-500">
              {contentfulData.fullIngredients.fullIngredients}
            </span>
          </div>
          <span
            class="cursor-pointer text-accent"
            onClick={() => this.setVisible()}
          >
            {this.dropDownMessage()}
          </span>
        </div>

        <hr />

        <div class="grid grid-flow-col auto-cols-max gap-x-2 sm:gap-x-4 mt-4 w-full">
          <span class="text-xs sm:text-sm">Size: 2 oz</span>{" "}
          <span class="text-xs sm:text-sm">|</span>
          <span class="text-xs sm:text-sm">Skin Type: All Skin Types</span>
        </div>

        <div class="flex flex-col mt-4">
          <span class="text-lg line-through">
            ${product.variants[0].compareAtPrice}
          </span>
          <div css="display: flex; align-items: flex-end;">
            <span class="text-2xl font-medium">
              ${product.variants[0].price}
            </span>
            <span class="text-sm ml-2">+ Free Shipping</span>
          </div>
        </div>

        <div class="grid grid-flow-row auto-rows-max sm:grid-flow-col sm:auto-cols-max items-center mt-4">
          <QuantitySelector
            updateQuantity={this.updateQuantity}
            currentQuantity={this.state.quantity}
          />
          <AddToCartButton
            class="mt-4 sm:ml-4 sm:mt-0"
            primary={true}
            showPopup={this.props.showPopup}
            variant={product.variants[0].shopifyId}
            quantity={this.state.quantity}
          >
            <span>Add To Cart</span>
          </AddToCartButton>
        </div>
      </div>
    )
  }
}
