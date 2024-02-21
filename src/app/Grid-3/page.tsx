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
  BelowImage,
  Image,
} from "../styles/Grid3.styled";

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
          <h2>Lookbook Grid (3 in Row)</h2>
        </StyledLoginH2>
        <StyledLoginH4>
          <h5>
            <span>
              <Link href="/" style={{ textDecoration: "none" }}>
                <StyledLink>Home</StyledLink>
              </Link>
            </span>{" "}
            | <span>Lookbook</span>
          </h5>
        </StyledLoginH4>
      </StyledH2H4>

      <GridContainer>
        <GridItem>
          <Image src="./images/products/img4.jpg" alt="" />
          <BelowImage>
            <p>
              Multicoloured Technical Trainers <span>$450.00</span>
            </p>
            <p>
              Faux Shearling Double Coat <span>$250.00</span>
            </p>
            <p>
              Push Up Low Rise Jeans <span>$100.00</span>
            </p>
          </BelowImage>
        </GridItem>
        <GridItem>
          <Image src="./images/products/img5.jpg" alt="" />
          <BelowImage>
            <p>
              Multicoloured Technical Trainers <span>$450.00</span>
            </p>
            <p>
              Faux Shearling Double Coat <span>$250.00</span>
            </p>
            <p>
              Push Up Low Rise Jeans <span>$100.00</span>
            </p>
          </BelowImage>
        </GridItem>
        <GridItem>
          <Image src="./images/products/img7.jpg" alt="" />
          <BelowImage>
            <p>
              Multicoloured Technical Trainers <span>$450.00</span>
            </p>
            <p>
              Faux Shearling Double Coat <span>$250.00</span>
            </p>
            <p>
              Push Up Low Rise Jeans <span>$100.00</span>
            </p>
          </BelowImage>
        </GridItem>
        <GridItem>
          <Image src="./images/products/img8.jpg" alt="" />
          <BelowImage>
            <p>
              Multicoloured Technical Trainers <span>$450.00</span>
            </p>
            <p>
              Faux Shearling Double Coat <span>$250.00</span>
            </p>
            <p>
              Push Up Low Rise Jeans <span>$100.00</span>
            </p>
          </BelowImage>
        </GridItem>
        <GridItem>
          <Image src="./images/products/img9.jpg" alt="" />
          <BelowImage>
            <p>
              Multicoloured Technical Trainers <span>$450.00</span>
            </p>
            <p>
              Faux Shearling Double Coat <span>$250.00</span>
            </p>
            <p>
              Push Up Low Rise Jeans <span>$100.00</span>
            </p>
          </BelowImage>
        </GridItem>
        <GridItem>
          <Image src="./images/products/img10.jpg" alt="" />
          <BelowImage>
            <p>
              Multicoloured Technical Trainers <span>$450.00</span>
            </p>
            <p>
              Faux Shearling Double Coat <span>$250.00</span>
            </p>
            <p>
              Push Up Low Rise Jeans <span>$100.00</span>
            </p>
          </BelowImage>
        </GridItem>
        <GridItem>
          <Image src="./images/products/img11.jpg" alt="" />
          <BelowImage>
            <p>
              Multicoloured Technical Trainers <span>$450.00</span>
            </p>
            <p>
              Faux Shearling Double Coat <span>$250.00</span>
            </p>
            <p>
              Push Up Low Rise Jeans <span>$100.00</span>
            </p>
          </BelowImage>
        </GridItem>
        <GridItem>
          <Image src="./images/products/img12.jpg" alt="" />
          <BelowImage>
            <p>
              Multicoloured Technical Trainers <span>$450.00</span>
            </p>
            <p>
              Faux Shearling Double Coat <span>$250.00</span>
            </p>
            <p>
              Push Up Low Rise Jeans <span>$100.00</span>
            </p>
          </BelowImage>
        </GridItem>
        <GridItem>
          <Image src="./images/products/img13.jpg" alt="" />
          <BelowImage>
            <p>
              Multicoloured Technical Trainers <span>$450.00</span>
            </p>
            <p>
              Faux Shearling Double Coat <span>$250.00</span>
            </p>
            <p>
              Push Up Low Rise Jeans <span>$100.00</span>
            </p>
          </BelowImage>
        </GridItem>
      </GridContainer>

      <PopularProduct />
      <InstagramaImage />
      <Footer />
    </div>
  );
}
