import React, { useState } from "react";
import Link from "next/link";
import {
  StyledNavTwo,
  StyledFlag,
  StyledFlexNavTwo,
  StyledFlexNavTwoSub,
  StyledFlexNavTwoSub2,
  StyledFlexNav,
  StyledMaterialIcon,
  EngLi,
  StyledFlagEng,
  StyledWelCall,
  StyledFlexNavTwoSub3,
} from "../styles/NavTwo.styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import LoginIcon from "@mui/icons-material/Login";

export default function NavBarTwo() {
  return (
    <StyledNavTwo>
      <StyledFlexNavTwo>
        <StyledFlexNavTwoSub>
          <StyledWelCall>
            <li>Welcome to LivaniCall</li>
            <li>Call: +1-541-754-3010</li>
          </StyledWelCall>
          <StyledFlagEng>
            <StyledFlag src="./images/us-flag.jpg" alt="flag" />
            <EngLi>Eng </EngLi>
            <KeyboardArrowDownIcon />
          </StyledFlagEng>
        </StyledFlexNavTwoSub>

        <StyledFlexNavTwoSub2>
          {/* <StyledFlexNavTwoSub3> */}
          <Link href="/#" style={{ textDecoration: "none" }}>
            <StyledFlexNav>
              <StyledMaterialIcon>
                <PersonIcon />
              </StyledMaterialIcon>

              <li>My Account</li>
            </StyledFlexNav>
          </Link>

          {/* <Link href="/Compare" style={{ textDecoration: "none" }}>
          <StyledFlexNav>
            <StyledMaterialIcon>
              <FavoriteBorderIcon />
            </StyledMaterialIcon>
            <li>Wishlist</li>
          </StyledFlexNav>
          </Link> */}

          <Link href="/Compare" style={{ textDecoration: "none" }}>
            <StyledFlexNav>
              <StyledMaterialIcon>
                <MultipleStopIcon />
              </StyledMaterialIcon>
              <li>Compare</li>
            </StyledFlexNav>
          </Link>
          <Link href="/Login" style={{ textDecoration: "none" }}>
            <StyledFlexNav>
              <StyledMaterialIcon>
                <LoginIcon />
              </StyledMaterialIcon>
              <li>Login</li>
            </StyledFlexNav>
          </Link>
          {/* </StyledFlexNavTwoSub3> */}
        </StyledFlexNavTwoSub2>
      </StyledFlexNavTwo>
    </StyledNavTwo>
  );
}
