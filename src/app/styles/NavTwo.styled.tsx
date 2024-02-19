import styled from "styled-components";

const StyledNavTwo = styled.div`
  background-color: black;
  // margin: 0;
  padding: 0;
  color: white;
//   width: 100vw;
  height: 50px;
  font-size: 13px;
  font-weight: bold;
  // padding-top: 10px;
  @media screen and (max-width: 1282px) {
    padding-bottom: 70px;
  }
  @media screen and (max-width: 985px) {
    padding-bottom: 80px;
    width: 100%;
  }
  @media screen and (max-width: 458px) {
    padding-bottom: 100px;
    
  }
  @media screen and (max-width: 334px) {
    padding-bottom: 120px;
  }
  @media screen and (max-width: 326px) {
    padding-bottom: 150px;
  }
`;

const StyledFlag = styled.img`
  width: 30px;
  height: 20px;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 2px;
  border: 2px solid white;
  @media screen and (max-width: 1282px) {
    // margin-left: -10px;
  }
`;

const StyledFlexNavTwo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
  list-style: none;
  padding-top: 10px;
  @media screen and (max-width: 1282px) {
    display: flex;
    flex-direction: column;
    // margin-left: 30%;
    // margin-right: 30%;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 1199px) {
    // margin-left: 25%;
    // margin-right: 25%;
  }
  @media screen and (max-width: 875px) {
    // margin-left: 20%;
    // margin-right: 20%;
  }
  @media screen and (max-width: 727px) {
    // margin-left: 15%;
    // margin-right: 15%;
  }
  @media screen and (max-width: 588px) {
    // margin-left: 5%;
    // margin-right: 5%;
  }
  @media screen and (max-width: 458px) {
    // margin-left: 1%;
    // margin-right: 1%;
    
  }
`;
const EngLi = styled.div`
margin-top: 5px;
@media screen and (max-width: 1282px) {
    margin-right: -5%;
    margin-left: -5%;
    margin-top: 5px;
}

`

const StyledFlexNavTwoSub = styled.div`
  display: flex;
  justify-content: space-between;
  list-style: none;
  li {
    margin-right: 10px;
    padding-top: 5px;
    color: #d3d3d3;
  }
  span {
    color: gray;
    font-size: 10px;
    margin-left: 10px;
  }
  @media screen and (max-width: 1282px) {
    margin-bottom: 10px;

    KeyboardArrowDownIcon {
        margin-left: -50px;
    }
  }
  @media screen and (max-width: 458px) {
    display: block;
    
  }
`;
const StyledFlexNavTwoSub2 = styled.div`
  display: flex;
  justify-content: space-between;
  list-style: none;
  li {
    margin-right: 20px;
  }
  span {
    width: 20px;
  }
  @media screen and (max-width: 1282px) {
    li {
        // margin-left: -10px;
    }
    StyledMaterialIcon {
        // margin-left: -100px;
    }
  }
  @media screen and (max-width: 326px) {
    // display: block;
  }
  @media screen and (max-width: 340px) {
    margin-right: 0;
    margin-left: 0;
  }
`;
const StyledFlexNav = styled.div`
  display: flex;
  justify-content: space-between;

  li {
    margin-top: 3px;
    color: #d3d3d3;
    &:hover {
      color: #f33a6a;
    }
  }

  span {
    color: gray;
    font-size: 10px;
    margin-left: 10px;
    &:hover {
      color: #f33a6a;
    }
  }
  @media screen and (max-width: 498px) {
    margin-right: -20px;
    margin-left: -5px;
    li {
      font-size: 10px;
    }
    span {
      margin-left: 5px;
    }
  }
  @media screen and (max-width: 326px) {
    li {
      font-size: 10px;
    }
  }
`;
const StyledMaterialIcon = styled.div`
  margin-right: 5px;
  & .MuiSvgIcon-root {
    font-size: 20px;
    color: gray;
  }
  @media screen and (max-width: 458px) {
    & .MuiSvgIcon-root {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 326px) {
    & .MuiSvgIcon-root {
      display: none;
    }
  }
`;

const StyledFlagEng = styled.div`
display: flex;
@media screen and (max-width: 458px) {
  display: flex;
  // justify-content: center;
  width: 20px;
  justify-content: space-between;
  margin-left: 40%;
  padding-top: 10px;
}
`

const StyledWelCall = styled.div`
display: flex;
@media screen and (max-width: 458px) {
  display: flex;
  justify-content: center;
  font-size: 12px;
}
@media screen and (max-width: 337px) {
  font-size: 10px;
}
@media screen and (max-width: 280px) {
  display: block;
  text-align: center;
}

`
const StyledFlexNavTwoSub3 = styled.div`
display: flex;
`

export {
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
};
