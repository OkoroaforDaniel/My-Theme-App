"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import {
  StyledNav,
  Logo,
  StyledUl,
  StyledLi,
  StyledNavIcon,
  StyledDottedHr,
  StyledHomeHover,
  StyledHomeLi,
  StyledHome,
  StyledHomeP1,
  StyledShopLi,
  StyledShopP1,
  StyledShopHover,
  StyledPagesLi,
  StyledPagesP1,
  StyledPagesHover,
  StyledPagesHoverInner,
  StyledPagesHr,
  StyledWomenLi,
  StyledWomenP1,
  StyledWomenHover,
  StyledWomenHoverInner,
  StyledWomenHr,
  StyledWomenDiv2,
  StyledWomenButton1,
  StyledMenLi,
  StyledMenP1,
  StyledMenHover,
  StyledMenHoverInner,
  StyledMenHr,
  StyledMenDiv2,
  StyledMenButton1,
  StyledBlogLi,
  StyledBlogP1,
  StyledBlogHover,
  StyledShopHoverInner,
  StyledShopHr,
  Image,
  StyledSaleP1,
  StyledNavSlide,
  StyledNavSlideIcon,
  StyledFontAwesomeIcon,
  StyledNewStoreImage,
  StyledInfo,
  StyledInfoIcon,
  StyledXmark,
  StyledAboutXmark,
  StyledShopNavSlide,
  StyledShopAboutXmark,
  StyledSearchAboutXmark,
  StyledSearchNavSlide,
  StyledSearchAboutXmarkDiv,
  StyledShopAboutXmarkDiv,
  StyledAboutXmarkDiv,
  StyledSearchinput,
  CenteredContainer,
  StyledHandbuger2,
  StyledHandbuger2Xmark,
  StyledNavLogo,
} from "../styles/Nav.styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DehazeIcon from "@mui/icons-material/Dehaze";

