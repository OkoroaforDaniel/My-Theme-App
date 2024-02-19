import React from "react";
import { CategoriesText } from "../styles/Categories.styled";
import {
  StyledBlogImage,
  StyledBlogDiv,
  StyledBlogDiv2,
  StyledBlogDiv1,
  StyledDateDiv,
  // StyledFollowDiv,
} from "../styles/Blog.styled";
// import InstagramIcon from "@mui/icons-material/Instagram";

export default function Blog() {
  return (
    <div>
      <CategoriesText>
        <h5>Recent Story</h5>
        <h1>From the Livani Blog</h1>
      </CategoriesText>

      <StyledBlogDiv>
        <StyledBlogDiv1>
          <StyledBlogDiv2>
            <StyledBlogImage src="./images/blog/blog1.jpg" alt="" />
            {/* <StyledDateDiv>
              <h4>January 29, 2023</h4>
            </StyledDateDiv> */}
          </StyledBlogDiv2>
          <h5>IDEAS</h5>
          <h3>The #1 eCommerce blog to grow your business</h3>
          <p>Read Story</p>
        </StyledBlogDiv1>
        <StyledBlogDiv1>
          <StyledBlogDiv2>
            <StyledBlogImage src="./images/blog/blog2.jpg" alt="" />
          </StyledBlogDiv2>
          <h5>ADVICE</h5>
          <h3>Latest ecommerce trend: The raise of shoppable posts</h3>
          <p>Read Story</p>
        </StyledBlogDiv1>
        <StyledBlogDiv1>
          <StyledBlogDiv2>
            <StyledBlogImage src="./images/blog/blog3.jpg" alt="" />
          </StyledBlogDiv2>
          <h5>SOCIAL</h5>
          <h3>Building ecommerce wave: Social media shopping</h3>
          <p>Read Story</p>
        </StyledBlogDiv1>
      </StyledBlogDiv>
    </div>
  );
}
