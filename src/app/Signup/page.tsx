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
    StyledButton1,
    GridItem,
} from "../styles/Signup.styled";

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
          <h2>Signup</h2>
        </StyledLoginH2>
        <StyledLoginH4>
          <h5>
            <span>
              <Link href="/" style={{ textDecoration: "none" }}>
                <StyledLink>Home</StyledLink>
              </Link>
            </span>{" "}
            | <span>Signup</span>
          </h5>
        </StyledLoginH4>
      </StyledH2H4>

      <GridContainer1>
        <GridItem>

            <h2>Create an Account</h2>
            <p>NAME</p>
            <input />
            <p>EMAIL</p>
            <input />
            <p>PASSWORD</p>
            <input />

            <div>
            <StyledButton1>SIGNUP</StyledButton1>
            </div>
        </GridItem>
              
      </GridContainer1>

      <PopularProduct />
      <InstagramaImage />
      <Footer />
    </div>
  );
}
