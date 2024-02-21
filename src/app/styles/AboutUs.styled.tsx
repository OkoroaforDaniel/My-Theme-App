import styled from "styled-components";

const GridContainer1 = styled.div`
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 100px;
`;

const GridItem2 = styled.div`
  width: 100%;
  margin-top: 100px;
  h3 {
    color: #f33a6a;
  }
  h1 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  p {
    color: gray;
    margin-bottom: 20px;
    line-height: 1.5;
  }
  @media screen and (max-width: 430px) {
    h1 {
      font-size: 19px;
    }
    h4 {
      font-size: 14px;
    }
    p {
      font-size: 14px;
    }
  }
`;

const GridItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  margin-bottom: 50px;
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
    ${GridItem2} {
      margin-top: 0;
    }
  }
`;

const Image = styled.img``;

const GridItem1 = styled.div`
  width: 100%;
  ${Image} {
    border-radius: 10px;
    width: 100%;
  }
`;

const P1 = styled.div`
  h4 {
    color: black;
    margin-bottom: 20px;
  }
`;

const GridItem3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 680px) {
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 530px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridItem4 = styled.div`
  p {
    line-height: 2.3;
    &:hover span {
      background-color: #f33a6a;
    }
    span {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      display: inline-block;
      background-color: #dddddd;
      transition: 0.5s ease;
      &:hover {
        background-color: #f33a6a;
      }
    }
  }
`;

const GridItem5 = styled.div`
  p {
    line-height: 2.3;
    &:hover span {
      background-color: #f33a6a;
    }
    span {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      display: inline-block;
      background-color: #dddddd;
      transition: 0.5s ease;
      &:hover {
        background-color: #f33a6a;
      }
    }
  }
`;
const GridItem6 = styled.div`
  p {
    line-height: 2.3;
    &:hover span {
      background-color: #f33a6a;
    }
    span {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      display: inline-block;
      background-color: #dddddd;
      transition: 0.5s ease;
      &:hover {
        background-color: #f33a6a;
      }
    }
  }
`;

const AboutHr = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(to right, #f33a6a 10%, #dddddd 20%);
  margin-bottom: 20px;
  margin-top: 10px;
`;

export {
  GridContainer1,
  GridItem,
  GridItem1,
  GridItem2,
  GridItem3,
  GridItem4,
  GridItem5,
  GridItem6,
  P1,
  AboutHr,
  Image,
};
