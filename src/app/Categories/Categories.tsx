import React from "react";
import {
  GridContainer,
  GridItem,
  Image,
  CategoriesText,
  StyledCategoriesButton1,
  StyledH5H1Button,
  StyledH5H1ButtonWhite,
} from "../styles/Categories.styled";

export default function Categories() {
  return (
    <div>
      <GridContainer>
        <GridItem>
          <Image src="./images/categories/categories1.jpg" alt="Image 2" />
          <StyledH5H1ButtonWhite>
            <h5>Don&apos;t Miss Today</h5>
            <h2>50% OFF</h2>
            <StyledCategoriesButton1>DISCOVER NOW</StyledCategoriesButton1>
          </StyledH5H1ButtonWhite>
        </GridItem>
        <GridItem>
          <Image src="./images/categories/categories2.jpg" alt="Image 2" />
          <StyledH5H1Button>
            <h5>New Collection</h5>
            <h2>Need Now</h2>
            <StyledCategoriesButton1>DISCOVER NOW</StyledCategoriesButton1>
          </StyledH5H1Button>
        </GridItem>
        <GridItem>
          <Image src="./images/categories/categories3.jpg" alt="Image 3" />
          <StyledH5H1Button>
            <h5>Your Looks</h5>
            <h2>Must Haves</h2>
            <StyledCategoriesButton1>DISCOVER NOW</StyledCategoriesButton1>
          </StyledH5H1Button>
        </GridItem>
        <GridItem>
          <Image src="./images/categories/categories4.jpg" alt="Image 4" />
          <StyledH5H1ButtonWhite>
            <h5>Take 20% OFF</h5>
            <h2>Winter Spring!</h2>
            <StyledCategoriesButton1>DISCOVER NOW</StyledCategoriesButton1>
          </StyledH5H1ButtonWhite>
        </GridItem>
      </GridContainer>

      <CategoriesText>
        <h5>See Our Collection</h5>
        <h1>Recent Products</h1>
      </CategoriesText>
    </div>
  );
}
