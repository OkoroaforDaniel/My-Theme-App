"use client";
import React from "react";
import Link from "next/link";
import NavBarTwo from "../NavBarTwo/NavBarTwo";
import NavBarOne from "../NavBarOne/Page";
import PopularProduct from "../PopularProduct/PopularProduct";
import InstagramaImage from "../InstagramImage/InstagramaImage";
import Footer from "../Footer/Footer";

import { Image, GridContainer, GridItem, StyledH5H1ButtonWhite, StyledH5H1Button, StyledCategoriesButton1 } from "../styles/Categories-3.styled";

import {
  StyledH2H4,
  StyledLoginH2,
  StyledLoginH4,
  StyledLink,
} from "../styles/Login.styled";

export default function page() {
  return (
    <div>
      <NavBarTwo />
      <NavBarOne />

      <StyledH2H4>
        <StyledLoginH2>
          <h2>Categories (2 in Row)</h2>
        </StyledLoginH2>
        <StyledLoginH4>
          <h5>
            <span>
              <Link href="/" style={{ textDecoration: "none" }}>
                <StyledLink>Home</StyledLink>
              </Link>
            </span>{" "}
            | <span>Categories</span>
          </h5>
        </StyledLoginH4>
      </StyledH2H4>

      <GridContainer>
        <GridItem>
          <Image src="../../images/categories/categories1.jpg" alt="Image 2" />
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
          <Image src="./images/categories/categories3.jpg" alt="Image 2" />
          <StyledH5H1ButtonWhite>
            <h5>Your Looks</h5>
            <h2>Must Haves</h2>
            <StyledCategoriesButton1>DISCOVER NOW</StyledCategoriesButton1>
          </StyledH5H1ButtonWhite>
        </GridItem>

        <GridItem>
          <Image src="./images/categories/categories4.jpg" alt="Image 2" />
          <StyledH5H1Button>
            <h5>Take 20% OFF</h5>
            <h2>Winter Spring!</h2>
            <StyledCategoriesButton1>DISCOVER NOW</StyledCategoriesButton1>
          </StyledH5H1Button>
        </GridItem>

        <GridItem>
          <Image src="./images/categories/categories9.jpg" alt="Image 2" />
          <StyledH5H1ButtonWhite>
            <h5>Don&apos;t Miss Today</h5>
            <h2>Women&apos;s</h2>
            <StyledCategoriesButton1>DISCOVER NOW</StyledCategoriesButton1>
          </StyledH5H1ButtonWhite>
        </GridItem>

        <GridItem>
          <Image src="./images/categories/categories10.jpg" alt="Image 2" />
          <StyledH5H1Button>
            <h5>New Collection</h5>
            <h2>Men&apos;s</h2>
            <StyledCategoriesButton1>DISCOVER NOW</StyledCategoriesButton1>
          </StyledH5H1Button>
        </GridItem>
      </GridContainer>
      <PopularProduct />
      <InstagramaImage />
      <Footer />
    </div>
  );
}