import styled from "styled-components";

const GridContainer1 = styled.div`
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: center;
  //   height: 100vh;

  @media screen and (max-width: 810px) {
    margin-right: 0;
    margin-left: 0;
  }
  p {
    margin-bottom: 10px;
    font-size: 13px;
    font-weight: bold;
    color: #313131;
  }
  h2 {
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    border: none;
    background-color: #f5f5f5;
    height: 50px;
    margin-bottom: 20px;
  }
`;

const GridItem = styled.div`
  width: 50%;
  @media screen and (max-width: 560px) {
    width: 80%;
  }
  h2 {
    align-items: center;
    margin-bottom: 40px;
  }
`;

const StyledButton1 = styled.button`
  background-color: #f33a6a;
  color: white;
  border: none;
  padding: 15px 20px;
  width: 100%;
  transition: background-color 1s ease;

  &:hover {
    background-color: transparent;
    border: 1px solid black;
    color: black;
  }
`;

export { GridContainer1, StyledButton1, GridItem };
