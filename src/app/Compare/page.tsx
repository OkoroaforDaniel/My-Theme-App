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
  StyledLink,
} from "../styles/Login.styled";

import {
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  OuterContainer,
  Image,
  ImageContainer,
} from "../styles/Compare.styled";

export default function page() {
  return (
    <div>
      <NavBarTwo />
      <NavBarOne />
      <StyledH2H4>
        <StyledLoginH2>
          <h2>Compare</h2>
        </StyledLoginH2>
        <StyledLoginH4>
          <h5>
            <span>
              <Link href="/" style={{ textDecoration: "none" }}>
                <StyledLink>Home</StyledLink>
              </Link>
            </span>{" "}
            | <span>Compare</span>
          </h5>
        </StyledLoginH4>
      </StyledH2H4>

      {/* Table */}
      <OuterContainer>
        <TableContainer>
          <tbody>
            <TableRow>
              <TableHead>PRODUCTS</TableHead>
              <TableCell>
                <ImageContainer>
                  <Image src="./images/products/img1.jpg" alt="" />
                </ImageContainer>

                <h4>Long Sleeve Leopard T-Shirt</h4>
                <p>$250</p>
              </TableCell>
              <TableCell>
                <ImageContainer>
                  <Image src="./images/products/img2.jpg" alt="" />
                </ImageContainer>
                <h4>Causal V-Neck Soft Raglan</h4>
                <p>$200</p>
              </TableCell>
              <TableCell>
                <ImageContainer>
                  <Image src="./images/products/img3.jpg" alt="" />
                </ImageContainer>
                <h4>Hanes Top Men&apos;s Pullover</h4>
                <p>$210</p>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableHead>COLLECTION</TableHead>
              <TableCell>Shirt, New Products, T-Shirt</TableCell>
              <TableCell>Shirt, New Products, T-Shirt</TableCell>
              <TableCell>Shirt, New Products, T-Shirt</TableCell>
            </TableRow>

            <TableRow>
              <TableHead>AVAILABILITY</TableHead>
              <TableCell>In Stock</TableCell>
              <TableCell>In Stock</TableCell>
              <TableCell>In Stock</TableCell>
            </TableRow>

            <TableRow>
              <TableHead>MATERIAL</TableHead>
              <TableCell>100% Polyester</TableCell>
              <TableCell>100% Polyester</TableCell>
              <TableCell>100% Polyester</TableCell>
            </TableRow>

            <TableRow>
              <TableHead>VENDOR</TableHead>
              <TableCell>Lacoste</TableCell>
              <TableCell>Lacoste</TableCell>
              <TableCell>Lacoste</TableCell>
            </TableRow>

            <TableRow>
              <TableHead>SKU</TableHead>
              <TableCell>00105сd-1</TableCell>
              <TableCell>00105сd-1</TableCell>
              <TableCell>00105сd-1</TableCell>
            </TableRow>

            <TableRow>
              <TableHead>COLOR</TableHead>
              <TableCell>White</TableCell>
              <TableCell>Black</TableCell>
              <TableCell>Blue</TableCell>
            </TableRow>

            <TableRow>
              <TableHead>SIZE</TableHead>
              <TableCell>20</TableCell>
              <TableCell>22</TableCell>
              <TableCell>XXL</TableCell>
            </TableRow>

            <TableRow>
              <TableHead>BARCODE</TableHead>
              <TableCell>1234567890</TableCell>
              <TableCell>1234567890</TableCell>
              <TableCell>1234567890</TableCell>
            </TableRow>
          </tbody>
        </TableContainer>
      </OuterContainer>

      <PopularProduct />
      <InstagramaImage />
      <Footer />
    </div>
  );
}
