"use client";
import React from "react";
import Link from "next/link";
import NavBarTwo from "../NavBarTwo/NavBarTwo";
import NavBarOne from "../NavBarOne/Page";
import PopularProduct from "../PopularProduct/PopularProduct";
import InstagramaImage from "../InstagramImage/InstagramaImage";
import Footer from "../Footer/Footer";
import {
  StyledH2H4,
  StyledLoginH2,
  StyledLoginH4,
  StyledLoginNewCustomer,
  StyledLoginInput,
  StyledNewCustomer,
  StyledLoginInput1,
  StyledLoginInput2,
  StyledLink,
} from "../styles/Login.styled";

export default function page() {
  return (
    <div>
      <NavBarTwo />
      <NavBarOne />
      <StyledH2H4>
        <StyledLoginH2>
          <h2>My Account</h2>
        </StyledLoginH2>
        <StyledLoginH4>
          <h5>
            <span>
              <Link href="/" style={{ textDecoration: "none" }}>
                <StyledLink>Home</StyledLink>
              </Link>
            </span>{" "}
            | <span>Login</span>
          </h5>
        </StyledLoginH4>
      </StyledH2H4>

      <StyledLoginNewCustomer>
        <StyledLoginInput>
          <h2>Login</h2>
          <StyledLoginInput1>
            <input placeholder="   demo@example.com" />
          </StyledLoginInput1>
          <StyledLoginInput2>
            <input placeholder="   demo" />
          </StyledLoginInput2>
          <button>Login</button>
        </StyledLoginInput>
        <StyledNewCustomer>
          <h2>New Customer</h2>
          <h4>Create an Account</h4>
          <p>
            Sign up for a free account at our store. Registration is quick and
            easy. It allows you to be able to order from our shop. To start
            shopping click register.
          </p>
          <button> Create Account</button>
        </StyledNewCustomer>
      </StyledLoginNewCustomer>
      <PopularProduct />
      <InstagramaImage />
      <Footer />
    </div>
  );
}
