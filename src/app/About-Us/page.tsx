"use client";
import React from "react";
import Link from "next/link";
import NavBarTwo from "../NavBarTwo/NavBarTwo";
import NavBarOne from "../NavBarOne/Page";
import PopularProduct from "../PopularProduct/PopularProduct";
import InstagramaImage from "../InstagramImage/InstagramaImage";
import Footer from "../Footer/Footer";

import {
  GridContainer1,
  GridItem,
  GridItem1,
  GridItem2,
  GridItem3,
  GridItem4,
  GridItem5,
  GridItem6,
  P1,
  AboutHr,
  Image,
} from "../styles/AboutUs.styled";

import {
  StyledH2H4,
  StyledLoginH2,
  StyledLoginH4,
  StyledLink,
} from "../styles/Login.styled";
import { Input, Radio } from "@mui/material";

export default function page() {
  return (
    <div>
      <NavBarTwo />
      <NavBarOne />

      <StyledH2H4>
        <StyledLoginH2>
          <h2>About Us</h2>
        </StyledLoginH2>
        <StyledLoginH4>
          <h5>
            <span>
              <Link href="/" style={{ textDecoration: "none" }}>
                <StyledLink>Home</StyledLink>
              </Link>
            </span>{" "}
            | <span>About Us</span>
          </h5>
        </StyledLoginH4>
      </StyledH2H4>

      <GridContainer1>
        <GridItem>
          <GridItem1>
            <Image src="./images/about/about1.jpg" alt="image1" />
          </GridItem1>
          <GridItem2>
            <h3>About Us</h3>
            <h1>Linava Trusted Online Shopping Site in the World</h1>
            <P1><h4>Linava.com offers you flexible and responsive shopping experience.</h4></P1>
            <p>Linava is an eCommerce website which features millions of products, i.e. clothes, shoes, bags, electronic items and much more, with all at incredible prices.</p>
            <p>One of the most popular on the web is shopping. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <P1><h4>Ships to more than 10 countries and regions</h4></P1>
            <p>We provide customers with a hassle-free and worry-free international shopping experience from buying to delivery.</p>
          </GridItem2>
        </GridItem>

        <GridItem3>
          <GridItem4>
            <h2>Our Story</h2>
            <AboutHr />
            <p>One of the most popular on the web is shopping.</p>
            <p><span></span> People like Livani</p>
            <p><span></span> World&apos;s finest Livani</p>
            <p><span></span> The original Livani</p>
            <p><span></span> We trust Livani</p>
          </GridItem4>
          <GridItem5>
          <h2>Our Values</h2>
          <AboutHr />
            <p>The best of both worlds. Store and web.</p>
            <p><span></span> Always in style!</p>
            <p><span></span> Discover your favorite shopping</p>
            <p><span></span> Find yourself</p>
            <p><span></span> Feel-good shopping</p>
          </GridItem5>
          <GridItem6>
          <h2>Our Promise</h2>
          <AboutHr />
            <p>Rediscover a great shopping tradition</p>
            <p><span></span> Get better shopping</p>
            <p><span></span> Love shopping again</p>
            <p><span></span> Online shopping.</p>
            <p><span></span> Shopping for all seasons</p>
          </GridItem6>
        </GridItem3>
      </GridContainer1>

      <PopularProduct />
      <InstagramaImage />
      <Footer />
    </div>
  );
}
