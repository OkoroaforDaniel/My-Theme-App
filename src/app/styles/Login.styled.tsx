import styled from "styled-components";

const StyledH2H4 = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 50px;
  @media screen and (max-width: 855px) {
    display: block;
    text-align: center;
  }
`;
const StyledLoginH2 = styled.div`
  padding-left: 10%;
  @media screen and (max-width: 1088px) {
    padding-left: 1%;
  }
  @media screen and (max-width: 985px) {
    padding-left: 10%;
  }
  @media screen and (max-width: 855px) {
    padding-left: 0;
  }
  // @media screen and (max-width: 460px) {
  //   padding-left: 1%;
  // }
`;
const StyledLoginH4 = styled.div`
  padding-right: 10%;
  @media screen and (max-width: 1088px) {
    padding-right: 1%;
  }
  @media screen and (max-width: 985px) {
    padding-right: 10%;
  }
  @media screen and (max-width: 855px) {
    padding-right: 0;
  }
  //   @media screen and (max-width: 460px) {
  //     padding-right: 1%;
  //   }

  h5 {
    margin-top: 10px;
    span {
      color: #f33a6a;
      margin-left: 5px;
    }
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: #f33a6a;
  }
`;

const StyledLoginNewCustomer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;

  @media screen and (max-width: 855px) {
    display: block;
    text-align: center;
  }
`;

const StyledLoginInput = styled.div`
  width: 100%;
  padding-left: 10%;
  @media screen and (max-width: 1088px) {
    padding-left: 1%;
  }
  @media screen and (max-width: 985px) {
    padding-left: 10%;
  }
  @media screen and (max-width: 855px) {
    padding-left: 0;
  }
  // @media screen and (max-width: 460px) {
  //   padding-left: 1%;
  // }
  button {
    width: 90%;
    height: 50px;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f33a6a;
    color: white;
    border: none;
    transition: 1s ease;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
`;

const StyledNewCustomer = styled.div`
  padding-right: 10%;
  @media screen and (max-width: 1088px) {
    padding-right: 1%;
  }
  @media screen and (max-width: 985px) {
    padding-right: 10%;
  }
  @media screen and (max-width: 855px) {
    padding-right: 5%;
  }
  @media screen and (max-width: 855px) {
    padding-left: 5%;
  }
  //   @media screen and (max-width: 460px) {
  //     padding-right: 1%;
  //   }
  h2 {
    margin-bottom: 20px;
  }
  h4 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
    color: grey;
    line-height: 1.8;
  }
  button {
    width: 50%;
    height: 50px;
    transition: 1s ease;
    &:hover {
      background-color: #f33a6a;
      color: white;
      border: none;
    }
  }
`;

const StyledLoginInput1 = styled.div`
  input {
    width: 90%;
    height: 50px;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: #f5f5f5;
    border: none;
  }
`;
const StyledLoginInput2 = styled.div`
  input {
    width: 90%;
    height: 50px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: none;
  }
`;
export {
  StyledH2H4,
  StyledLoginH2,
  StyledLoginH4,
  StyledLoginNewCustomer,
  StyledLoginInput,
  StyledNewCustomer,
  StyledLoginInput1,
  StyledLoginInput2,
  StyledLink,
};
