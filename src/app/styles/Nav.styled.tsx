import styled, { css } from "styled-components";

interface StyledNavProps {
  $isNavSlideVisible: boolean;
}

const StyledNav = styled.nav<StyledNavProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
`;

const StyledNavLogo = styled.div`
padding-left: 10%;
@media screen and (max-width: 1088px) {
  padding-left: 1%;
}
@media screen and (max-width: 985px) {
  padding-left: 10%;
}
@media screen and (max-width: 460px) {
  padding-left: 1%;
}
`

const StyledNavIcon = styled.div`
padding-right: 10%;
  span {
    margin-right: 20px;
  }
  @media screen and (max-width: 1088px) {
    padding-right: 1%;
  }
  @media screen and (max-width: 985px) {
    padding-right: 10%;
    display: flex;
    span {
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 460px) {
    padding-right: 1%;
  }
`;

const StyledUl = styled.ul<{ $isNavVisible: boolean }>`
  list-style: none;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 985px) {
    display: block;
    background-color: white;
    overflow-y: auto;
    // max-height: 500px;
    max-height: ${({ $isNavVisible }) => ($isNavVisible ? "500px" : "0")};
    max-width: 100%;
    margin-top: ${({ $isNavVisible }) => ($isNavVisible ? "550px" : "0")};
    position: ${({ $isNavVisible }) => ($isNavVisible ? "relative" : "absolute")};;
    // margin-top: 550px;
    // display: ${({ $isNavVisible }) => ($isNavVisible ? "block" : "none")};
    padding-left: 5%;
    padding-right: 0%;
    padding-bottom: 5%;
    padding-top: 1%;
    margin-left: -100%;
    margin-right: -100%;
    transition: max-height 0.6s ease;

  }
  @media screen and (max-width: 500px) {
    padding-left: 10%;
    padding-right: -10%;
  }
`;

const StyledLi = styled.li`
  font-weight: 500;
  span {
    position: absolute;
    width: 20px;
  }
  @media screen and (max-width: 985px) {
    // position: relative;
  }
`;

const Logo = styled.img``;


const StyledHandbuger2 = styled.span<{ $isHandbugerVisible : boolean }>`
  display: none;
  // visibility: hidden;
  width: 35px;
  height: 25px;
  background-color: #dddd;
  padding-left: 5px;
  @media screen and (max-width: 985px) {
    // visibility: visible;
    color: #f33a6a;
    display: ${({ $isHandbugerVisible }) => ($isHandbugerVisible ? "none" : "block")};
  }
`;

const StyledHandbuger2Xmark = styled.span<{ $isHandbugerXmarkVisible : boolean }>`
display: none;
// visibility: hidden;
// width: 35px;
// height: 25px;
// background-color: #dddd;
// padding-left: 10px;
@media screen and (max-width: 985px) {
  // font-size: 25px;
  // visibility: visible;
  color: #f33a6a;
  display: ${({ $isHandbugerXmarkVisible }) => ($isHandbugerXmarkVisible ? "block" : "none")};
}
`;

const StyledHomeHover = styled.div`
  position: absolute;
  margin-top: 0px;
  background-color: white;
  width: 15%;
  // padding-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: -999;
  visibility: hidden;
  transition: opacity 0.3s ease;

  @media screen and (max-width: 985px) {
    position: static;
    margin-left: 10px;
    width: 100%;
    display: block;
    z-index: auto;
    visibility: visible;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
    color: gray;
    margin-top: 15px;
    margin-left: 10px;
    font-weight: 500;
    font-size: 14px;

    &:hover {
      color: #f33a6a;
    }
  }
`;
const StyledDottedHr = styled.hr`
  border: none;
  border-top: 1px dotted #202020;
`;

const StyledHomeLi = styled.li`
  margin-right: 50px;
  font-weight: 500;

  span {
    position: absolute;
    width: 20px;
  }
  &:hover ${StyledHomeHover} {
    z-index: 99;
    visibility: visible;
  }
`;
const StyledHomeP1 = styled.div`
  &:hover {
    color: #f33a6a;
  }
  @media screen and (max-width: 985px) {
    font-weight: 700;
    margin-bottom: 20px;

    span {
      display: none;
    }
  }
`;

const StyledHome = styled.div`
  background-color: white;
  &:hover + ${StyledHomeHover} {
    visibility: visible;
  }
  &:hover ${StyledHomeP1} {
    color: #f33a6a;
  }
