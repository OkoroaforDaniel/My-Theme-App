"use client";
import React from "react";
import Link from "next/link";
import NavBarTwo from "../NavBarTwo/NavBarTwo";
import NavBarOne from "../NavBarOne/Page";
import PopularProduct from "../PopularProduct/PopularProduct";
import InstagramaImage from "../InstagramImage/InstagramaImage";
import Footer from "../Footer/Footer";

import {
  GridContainer,
  GridItem1,
  GridItem2,
  GridItem3,
  GridItem4,
  GridItem5,
  GridItem6,
  Image,
  StyledCategoriesButton1,
  StyledCategoriesButton5,
  StyledCategoriesButton8,
} from "../styles/Electronics-store.Styled";

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
          <h2>Electronics Store</h2>
        </StyledLoginH2>
        <StyledLoginH4>
          <h5>
            <span>
              <Link href="/" style={{ textDecoration: "none" }}>
                <StyledLink>Home</StyledLink>
              </Link>
            </span>{" "}
            | <span>Electronics</span>
          </h5>
        </StyledLoginH4>
      </StyledH2H4>

      <GridContainer>
        <GridItem1>
          <Image
            src="./images/electronic/electronic7.jpg"
            alt="Image 5"
          />
          <StyledCategoriesButton1>New Collections !</StyledCategoriesButton1>
        </GridItem1>
        <GridItem2>
          <GridItem3>
            <GridItem4>
              <Image
                src="./images/electronic/electronic8.jpg"
                alt="Image 6"
              />
              <StyledCategoriesButton5>
                Our Popular Products
              </StyledCategoriesButton5>
            </GridItem4>
            <GridItem5>
              <Image
                src="./images/electronic/electronic5.jpg"
                alt="Image 7"
              />
              <StyledCategoriesButton5>
                Hot Trending Products
              </StyledCategoriesButton5>
            </GridItem5>
          </GridItem3>

          <GridItem6>
            <GridItem4>
              <Image
                src="./images/electronic/electronic2.jpg"
                alt="Image 6"
              />
              <StyledCategoriesButton5>
                Our Popular Products
              </StyledCategoriesButton5>
            </GridItem4>
            <GridItem5>
              <Image
                src="./images/electronic/electronic6.jpg"
                alt="Image 7"
              />
              <StyledCategoriesButton5>
                Hot Trending Products
              </StyledCategoriesButton5>
            </GridItem5>
          </GridItem6>
        </GridItem2>
      </GridContainer>

      <PopularProduct />
      <InstagramaImage />
      <Footer />
    </div>
  );
}
