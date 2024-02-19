import React from "react";
import {
  StyledImageInstagram,
  StyledInstagramDiv1,
  StyledInstagramImage,
  StyledInstagramIcon1,
  StyledInstagramDiv2,
  StyledInstagramIcon2,
  StyledInstagramDiv3,
  StyledInstagramIcon3,
  StyledInstagramDiv4,
  StyledInstagramIcon4,
  StyledInstagramDiv5,
  StyledInstagramIcon5,
  StyledInstagramDiv6,
  StyledInstagramIcon6,
} from "../styles/InstagramImage.styled";
import InstagramIcon from "@mui/icons-material/Instagram";
import { StyledFollowDiv } from "../styles/Blog.styled";

export default function InstagramaImage() {
  return (
    <div>
            <StyledFollowDiv>
        <InstagramIcon />
        <p>FOLLOW US ON @ LIVANI</p>
      </StyledFollowDiv>
      <StyledImageInstagram>
        <StyledInstagramDiv1>
          <StyledInstagramImage src="./images/instagram/insta1.jpg" alt="" />
          <StyledInstagramIcon1
            src="./images/instagram/instagram_logo_2022.png"
            alt=""
          />
        </StyledInstagramDiv1>
        <StyledInstagramDiv2>
          <StyledInstagramImage src="./images/instagram/insta2.jpg" alt="" />
          <StyledInstagramIcon2
            src="./images/instagram/instagram_logo_2022.png"
            alt=""
          />
        </StyledInstagramDiv2>
        <StyledInstagramDiv3>
          <StyledInstagramImage src="./images/instagram/insta3.jpg" alt="" />
          <StyledInstagramIcon3
            src="./images/instagram/instagram_logo_2022.png"
            alt=""
          />
        </StyledInstagramDiv3>
        <StyledInstagramDiv4>
          <StyledInstagramImage src="./images/instagram/insta9.jpg" alt="" />
          <StyledInstagramIcon4
            src="./images/instagram/instagram_logo_2022.png"
            alt=""
          />
        </StyledInstagramDiv4>
        <StyledInstagramDiv5>
          <StyledInstagramImage src="./images/instagram/insta8.jpg" alt="" />
          <StyledInstagramIcon5
            src="./images/instagram/instagram_logo_2022.png"
            alt=""
          />
        </StyledInstagramDiv5>
        <StyledInstagramDiv6>
          <StyledInstagramImage src="./images/instagram/insta6.jpg" alt="" />
          <StyledInstagramIcon6
            src="./images/instagram/instagram_logo_2022.png"
            alt=""
          />
        </StyledInstagramDiv6>
      </StyledImageInstagram>
    </div>
  );
}
