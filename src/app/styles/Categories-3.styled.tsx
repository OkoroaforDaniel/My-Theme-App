import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 70px;
  margin-bottom: 100px;
  margin-left: 1%;
  margin-right: 1%;

  @media screen and (max-width: 983px) {
    grid-template-columns: repeat(2, 4fr);
  }

  @media screen and (max-width: 570px) {
    grid-template-columns: repeat(1, 4fr);
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.8s ease;
`;

const StyledCategoriesButton1 = styled.button`
  background-color: #F33A6A;
  color: white;
  border: none;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-right: 0px;
  padding-left: 0px;
  width: 180px;
  margin-top: 20px;
  margin-bottom: 20px;
//   opacity: 0;
//   transition: opacity 0.8s ease;
  margin-left: 50%
  transform: translateX(-50%);
`;

const StyledH5H1Button = styled.div`
  margin-top: -120px;
  // padding-bottom: 20px;
  margin-right: 20px;
  text-align: right;
  h5 {
    color: #f33a6a;
  }
`;

const StyledH5H1ButtonWhite = styled.div`
  margin-top: -120px;
  // padding-bottom: 20px;
  margin-right: 20px;
  text-align: right;
  h2 {
    color: white;
  }
  h5 {
    color: white;
  }
`;

const GridItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:hover ${Image} {
    transform: scale(1.1);
  }

  &:hover ${StyledH5H1Button} {
    transform: scale(1.1);
    margin-right: 10%;
  }

  &:hover ${StyledH5H1ButtonWhite} {
    transform: scale(1.1);
    margin-right: 10%;
  }
`;

export {
  GridContainer,
  GridItem,
  Image,
  StyledH5H1ButtonWhite,
  StyledH5H1Button,
  StyledCategoriesButton1,
};