export default function Page() {
  const [isNavSlideVisible, setIsNavSlideVisible] = useState(false);
  const [isNavShopSlideVisible, setIsNavShopSlideVisible] = useState(false);
  const [isNavSearchSlideVisible, setIsNavSearchSlideVisible] = useState(false);
  const [isStyledUlVisible, setIsStyledUlVisible] = useState(false);

  const handleDehazeIconClick = () => {
    setIsNavSlideVisible(true);
  };

  const handleDehazeIconClick2 = () => {
    setIsStyledUlVisible(true);
    // setIsStyledUlVisible(!isStyledUlVisible);
  };
  const handleDehazeIconXmarkClick2 = () => {
    setIsStyledUlVisible(false);
  };

  const handleAboutXmarkClick = () => {
    setIsNavSlideVisible(false);
  };

  const handleWorkOutlineIcon = () => {
    setIsNavShopSlideVisible(true);
  };

  const handleShopAboutXmarkClick = () => {
    setIsNavShopSlideVisible(false);
  };

  const handleSearchIcon = () => {
    setIsNavSearchSlideVisible(true);
  };

  const handleSearchAboutXmarkClick = () => {
    setIsNavSearchSlideVisible(false);
  };

  return (
    <StyledNav $isNavSlideVisible={isNavSlideVisible}>
      <StyledNavLogo>
        <Logo src="./images/logo.png" alt="logo" />
      </StyledNavLogo>

      {/* <StyledUl isNavSlideVisible={isNavSlideVisible}> */}
      <StyledUl $isNavVisible={isStyledUlVisible}>
        <StyledHomeLi>
          <StyledHome>
            <StyledHomeP1>
              Home
              <span>
                <KeyboardArrowDownIcon />
              </span>
            </StyledHomeP1>
          </StyledHome>

          <StyledHomeHover>
            {/* <p>Fashion Style One</p>
            <StyledDottedHr />

            <Link
              href="/Store/fashion-style-two"
              style={{ textDecoration: "none" }}
            >
              <p>Fashion Style Two</p>
            </Link>

            <StyledDottedHr />

            <Link
              href="/Store/fashion-style-three"
              style={{ textDecoration: "none" }}
            >
              <p>Fashion Style Three</p>
            </Link>

            <StyledDottedHr />
            <Link
              href="/Store/fashion-style-four"
              style={{ textDecoration: "none" }}
            >
              <p>Fashion Style Four</p>
            </Link>
            <StyledDottedHr />
            <Link
              href="/Store/fashion-style-five"
              style={{ textDecoration: "none" }}
            >
              <p>Fashion Style Five</p>
            </Link>
            <StyledDottedHr />
            <Link
              href="/covid-19-store"
              style={{ textDecoration: "none" }}
            >
              <p>Covid-19 Store</p>
            </Link>
            <StyledDottedHr /> */}
            <Link href="/grocery-store" style={{ textDecoration: "none" }}>
              <p>Grocery Store</p>
            </Link>
            <StyledDottedHr />
            <Link href="/electronics-store" style={{ textDecoration: "none" }}>
              <p>Electronics Store</p>
            </Link>
            <StyledDottedHr />
            <Link href="/furniture-store" style={{ textDecoration: "none" }}>
              <p>Furniture Store</p>
            </Link>
            <StyledDottedHr />
            <Link href="/jewelry-store" style={{ textDecoration: "none" }}>
              <p>Jewelry Store</p>
            </Link>
          </StyledHomeHover>
        </StyledHomeLi>

        <StyledLi>
          <StyledShopLi>
            <StyledShopP1>
              Shop
              <span>
                <KeyboardArrowDownIcon />
              </span>
            </StyledShopP1>

            <StyledShopHover>
              {/* <StyledShopHoverInner> */}
              <StyledShopHoverInner>
                <h5>SHOP STYLES</h5>
                <StyledShopHr />
                {/* <Link
                  href="/Left-Sidebar"
                  style={{ textDecoration: "none" }}
                >
                  <p>Left Sidebar</p>
                </Link>
                <Link
                  href="/Categories-1"
                  style={{ textDecoration: "none" }}
                >
                  <p>Left Sidebar with Categories</p>
                </Link> */}
                <Link href="/Categories-2" style={{ textDecoration: "none" }}>
                  <p>Categories (2 in Row)</p>
                </Link>
                <Link href="/Categories-3" style={{ textDecoration: "none" }}>
                  <p>Categories Full width (3 in Row)</p>
                </Link>
              </StyledShopHoverInner>

              <StyledShopHoverInner>
                <h5>SHOP STYLES 2</h5>
                <StyledShopHr />
                {/* <Link
                  href="/Right-Sidebar"
                  style={{ textDecoration: "none" }}
                >
                  <p>Right Sidebar</p>
                </Link>
                <Link
                  href="/Right-Sidebar-Categories"
                  style={{ textDecoration: "none" }}
                >
                  <p>Right Sidebar with Categories</p>
                </Link> */}
                <Link
                  href="/Categories-Fullwidth"
                  style={{ textDecoration: "none" }}
                >
                  <p>Categories Fullwidth</p>
                </Link>
                <Link href="/Grid-3" style={{ textDecoration: "none" }}>
                  <p>Grid (3 in Row)</p>
                </Link>
              </StyledShopHoverInner>

              <StyledShopHoverInner>
                <h5>SHOP STYLES 3</h5>
                <StyledShopHr />
                {/* <Link
                  href="/Without-Sidebar"
                  style={{ textDecoration: "none" }}
                >
                  <p>Without Sidebar</p>
                </Link>

                <Link
                  href="/Sidebar-Full-Width"
                  style={{ textDecoration: "none" }}
                >
                  <p>With Sidebar Full Width</p>
                </Link> */}

                <Link href="/Categories-1" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>Categories (1 in Row)</p>
                </Link>

                <Link href="/Grid-4" style={{ textDecoration: "none" }}>
                  <p>Grid Full Width (4 in Row)</p>
                </Link>
              </StyledShopHoverInner>

              <StyledShopHoverInner>
                <h5>SHOP STYLES 4</h5>
                <StyledShopHr />
                <Link href="/Cart" style={{ textDecoration: "none" }}>
                  <p>Cart</p>
                </Link>

                <Link href="/Checkout" style={{ textDecoration: "none" }}>
                  <p>Checkout</p>
                </Link>

                {/* <Link
                  href="/My-Account"
                  style={{ textDecoration: "none" }}
                >
                  <p>My Account</p>
                </Link>

                <Link
                  href="/Sizing-Guide"
                  style={{ textDecoration: "none" }}
                >
                  <p>Sizing Guide</p>
                </Link> */}
              </StyledShopHoverInner>

              {/* </StyledShopHoverInner> */}
            </StyledShopHover>
          </StyledShopLi>
        </StyledLi>

        <StyledLi>
          <StyledPagesLi>
            <StyledPagesP1>
              Pages
              <span>
                <KeyboardArrowDownIcon />
              </span>
            </StyledPagesP1>

            <StyledPagesHover>
              <StyledPagesHoverInner>
                <h5>PAGES</h5>
                <StyledPagesHr />
                <Link href="/About-Us" style={{ textDecoration: "none" }}>
                  <p>About Us</p>
                </Link>

                <Link
                  href="/Customer-Service"
                  style={{ textDecoration: "none" }}
                >
                  <p>Customer Service</p>
                </Link>

                <Link href="/Login" style={{ textDecoration: "none" }}>
                  <p>Login</p>
                </Link>

                <Link href="/Signup" style={{ textDecoration: "none" }}>
                  <p>Signup</p>
                </Link>

                {/* <Link href="/FAQ's" style={{ textDecoration: "none" }}>
                  <p>FAQ's</p>
                </Link>

                <Link
                  href="/404-Error"
                  style={{ textDecoration: "none" }}
                >
                  <p>404 Error</p>
                </Link> */}

                {/* <Link
                  href="/Coming-Soon"
                  style={{ textDecoration: "none" }}
                >
                  <p>Coming Soon</p>
                </Link> */}

                <Link href="/Tracking-Order" style={{ textDecoration: "none" }}>
                  <p>Tracking Order</p>
                </Link>

                {/* <Link
                  href="/Contact-Us"
                  style={{ textDecoration: "none" }}
                >
                  <p>Contact Us</p>
                </Link> */}
              </StyledPagesHoverInner>

              <StyledPagesHoverInner>
                <div>
                  <h5>GALLERY</h5>
                  <StyledPagesHr />
                  <Link href="/Page-Grid-2" style={{ textDecoration: "none" }}>
                    <p>Grid (2 in Row)</p>
                  </Link>

                  <Link href="/Page-Grid-3" style={{ textDecoration: "none" }}>
                    <p>Grid (3 in Row)</p>
                  </Link>

                  <Link
                    href="/Page-Grid-3-Full"
                    style={{ textDecoration: "none" }}
                  >
                    <p>Grid Full Width (3 in Row)</p>
                  </Link>

                  <Link href="/Page-Grid-4" style={{ textDecoration: "none" }}>
                    <p>Grid Full Width (4 in Row)</p>
                  </Link>

                  <h5>MY ACCOUNT</h5>
                  <StyledPagesHr />
                  <Link href="/Login" style={{ textDecoration: "none" }}>
                    <p>Login</p>
                  </Link>
                  <Link href="/Signup" style={{ textDecoration: "none" }}>
                    <p>Signup</p>
                  </Link>
                </div>
              </StyledPagesHoverInner>

              <StyledPagesHoverInner>
                <div>
                  <h5>CATEGORIES</h5>
                  <StyledPagesHr />
                  <Link href="/Categories-2" style={{ textDecoration: "none" }}>
                    <p>Categories (2 in Row)</p>
                  </Link>

                  <Link
                    href="/Categories-Fullwidth"
                    style={{ textDecoration: "none" }}
                  >
                    <p>Categories Full Width</p>
                  </Link>

                  <Link href="/Categories-1" style={{ textDecoration: "none" }}>
                    <p>Categories (1 in Row)</p>
                  </Link>

                  <Link href="/Categories-3" style={{ textDecoration: "none" }}>
                    <p>Categories Full Width (3 in Row)</p>
                  </Link>

                  <h5>LOOKBOOK</h5>
                  <StyledPagesHr />
                  <Link href="/Grid-3" style={{ textDecoration: "none" }}>
                    <p>Grid (3 in Row)</p>
                  </Link>

                  <Link href="/Grid-4" style={{ textDecoration: "none" }}>
                    <p>Grid Full Width (4 in Row)</p>
                  </Link>
                </div>
              </StyledPagesHoverInner>

              <StyledPagesHoverInner>
                <h5>SHOP</h5>
                <StyledPagesHr />
                <Link href="/Cart" style={{ textDecoration: "none" }}>
                  <p>Cart</p>
                </Link>

                <Link href="/Checkout" style={{ textDecoration: "none" }}>
                  <p>Checkout</p>
                </Link>

                <Link href="/Compare" style={{ textDecoration: "none" }}>
                  <p>Compare</p>
                </Link>

                <Link href="/" style={{ textDecoration: "none" }}>
                  <p>My Account</p>
                </Link>

                {/* <Link
                  href="/My-Pages/Sizing-Guide"
                  style={{ textDecoration: "none" }}
                >
                  <p>Sizing Guide</p>
                </Link> */}

                <Link href="/Tracking-Order" style={{ textDecoration: "none" }}>
                  <p>Tracking Order</p>
                </Link>

                {/* <Link
                  href="/Coming-Soon"
                  style={{ textDecoration: "none" }}
                >
                  <p>Coming Soon</p>
                </Link> */}

                <Link
                  href="/Customer-Service"
                  style={{ textDecoration: "none" }}
                >
                  <p>Customer Service</p>
                </Link>

                {/* <Link
                  href="/My-Pages/Contact-Us"
                  style={{ textDecoration: "none" }}
                >
                  <p>Contact Us</p>
                </Link> */}
              </StyledPagesHoverInner>
            </StyledPagesHover>
          </StyledPagesLi>
        </StyledLi>

        <StyledLi>
          <StyledWomenLi>
            <StyledWomenP1>
              Women&apos;s
              <span>
                <KeyboardArrowDownIcon />
              </span>
            </StyledWomenP1>

            <StyledWomenHover>
              <StyledWomenHoverInner>
                <h5>SHOP STYLES</h5>
                <StyledShopHr />
                {/* <Link
                  href="/Shop/Left-Sidebar"
                  style={{ textDecoration: "none" }}
                >
                  <p>Left Sidebar</p>
                </Link>
                <Link
                  href="/Shop/Categories-1"
                  style={{ textDecoration: "none" }}
                >
                  <p>Left Sidebar with Categories</p>
                </Link> */}
                <Link href="/Categories-2" style={{ textDecoration: "none" }}>
                  <p>Categories (2 in Row)</p>
                </Link>
                <Link href="/Categories-3" style={{ textDecoration: "none" }}>
                  <p>Categories Full width (3 in Row)</p>
                </Link>
              </StyledWomenHoverInner>

              <StyledWomenHoverInner>
                <h5>SHOP STYLES 2</h5>
                <StyledWomenHr />
                {/* <Link
                  href="/Shop/Right-Sidebar"
                  style={{ textDecoration: "none" }}
                >
                  <p>Right Sidebar</p>
                </Link>
                <Link
                  href="/Shop/Right-Sidebar-Categories"
                  style={{ textDecoration: "none" }}
                >
                  <p>Right Sidebar with Categories</p>
                </Link> */}
                <Link
                  href="/Categories-Fullwidth"
                  style={{ textDecoration: "none" }}
                >
                  <p>Categories Fullwidth</p>
                </Link>
                <Link href="/Grid-3" style={{ textDecoration: "none" }}>
                  <p>Grid (3 in Row)</p>
                </Link>
              </StyledWomenHoverInner>

              <StyledWomenHoverInner>
                <h5>SHOP STYLES 3</h5>
                <StyledWomenHr />
                {/* <Link
                  href="/Shop/Without-Sidebar"
                  style={{ textDecoration: "none" }}
                >
                  <p>Without Sidebar</p>
                </Link>

                <Link
                  href="/Shop/Sidebar-Full-Width"
                  style={{ textDecoration: "none" }}
                >
                  <p>With Sidebar Full Width</p>
                </Link> */}

                <Link href="/Categories-1" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>Categories (1 in Row)</p>
                </Link>

                <Link href="/Grid-4" style={{ textDecoration: "none" }}>
                  <p>Grid Full Width (4 in Row)</p>
                </Link>
              </StyledWomenHoverInner>

              <StyledWomenHoverInner>
                <StyledWomenDiv2>
                  <Image
                    src="./images/categories/categories3.jpg"
                    alt="Image 3"
                  />
                  <StyledWomenButton1>POPULAR PRODUCT</StyledWomenButton1>
                </StyledWomenDiv2>
              </StyledWomenHoverInner>
            </StyledWomenHover>
          </StyledWomenLi>
        </StyledLi>

        <StyledLi>
          <StyledMenLi>
            <StyledMenP1>
              Men&apos;s
              <span>
                <KeyboardArrowDownIcon />
              </span>
            </StyledMenP1>

            <StyledMenHover>
              <StyledMenHoverInner>
                <h5>SHOP STYLES</h5>
                <StyledShopHr />
                {/* <Link
                  href="/Shop/Left-Sidebar"
                  style={{ textDecoration: "none" }}
                >
                  <p>Left Sidebar</p>
                </Link>
                <Link
                  href="/Shop/Categories-1"
                  style={{ textDecoration: "none" }}
                >
                  <p>Left Sidebar with Categories</p>
                </Link> */}
                <Link href="/Categories-2" style={{ textDecoration: "none" }}>
                  <p>Categories (2 in Row)</p>
                </Link>
                <Link href="/Categories-3" style={{ textDecoration: "none" }}>
                  <p>Categories Full width (3 in Row)</p>
                </Link>
              </StyledMenHoverInner>

              <StyledMenHoverInner>
                <h5>SHOP STYLES 2</h5>
                <StyledMenHr />
                {/* <Link
                  href="/Shop/Right-Sidebar"
                  style={{ textDecoration: "none" }}
                >
                  <p>Right Sidebar</p>
                </Link>
                <Link
                  href="/Shop/Right-Sidebar-Categories"
                  style={{ textDecoration: "none" }}
                >
                  <p>Right Sidebar with Categories</p>
                </Link> */}
                <Link
                  href="/Categories-Fullwidth"
                  style={{ textDecoration: "none" }}
                >
                  <p>Categories Fullwidth</p>
                </Link>
                <Link href="/Grid-3" style={{ textDecoration: "none" }}>
                  <p>Grid (3 in Row)</p>
                </Link>
              </StyledMenHoverInner>

              <StyledMenHoverInner>
                <h5>SHOP STYLES 3</h5>
                <StyledMenHr />
                {/* <Link
                  href="/Shop/Without-Sidebar"
                  style={{ textDecoration: "none" }}
                >
                  <p>Without Sidebar</p>
                </Link>

                <Link
                  href="/Shop/Sidebar-Full-Width"
                  style={{ textDecoration: "none" }}
                >
                  <p>With Sidebar Full Width</p>
                </Link> */}

                <Link href="/Categories-1" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>Categories (1 in Row)</p>
                </Link>

                <Link href="/Grid-4" style={{ textDecoration: "none" }}>
                  <p>Grid Full Width (4 in Row)</p>
                </Link>
              </StyledMenHoverInner>

              <StyledMenHoverInner>
                <StyledMenDiv2>
                  <Image
                    src="./images/categories/categories4.jpg"
                    alt="Image 3"
                  />
                  <StyledMenButton1>POPULAR PRODUCT</StyledMenButton1>
                </StyledMenDiv2>
              </StyledMenHoverInner>
            </StyledMenHover>
          </StyledMenLi>
        </StyledLi>

        {/* <StyledLi>
          <StyledBlogLi>
            <StyledBlogP1>
              Blog
              <span>
                <KeyboardArrowDownIcon />
              </span>
            </StyledBlogP1>

            <StyledBlogHover>
            <Link href="/Blog-1" style={{ textDecoration: "none" }}>
            <p>Grid (2 in Row)</p>
            </Link>
              
              <StyledDottedHr />
              <Link href="/Blog-2" style={{ textDecoration: "none" }}>
              <p>Grid (3 in Row)</p>
              </Link>
              
              <StyledDottedHr />
              <Link href="/Blog-3" style={{ textDecoration: "none" }}>
              <p>Grid (4 in Row)</p>
              </Link>
              
              <StyledDottedHr />
              <Link href="/Blog-4" style={{ textDecoration: "none" }}>
              <p>Grid (Full width)</p>
              </Link>
              
              <StyledDottedHr />
              <Link href="/Blog-5" style={{ textDecoration: "none" }}>
              <p>Right Sidebar</p>
              </Link>
              
              <StyledDottedHr />
              <Link href="/Blog-6" style={{ textDecoration: "none" }}>
              <p>Single Post</p>
              </Link>
              
            </StyledBlogHover>
          </StyledBlogLi>
        </StyledLi> */}

        <StyledLi>
          <StyledSaleP1>
            Sale
            <span>?</span>
          </StyledSaleP1>
        </StyledLi>
      </StyledUl>

      <StyledNavIcon>
        <span>
          <SearchIcon onClick={handleSearchIcon} />
        </span>

        <span>
          <WorkOutlineIcon onClick={handleWorkOutlineIcon} />
        </span>

        <span onClick={handleDehazeIconClick}>
          <DehazeIcon />
        </span>

        {/* <span > */}
        <StyledHandbuger2
          $isHandbugerVisible={isStyledUlVisible}
          onClick={handleDehazeIconClick2}
        >
          <DehazeIcon />
        </StyledHandbuger2>

        <StyledHandbuger2Xmark
          $isHandbugerXmarkVisible={isStyledUlVisible}
          onClick={handleDehazeIconXmarkClick2}
        >
          <StyledXmark className="fa-solid fa-xmark"></StyledXmark>
        </StyledHandbuger2Xmark>

        {/* </span> */}
      </StyledNavIcon>

      {/* handleDehazeIconClick */}

      <StyledNavSlide $isVisible={isNavSlideVisible}>
        <StyledAboutXmarkDiv>
          <h3>About The Store</h3>
          <StyledAboutXmark onClick={handleAboutXmarkClick}>
            <StyledXmark className="fa-solid fa-xmark"></StyledXmark>
          </StyledAboutXmark>
        </StyledAboutXmarkDiv>
        <StyledShopHr />
        <p>
          One of the most popular on the web is shopping. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <StyledInfo>
          <StyledInfoIcon className="fa-solid fa-location-dot"></StyledInfoIcon>
          <span>Wonder Street, USA, New York</span>
        </StyledInfo>

        <StyledInfo>
          <StyledInfoIcon className="fa-solid fa-phone-volume"></StyledInfoIcon>
          <span>+1-541-754-3010</span>
        </StyledInfo>

        <StyledInfo>
          <StyledInfoIcon className="fa-regular fa-envelope"></StyledInfoIcon>
          <span>hello@livani.com</span>
        </StyledInfo>

        <StyledNavSlideIcon>
          <StyledFontAwesomeIcon className="fa-brands fa-x-twitter"></StyledFontAwesomeIcon>
          <StyledFontAwesomeIcon className="fa-brands fa-facebook-f"></StyledFontAwesomeIcon>
          <StyledFontAwesomeIcon className="fa-brands fa-instagram"></StyledFontAwesomeIcon>
          <StyledFontAwesomeIcon className="fa-brands fa-linkedin-in"></StyledFontAwesomeIcon>
          <StyledFontAwesomeIcon className="fa-brands fa-pinterest-p"></StyledFontAwesomeIcon>
        </StyledNavSlideIcon>

        <h3>New In Store</h3>
        <StyledShopHr />
        <StyledNewStoreImage>
          <Image src="./images/products/img1.jpg" alt="" />
          <Image src="./images/products/img2.jpg" alt="" />
          <Image src="./images/products/img3.jpg" alt="" />
          <Image src="./images/products/img4.jpg" alt="" />
        </StyledNewStoreImage>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h3>SHOP NOW</h3>
      </StyledNavSlide>

      {/* handleWorkOutlineIcon */}

      <StyledShopNavSlide $isVisible={isNavShopSlideVisible}>
        <StyledShopAboutXmarkDiv>
          <h3>No Item Available</h3>
          <StyledShopAboutXmark onClick={handleShopAboutXmarkClick}>
            <StyledXmark className="fa-solid fa-xmark"></StyledXmark>
          </StyledShopAboutXmark>
        </StyledShopAboutXmarkDiv>
      </StyledShopNavSlide>

      {/* handleSearchIcon */}

      <StyledSearchNavSlide $isVisible={isNavSearchSlideVisible}>
        <StyledSearchAboutXmarkDiv>
          <CenteredContainer>
            <StyledSearchinput placeholder="Search here..." />
          </CenteredContainer>

          <StyledSearchAboutXmark onClick={handleSearchAboutXmarkClick}>
            <StyledXmark className="fa-solid fa-xmark"></StyledXmark>
          </StyledSearchAboutXmark>
        </StyledSearchAboutXmarkDiv>
      </StyledSearchNavSlide>
    </StyledNav>
  );
}
