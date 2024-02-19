import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 100px;
  margin-left: 1%;
  margin-right: 1%;
  @media screen and (max-width: 969px) {
    grid-template-columns: repeat(1, 4fr);
  }

  @media screen and (max-width: 567px) {
    grid-template-columns: repeat(1, 4fr);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.8s ease;
`;
const StyledCategoriesButton1 = styled.button`
  position: absolute;
  background-color: white;
  color: black;
  border: none;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 20px;
  // width: 180px;
  margin-top: -61%;
  margin-bottom: 20px;
  font-weight: bold;
  transition: 0.9s ease;
  font-style: italic;
  font-size: 16px;
`;

const StyledCategoriesButton5 = styled.button`
  position: absolute;
  background-color: white;
  color: black;
  border: none;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 20px;
  // width: 180px;
  margin-top: -55%;
  margin-bottom: 20px;
  font-weight: bold;
  transition: 0.9s ease;
  font-style: italic;
  font-size: 16px;
`;

const StyledCategoriesButton8 = styled.button`
  position: absolute;
  background-color: white;
  color: black;
  border: none;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 20px;
  // width: 180px;
  margin-top: -28%;
  margin-bottom: 20px;
  font-weight: bold;
  transition: 0.9s ease;
  font-style: italic;
  font-size: 16px;
`;

const GridItem1 = styled.div`
  position: relative;
  overflow: hidden;
  &:hover ${Image} {
    transform: scale(1.1);
  }
  &:hover ${StyledCategoriesButton1} {
    background-color: #f33a6a;
    color: white;
  }
`;
const GridItem2 = styled.div``;
const GridItem3 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 567px) {
    grid-template-columns: repeat(1, 4fr);
  }
`;
const GridItem4 = styled.div`
  position: relative;
  overflow: hidden;
  &:hover ${Image} {
    transform: scale(1.1);
  }
  &:hover ${StyledCategoriesButton5} {
    background-color: #f33a6a;
    color: white;
  }
`;
const GridItem5 = styled.div`
  position: relative;
  overflow: hidden;
  &:hover ${Image} {
    transform: scale(1.1);
  }
  &:hover ${StyledCategoriesButton5} {
    background-color: #f33a6a;
    color: white;
  }
`;
const GridItem6 = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  &:hover ${Image} {
    transform: scale(1.1);
  }
  &:hover ${StyledCategoriesButton8} {
    background-color: #f33a6a;
    color: white;
  }
`;

export {
  GridContainer,
  GridItem1,
  GridItem2,
  GridItem3,
  GridItem4,
  GridItem5,
  GridItem6,
  Image,
  StyledCategoriesButton1,
  StyledCategoriesButton5,
  StyledCategoriesButton8,
};