`;

// My shop style div

const StyledShopHover = styled.div`
  position: absolute;
  margin-top: 0px;
  margin-left: -30%;
  display: flex;
  background-color: white;
  width: 79%;
  padding-bottom: 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: -999;
  visibility: hidden;
  transition: opacity 0.3s ease;
  @media screen and (max-width: 985px) {
    position: static;
    margin-left: 10px;
    width: 100%;
    display: block;
    z-index: auto;
    visibility: visible;
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  p {
    color: gray;
    margin-top: 30px;
    margin-left: 10px;
    font-weight: 500;
    font-size: 14px;
    @media screen and (max-width: 985px) {
      margin-left: 0;
    }

    &:hover {
      color: #f33a6a;
    }
  }
`;

const StyledShopLi = styled.li`
  margin-right: 50px;
  font-weight: 500;

  span {
    position: absolute;
    width: 20px;
  }
  &:hover ${StyledShopHover} {
    z-index: 99;
    // opacity: 1;
    visibility: visible;
  }
`;
const StyledShopP1 = styled.div`
  &:hover {
    color: #f33a6a;
  }
  @media screen and (max-width: 985px) {
    padding-top: 20px;
    padding-bottom: 20px;
    font-weight: 700;

    span {
      display: none;
    }
  }
`;

const StyledShopHoverInner = styled.div`
  // display: flex;
  padding: 50px;
  @media screen and (max-width: 985px) {
    padding: 0;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const StyledShopHr = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(to right, #f33a6a 30%, #dddddd 20%);
  margin-top: 20px;
  margin-bottom: 20px;
  // width: 200px;
`;

// My Pages style div

const StyledPagesHover = styled.div`
  position: absolute;
  display: flex;
  margin-top: 0px;
  background-color: white;
  width: 79%;
  margin-left: -32%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: -999;
  visibility: hidden;
  transition: opacity 0.3s ease;
  @media screen and (max-width: 985px) {
    position: static;
    margin-left: 10px;
    width: 100%;
    display: block;
    z-index: auto;
    visibility: visible;
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
  }

  p {
    margin-bottom: 15px;
    color: gray;
    margin-top: 20px;
    // margin-left: 10px;
    font-weight: 500;
    font-size: 14px;
    @media screen and (max-width: 985px) {
      margin-left: 0;
    }

    &:hover {
      color: #f33a6a;
    }
  }
`;

const StyledPagesLi = styled.li`
  margin-right: 50px;
  font-weight: 500;

  span {
    position: absolute;
    width: 20px;
  }
  &:hover ${StyledPagesHover} {
    z-index: 99;
    visibility: visible;
  }
`;
const StyledPagesP1 = styled.div`
  &:hover {
    color: #f33a6a;
  }
  @media screen and (max-width: 985px) {
    padding-bottom: 20px;
    padding-top: 20px;
    font-weight: 700;

    span {
      display: none;
    }
  }
`;

const StyledPagesHoverInner = styled.div`
  padding: 70px;
  @media screen and (max-width: 985px) {
    padding: 0;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const StyledPagesHr = styled.div`
  border: none;
  height: 1px;
  background: linear-gradient(to right, #f33a6a 30%, #dddddd 20%);
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

// My Women's style div

const StyledWomenHover = styled.div`
  position: absolute;
  display: flex;
  margin-top: 0px;
  background-color: white;
  width: 79%;
  margin-left: -40%;
  padding-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: -999;
  // opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
  @media screen and (max-width: 985px) {
    position: static;
    margin-left: 10px;
    width: 100%;
    display: block;
    z-index: auto;
    visibility: visible;
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
  }

  p {
    margin-bottom: 15px;
    color: gray;
    margin-top: 15px;
    margin-left: 10px;
    font-weight: 500;
    font-size: 14px;
    @media screen and (max-width: 985px) {
      margin-left: 0;
    }

    &:hover {
      color: #f33a6a;
    }
  }
`;

const StyledWomenLi = styled.li`
  margin-right: 50px;
  font-weight: 500;

  span {
    position: absolute;
    width: 20px;
  }
  &:hover ${StyledWomenHover} {
    z-index: 99;
    // opacity: 1;
    visibility: visible;
  }
`;
const StyledWomenP1 = styled.div`
  &:hover {
    color: #f33a6a;
  }
  @media screen and (max-width: 985px) {
    padding-bottom: 20px;
    padding-top: 20px;
    font-weight: 700;
    span {
      display: none;
    }
  }
`;
const StyledWomenHoverInner = styled.div`
  padding: 50px;
  width: 100%;
  @media screen and (max-width: 985px) {
    padding: 0;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const StyledWomenHr = styled.div`
  border: none;
  height: 1px;
  background: linear-gradient(to right, #f33a6a 30%, #dddddd 20%);
  margin-top: 20px;
  margin-bottom: 20px;
  // width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.8s ease;
`;
const StyledWomenButton1 = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  color: black;
  border: none;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-right: 0px;
  padding-left: 0px;
  width: 90%;
  transition: bottom 0.5s ease;
  @media screen and (max-width: 1282px) {
    font-size: 9px;
    font-weight: 900;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  @media screen and (max-width: 985px) {
    font-size: 14px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
`;

const StyledWomenDiv2 = styled.div`
position: relative;
overflow: hidden;
// box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
background-size: cover;
background-position: center;
background-repeat: no-repeat;
// width: 70%;

&:hover {
  ${StyledWomenButton1} {
    bottom: 20px;
  }

&:hover ${Image} {
  transform: scale(1.1);
}
`;

// My Men's style div

const StyledMenHover = styled.div`
  position: absolute;
  display: flex;
  margin-top: 0px;
  background-color: white;
  width: 79%;
  margin-left: -47%;
  // margin-left: -45%;
  padding-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: -999;
  // opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
  @media screen and (max-width: 985px) {
    position: static;
    margin-left: 10px;
    width: 100%;
    display: block;
    z-index: auto;
    visibility: visible;
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
  }

  p {
    margin-bottom: 15px;
    color: gray;
    margin-top: 15px;
    margin-left: 10px;
    font-weight: 500;
    font-size: 14px;
    @media screen and (max-width: 985px) {
      margin-left: 0;
    }

    &:hover {
      color: #f33a6a;
    }
  }
`;

const StyledMenLi = styled.li`
  margin-right: 50px;
  font-weight: 500;

  span {
    position: absolute;
    width: 20px;
  }
  &:hover ${StyledMenHover} {
    z-index: 99;
    // opacity: 1;
    visibility: visible;
  }
`;
const StyledMenP1 = styled.div`
  &:hover {
    color: #f33a6a;
  }
  @media screen and (max-width: 985px) {
    padding-bottom: 20px;
    padding-top: 20px;
    font-weight: 700;
    span {
      display: none;
    }
  }
`;

const StyledMenHoverInner = styled.div`
  padding: 50px;
  width: 100%;
  @media screen and (max-width: 985px) {
    padding: 0;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const StyledMenHr = styled.div`
  border: none;
  height: 1px;
  background: linear-gradient(to right, #f33a6a 30%, #dddddd 20%);
  margin-top: 20px;
  margin-bottom: 20px;
  // width: 200px;
`;

const StyledMenButton1 = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  color: black;
  border: none;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-right: 0px;
  padding-left: 0px;
  width: 90%;
  transition: bottom 0.5s ease;
  @media screen and (max-width: 1282px) {
    font-size: 9px;
    font-weight: 900;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  @media screen and (max-width: 985px) {
    font-size: 14px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
`;

const StyledMenDiv2 = styled.div`
position: relative;
overflow: hidden;
// box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media screen and (max-width: 1282px) {
  // width: 100%;
}

&:hover {
  ${StyledMenButton1} {
    bottom: 20px;
  }

&:hover ${Image} {
  transform: scale(1.1);
}
`;

// My Blog style div

const StyledBlogHover = styled.div`
  position: absolute;
  margin-top: 0px;
  background-color: white;
  width: 15%;
  padding-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: -999;
  // opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
  // padding-top: 30px;
  @media screen and (max-width: 985px) {
    position: static;
    margin-left: 10px;
    width: 100%;
    display: block;
    z-index: auto;
    visibility: visible;
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
  }

  p {
    margin-bottom: 15px;
    color: gray;
    margin-top: 15px;
    margin-left: 10px;
    font-weight: 800;
    font-size: 14px;
    @media screen and (max-width: 985px) {
      margin-left: 0;
    }

    &:hover {
      color: #f33a6a;
    }
  }
`;

const StyledBlogLi = styled.li`
  margin-right: 50px;
  font-weight: 500;

  span {
    position: absolute;
    width: 20px;
  }
  &:hover ${StyledBlogHover} {
    z-index: 99;
    // opacity: 1;
    visibility: visible;
  }
`;
const StyledBlogP1 = styled.div`
  &:hover {
    color: #f33a6a;
  }
  @media screen and (max-width: 985px) {
    padding-bottom: 20px;
    padding-top: 20px;
    font-weight: 700;
    span {
      dispaly: none;
    }
  }
`;
const StyledSaleP1 = styled.div`
  &:hover {
    color: #f33a6a;
  }
  @media screen and (max-width: 985px) {
    padding-bottom: 20px;
    padding-top: 20px;
    span {
      display: none;
    }
  }
`;
const StyledNavSlide = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isVisible }) => ($isVisible ? "0" : "-100%")};
  z-index: 99;
  background-color: white;
  padding: 50px;
  width: 30%;
  height: 100%;
  margin-left: -120px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  // transition: opacity 0.3s ease, visibility 0.3s ease;
  transition: right 0.6s ease;

  p {
    color: gray;
    margin-bottom: 20px;
    line-height: 30px;
  }
  h3 {
    margin-bottom: -15px;
  }
  @media screen and (max-width: 1253px) {
    width: 50%;
  }
  @media screen and (max-width: 740px) {
    width: 70%;
  }
  @media screen and (max-width: 520px) {
    width: 90%;
  }
`;
const StyledNavSlideIcon = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledFontAwesomeIcon = styled.i`
  color: #f33a6a;
  font-size: 20px;
  background-color: whitesmoke;
  //   padding: 3px;
  border-radius: 2px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNewStoreImage = styled.div`
  display: flex;
  margin-bottom: 20px;
  ${Image} {
    width: 70px;
    margin-right: 10px;
  }
`;
const StyledInfo = styled.div`
  margin-bottom: 10px;
`;
const StyledInfoIcon = styled.i`
  margin-right: 10px;
`;

const StyledXmark = styled.i`
  margin-top: 5px;
`;
// const StyledAboutXmark = styled.div`
// display: flex;
// justify-content: space-between;
// `

const StyledAboutXmark = styled.div``;

const StyledAboutXmarkDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
// const  StyledShopNavSlide =styled.div`
// `

const StyledShopAboutXmark = styled.div``;

const StyledShopAboutXmarkDiv = styled.div`
  background-color: #ffb6c1;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  h3 {
    color: gray;
  }
`;

const StyledShopNavSlide = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isVisible }) => ($isVisible ? "0" : "-100%")};
  z-index: 99;
  background-color: white;
  // padding-left: 50px;
  // padding-right: 50px;
  width: 20%;
  height: 100%;
  margin-left: -120px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  // transition: opacity 0.3s ease, visibility 0.3s ease;
  transition: right 0.6s ease;

  p {
    color: gray;
    margin-bottom: 20px;
    line-height: 30px;
  }
  h3 {
    margin-bottom: -15px;
  }
  @media screen and (max-width: 1253px) {
    width: 50%;
  }
  @media screen and (max-width: 740px) {
    width: 60%;
  }
  @media screen and (max-width: 520px) {
    width: 80%;
  }
`;
// const  StyledSearchNavSlide =styled.div`
// `
const StyledSearchAboutXmark = styled.div`
  ${StyledXmark} {
    color: white;
    font-size: 30px;
  }
  &:hover ${StyledXmark} {
    color: #f33a6a;
  }
`;

const StyledSearchAboutXmarkDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const StyledSearchNavSlide = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  // background-color: white;
  right: ${({ $isVisible }) => ($isVisible ? "0" : "-100%")};
  z-index: 99;
  width: 100%;
  height: 100%;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  // transition: opacity 0.3s ease, visibility 0.3s ease;
  transition: right 0.6s ease;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px); /* Use the blur value you prefer */

  p {
    color: gray;
    margin-bottom: 20px;
    line-height: 30px;
  }
  h3 {
    margin-bottom: -15px;
  }
`;


const StyledSearchinput = styled.input`
  padding: 10px;
  // font-size: 16px;
  border: none;
  border-radius: 50px;
  width: 30%;
  height: 50px;

  :: placeholder {
    color: gray;
  }
  @media screen and (max-width: 1253px) {
    width: 50%;
  }
  @media screen and (max-width: 740px) {
    width: 60%;
  }
  @media screen and (max-width: 520px) {
    width: 80%;
  }
`;
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export {
  StyledNav,
  Logo,
  StyledUl,
  StyledLi,
  StyledNavIcon,
  StyledHomeHover,
  StyledDottedHr,
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
};
