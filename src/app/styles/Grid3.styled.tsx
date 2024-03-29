import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  gap: 20px;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 100px;
  @media screen and (max-width: 1139px) {
    grid-template-columns: repeat(2, 2fr);
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 4fr);
  }
`;

const BelowImage = styled.div`
  position: absolute;
  z-index: 99;
  border-radius: 5px;
  background-color: #f5f5f5;
  margin-top: -30px;
  width: 95%;
  padding-left: 10px;
  margin-left: 20px;
  transition: 0.8s ease;

  right: 2.5%;

  p {
    margin-bottom: 10px;
    margin-top: 10px;
    &:hover {
      color: #f33a6a;
    }
    @media screen and (max-width: 386px) {
      font-size: 12px;
    }
    @media screen and (max-width: 259px) {
      font-size: 10px;
    }
  }
  span {
    color: gray;
  }
`;

const Image = styled.img``;

const GridItem = styled.div`
  position: relative;
  margin-bottom: 30%;
  z-index: 1;

  &:hover ${BelowImage} {
    margin-top: -50px;
  }

  ${Image} {
    width: 100%;
  }
`;

export { GridContainer, GridItem, BelowImage, Image };
