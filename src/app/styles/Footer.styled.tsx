import styled, { keyframes } from "styled-components";

const StyledFooter = styled.div`
  background-color: black;
  color: white;
  padding-right: 10%;
  padding-left: 10%;
`;

const StyledInnerFooter = styled.div`
  // display: flex;
  // justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding-top: 100px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 570px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledInnerFooter1 = styled.div`
  width: 100%;
  // width: 23%;
  //   h3 {
  //     padding-bottom: 25px;
  //   }
  p {
    padding-bottom: 15px;
    font-size: 14px;
  }
`;

const StyledFooterBottom = styled.div`
  padding-bottom: 30px;
`;

const StyledInputButton = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  background-color: transparent;
  border: 1px solid gray;
  padding: 15px;
  border-radius: 5px;
`;

const StyledSubscribeButton = styled.button`
  padding: 15px;
  background-color: #f33a6a;
  color: white;
  border: none;
  border-radius: 5px;
  transition: 1s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const StyledIcon = styled.div`
  // margin-right: 10px;
  display: flex;
  flex-direction: row;
`;

const StyledFontAwesomeIcon = styled.i`
  color: #f33a6a;
  font-size: 20px;
  background-color: white;
  //   padding: 3px;
  border-radius: 2px;
  margin-right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img``;

const StyledBaseFooter = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    display: block;
    text-align: center;
    p {
      margin-bottom: 30px;
    }
  }
  ${Image} {
    transition: transform 0.3s ease-in-out;
  }

  ${Image}:hover {
    transform: translateY(-5px); /* Adjust the value as needed */
  }
`;
const StyledHeaderFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  h3 {
    width: 23%;
  }
`;
// const StyledHr1 = styled.hr`
//   border: solid 0.001px;
//   color: #202020;
//   margin-top: 20px;
//   margin-bottom: 20px;
// `;

const StyledHr1 = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(to right, #f33a6a 10%, #202020 20%);
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledHr2 = styled.hr`
  border: solid 0.0001px;
  color: #202020;
  margin-top: -100px;
  margin-bottom: -180px;
  // margin-left: -50px;
  // position: absolute;
`;

const StyledHr3 = styled.hr`
  border: solid 0.001px;
  color: #202020;
  margin-top: 100px;
  margin-bottom: 20px;
`;

const StyledInnerHr = styled.div`
  display: flex;
  p {
    color: white;

    &:hover {
      color: #f33a6a;
    }
  }
`;

export {
  StyledFooter,
  StyledInnerFooter,
  StyledInnerFooter1,
  StyledFooterBottom,
  StyledInputButton,
  StyledInput,
  StyledSubscribeButton,
  StyledFontAwesomeIcon,
  StyledIcon,
  StyledBaseFooter,
  StyledHeaderFooter,
  StyledHr1,
  StyledHr2,
  StyledHr3,
  StyledInnerHr,
  Image,
};
