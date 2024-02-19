"use client";
import React from "react";
import Link from "next/link";
import NavBarTwo from "../NavBarTwo/NavBarTwo";
import NavBarOne from "../NavBarOne/Page";
import PopularProduct from "../PopularProduct/PopularProduct";
import InstagramaImage from "../InstagramImage/InstagramaImage";
import Footer from "../Footer/Footer";

import { GridContainer1 } from "../styles/CustomerService.styled";

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
          <h2>Customer Service</h2>
        </StyledLoginH2>
        <StyledLoginH4>
          <h5>
            <span>
              <Link href="/" style={{ textDecoration: "none" }}>
                <StyledLink>Home</StyledLink>
              </Link>
            </span>{" "}
            | <span>Customer Service</span>
          </h5>
        </StyledLoginH4>
      </StyledH2H4>

      <GridContainer1>
        <h2>Shipping Times and Costs</h2>
        <p><span></span> Complimentary ground shipping within 1 to 7 business days</p>
        <p><span></span> In-store collection available within 1 to 7 business days</p>
        <p><span></span> Next-day and Express delivery options also available</p>
        <p> 
        <span></span> Purchases are delivered in an orange box tied with a Bolduc ribbon,
          with the exception of certain items
        </p>
        <p> 
        <span></span> See the delivery FAQs for details on shipping methods, costs and
          delivery times
        </p>

        <h2>Payment Methods</h2>
        <p><span></span> Xton accepts the following payment methods:</p>
        <p> 
        <span></span> Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa
          Electron. The total will be charged to your card when the order is
          shipped.
        </p>
        <p> 
        <span></span> Xton features a Fast Checkout option, allowing you to securely save
          your credit card details so that you don&apos;t have to re-enter them for
          future purchases.
        </p>
        <p>
        <span></span>  PayPal: Shop easily online without having to enter your credit card
          details on the website.Your account will be charged once the order is
          completed. To register for a PayPal account, visit the website
          paypal.com.
        </p>

        <h2>Exchanges, Returns and Refunds</h2>

        <p>
          Items returned within 14 days of their original shipment date in same
          as new condition will be eligible for a full refund or store credit.
          Refunds will be charged back to the original form of payment used for
          purchase. Customer is responsible for shipping charges when making
          returns and shipping/handling fees of original purchase is
          non-refundable.
        </p>
      </GridContainer1>

      <PopularProduct />
      <InstagramaImage />
      <Footer />
    </div>
  );
}
