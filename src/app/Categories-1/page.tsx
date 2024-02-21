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
  GridItem,
  ImageSideDiv,
  Image,
} from "../styles/Categories-1.styled";

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
          <h2>Categories One Row</h2>
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
          <Image src="./images/offer/offer1.jpg" alt="Offer1" />
          <ImageSideDiv>
            <h2>New Collections!</h2>
            <p>
              Stylist Allison Taylor take on the summer season&apos;s trends.
            </p>
            <button>DISCOVER NOW!</button>
          </ImageSideDiv>
        </GridItem>
      </GridContainer>

      <PopularProduct />
      <InstagramaImage />
      <Footer />
    </div>
  );
}
