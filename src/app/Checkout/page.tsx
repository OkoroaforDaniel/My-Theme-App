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
  GridContainer2,
  GridItem1,
  GridItem2,
  TopGrid,
  TopLine,
  CheckoutHr,
  PostEmailStyle,
  PostStyle,
  EmailStyle,
  Table,
  TableRow,
  TableCell,
  StyledButton1,
  RadioButton,
  RadioStyle,
} from "../styles/Checkout.styled";

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
          <h2>Checkout</h2>
        </StyledLoginH2>
        <StyledLoginH4>
          <h5>
            <span>
              <Link href="/" style={{ textDecoration: "none" }}>
                <StyledLink>Home</StyledLink>
              </Link>
            </span>{" "}
            | <span>Checkout</span>
          </h5>
        </StyledLoginH4>
      </StyledH2H4>
      <GridContainer1>
        <TopLine></TopLine>

        <TopGrid>
          <p>
            Returning customer? <span> Click here to login! </span>
          </p>
        </TopGrid>
        <GridContainer2>
          <GridItem1>
            <h2>Billing Details</h2>
            <CheckoutHr />
            <p>COUNTRY*</p>
            <input />
            <p>NAME*</p>
            <input />
            <p>COMPANY NAME</p>
            <input />
            <p>ADDRESS *</p>
            <input />
            <p>TOWN / CITY *</p>
            <input />
            <PostEmailStyle>
              <PostStyle>
                <p>POSTCODE / ZIP *</p>
                <input />
              </PostStyle>
              <EmailStyle>
                <p>EMAIL ADDRESS *</p>
                <input />
              </EmailStyle>
            </PostEmailStyle>
            <p>PHONE *</p>
            <input />
            <textarea />
          </GridItem1>

          <GridItem2>
            <h2>Your Order</h2>
            <CheckoutHr />

            <Table>
              <tbody>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Order Total</TableCell>
                  <TableCell>$0</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <RadioButton>
              <RadioStyle>
              <Radio />
              <p>Direct Order</p>
              </RadioStyle>
              <p>
              Make your payment directly into our bank account. Please use your Order ID 
              as the payment reference. Your order will not be shipped until the funds have cleared in our 
              account.
              </p>
              <RadioStyle>
              <Radio />
              <p>Stripe</p>
              </RadioStyle>

              <StyledButton1>PLEASE LOGIN TO COMPLETE YOUR ORDER</StyledButton1>
              
            </RadioButton>
          </GridItem2>
        </GridContainer2>
      </GridContainer1>

      <PopularProduct />
      <InstagramaImage />
      <Footer />
    </div>
  );
}
