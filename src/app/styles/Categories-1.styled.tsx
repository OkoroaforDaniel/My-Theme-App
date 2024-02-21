import styled from "styled-components";

const GridContainer = styled.div`
  margin-left: 10%;
  margin-right: 20%;
  margin-bottom: 100px;
  @media screen and (max-width: 1136px) {
    margin-right: 10%;
  }
`;

const Image = styled.img``;

const GridItem = styled.div`
  position: relative;
  z-index: 1;
  ${Image} {
    width: 100%;
    border-radius: 5px;
  }
`;

const ImageSideDiv = styled.div`
  position: absolute;
  z-index: 99;
  background-color: white;
  border-radius: 5px;
  margin-top: -40%;
  left: 75%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  padding: 40px;
  h2 {
    margin-bottom: 10px;
  }
  button {
    background-color: #f33a6a;
    color: white;
    border: none;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right: 0px;
    padding-left: 0px;
    width: 180px;
    // margin-top: 20px;
    // margin-bottom: 20px;
    transition: opacity 0.8s ease;
    // margin-left: 50%
  }
  p {
    color: gray;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1136px) {
    display: none;
  }
`;

export { GridContainer, GridItem, ImageSideDiv, Image };
