import React from "react";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import "@fortawesome/fontawesome-free/css/all.css";
import {
  StyledInnerFooter,
  StyledFooter,
  StyledInnerFooter1,
  StyledFooterBottom,
  StyledInputButton,
  StyledInput,
  StyledSubscribeButton,
  StyledFontAwesomeIcon,
  StyledIcon,
  StyledBaseFooter,
  StyledHeaderFooter,
  StyledHr1,
  StyledHr2,
  StyledHr3,
  StyledInnerHr,
  Image,
} from "../styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledInnerFooter>
        <div>
          <StyledInnerHr>
            <StyledInnerFooter1>
              <h3>About The Store</h3>
              <StyledHr1 />
              <p>One of the most popular on the web is shopping.</p>
              <p>Wonder Street, USA, New York</p>
              <p>+1-541-754-3010</p>
              <p>hello@livani.com</p>

              <StyledIcon>
                <StyledFontAwesomeIcon className="fa-brands fa-x-twitter"></StyledFontAwesomeIcon>
                <StyledFontAwesomeIcon className="fa-brands fa-facebook-f"></StyledFontAwesomeIcon>
                <StyledFontAwesomeIcon className="fa-brands fa-instagram"></StyledFontAwesomeIcon>
                <StyledFontAwesomeIcon className="fa-brands fa-linkedin-in"></StyledFontAwesomeIcon>
                <StyledFontAwesomeIcon className="fa-brands fa-pinterest-p"></StyledFontAwesomeIcon>
              </StyledIcon>
            </StyledInnerFooter1>

            <StyledHr2 />
          </StyledInnerHr>
        </div>
        <div>
          <StyledInnerHr>
            <StyledInnerFooter1>
              <h3>Quick Links</h3>
              <StyledHr1 />
              <Link href="/About-Us" style={{ textDecoration: "none" }}>
                <p>About Us</p>
              </Link>
              <Link
                href="/electronics-store"
                style={{ textDecoration: "none" }}
              >
                <p>Shop Now!</p>
              </Link>
              <Link href="/Categories-3" style={{ textDecoration: "none" }}>
                <p>Woman&apos;s</p>
              </Link>
              <Link href="/Compare" style={{ textDecoration: "none" }}>
                <p>Compare</p>
              </Link>
              <Link href="/#" style={{ textDecoration: "none" }}>
                <p>Contact Us</p>
              </Link>
              <Link href="/Customer-Service" style={{ textDecoration: "none" }}>
                <p>Customer Services</p>
              </Link>
            </StyledInnerFooter1>

            <StyledHr2 />
          </StyledInnerHr>
        </div>
        <div>
          <StyledInnerHr>
            <StyledInnerFooter1>
              <h3>Customer Support</h3>
              <StyledHr1 />
              <Link href="/" style={{ textDecoration: "none" }}>
                <p>My Account</p>
              </Link>
              <Link href="/Checkout" style={{ textDecoration: "none" }}>
                <p>Checkout</p>
              </Link>
              <Link href="/Cart" style={{ textDecoration: "none" }}>
                <p>Cart</p>
              </Link>
              <Link href="/Signup" style={{ textDecoration: "none" }}>
                <p>Signup</p>
              </Link>
              <Link href="/Tracking-Order" style={{ textDecoration: "none" }}>
                <p>Order Tracking</p>
              </Link>
              <Link href="/#" style={{ textDecoration: "none" }}>
                <p>Login</p>
              </Link>
            </StyledInnerFooter1>
            <StyledHr2 />
          </StyledInnerHr>
        </div>
        <div>
          <StyledInnerFooter1>
            <h3>Newsletter</h3>
            <StyledHr1 />
            <p>To get the latest news and latest updates from us.</p>
            <p>Your E-mail Address:</p>
            <StyledInputButton>
              <StyledInput placeholder="Enter your Email" />
              <StyledSubscribeButton>Subscribe</StyledSubscribeButton>
            </StyledInputButton>
          </StyledInnerFooter1>
        </div>
      </StyledInnerFooter>
      <StyledHr3 />
      <StyledFooterBottom>
        <StyledBaseFooter>
          <p>
            Copyright 2024 Livani Designed By EnvyTheme - All rights reserved.
          </p>
          <div>
            <Image src="./images/payment/expresscard.png" alt="" />
            <Image src="./images/payment/mastercard.png" alt="" />
            <Image src="./images/payment/mastercard2.png" alt="" />
            <Image src="./images/payment/visa.png" alt="" />
            <Image src="./images/payment/visa2.png" alt="" />
          </div>
        </StyledBaseFooter>
      </StyledFooterBottom>
    </StyledFooter>
  );
}
