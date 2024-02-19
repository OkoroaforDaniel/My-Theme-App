"use client";
import React from "react";
import Link from "next/link";
import NavBarTwo from "../NavBarTwo/NavBarTwo";
import NavBarOne from "../NavBarOne/Page";
import PopularProduct from "../PopularProduct/PopularProduct";
import InstagramaImage from "../InstagramImage/InstagramaImage";
import Footer from "../Footer/Footer";

import { GridContainer, GridItem, BelowImage, Image, } from "../styles/Page-Grid-2.styled";

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
          <h2>Gallery Grid (2 in Row)</h2>
        </StyledLoginH2>
        <StyledLoginH4>
          <h5>
            <span>
              <Link href="/" style={{ textDecoration: "none" }}>
                <StyledLink>Home</StyledLink>
              </Link>
            </span>{" "}
            | <span>Gallery</span>
          </h5>
        </StyledLoginH4>
      </StyledH2H4>

      <GridContainer>
        <GridItem>
        <Image src="./images/gallery/gallery1.jpg" alt="" />
        <BelowImage>
          <p>SHIRT</p>
          <h3>Long Sleeve Leopard T-Shirt</h3>
        </BelowImage>
        </GridItem>
        <GridItem>
          <Image src="./images/gallery/gallery2.jpg" alt="" />
          <BelowImage>
          <p>TWIST SHIRT</p>
          <h3>Causal V-Neck Soft Raglan</h3>
        </BelowImage>
          </GridItem>
          <GridItem>
          <Image src="./images/gallery/gallery3.jpg" alt="" />
          <BelowImage>
          <p>ECO SMART</p>
          <h3>Hanes Men Pullover</h3>
        </BelowImage>
          </GridItem>
          <GridItem>
          <Image src="./images/gallery/gallery4.jpg" alt="" />
          <BelowImage>
          <p>SMART SHIRT</p>
          <h3>Gildan Men&apos;s Crew T-Shirt</h3>
        </BelowImage>
          </GridItem>
          <GridItem>
          <Image src="./images/gallery/gallery5.jpg" alt="" />
          <BelowImage>
          <p>T-SHIRT</p>
          <h3>Yidarton Women&apos;s Comfy</h3>
        </BelowImage>
          </GridItem>
          <GridItem>
          <Image src="./images/gallery/gallery6.jpg" alt="" />
          <BelowImage>
          <p>T-SHIRT</p>
          <h3>Tbmpoy Men&apos;s Tapered</h3>
        </BelowImage>
          </GridItem>
          <GridItem>
          <Image src="./images/gallery/gallery7.jpg" alt="" />
          <BelowImage>
          <p>ECOSMART</p>
          <h3>Womens Top Color</h3>
        </BelowImage>
          </GridItem>
          <GridItem>
          <Image src="./images/gallery/gallery8.jpg" alt="" />
          <BelowImage>
          <p>SMART-SHIRT</p>
          <h3>Open Front knit Sweaters</h3>
        </BelowImage>
          </GridItem>
          <GridItem>
          <Image src="./images/gallery/gallery9.jpg" alt="" />
          <BelowImage>
          <p>TWIST SHIRT</p>
          <h3>Sunnyme Women&apos;s Ponchos</h3>
        </BelowImage>
        </GridItem>
        <GridItem>
          <Image src="./images/gallery/gallery10.jpg" alt="" />
          <BelowImage>
          <p>SHIRT</p>
          <h3>Long Sleeve Leopard T-Shirt</h3>
        </BelowImage>
        </GridItem>
        <GridItem>
          <Image src="./images/gallery/gallery11.jpg" alt="" />
          <BelowImage>
          <p>T-SHIRT</p>
          <h3>Tbmpoy Men&apos;s Tapered</h3>
        </BelowImage>
        </GridItem>
        <GridItem>
          <Image src="./images/gallery/gallery12.jpg" alt="" />
          <BelowImage>
          <p>SMART SHIRT</p>
          <h3>Gildan Men&apos;s Crew T-Shirt</h3>
        </BelowImage>
        </GridItem>

      </GridContainer>

      <PopularProduct />
      <InstagramaImage />
      <Footer />
    </div>
  );
}