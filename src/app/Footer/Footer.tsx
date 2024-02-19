import React from "react";
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
          <p>About Us</p>
          <p>Shop Now!</p>
          <p>Woman&apos;s</p>
          <p>FAQ&apos;s</p>
          <p>Contact Us</p>
          <p>Customer Services</p>
        </StyledInnerFooter1>
        
        <StyledHr2 />
        </StyledInnerHr>
        </div>
        <div>
        <StyledInnerHr>
        <StyledInnerFooter1>
          <h3>Customer Support</h3>
          <StyledHr1 />
          <p>My Account</p>
          <p>Checkout</p>
          <p>Cart</p>
          <p>FAQ&apos;s</p>
          <p>Order Tracking</p>
          <p>Help & Support</p>
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
