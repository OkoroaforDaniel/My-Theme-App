import styled from "styled-components";

const GridContainer1 = styled.div`
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  width: 60%;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  @media screen and (max-width: 1060px) {
   width: 90%;
}
h2 {
    align-items: center;
    margin-bottom: 40px;
    @media screen and (max-width: 476px) {
        font-size: 19px;
    }
}
`;

const StyledButton1 = styled.button`
background-color: #F33A6A;
color: white;
border: none;
padding: 15px 20px;
width: 40%;
transition: background-color 1s ease;
font-weight: bold;
@media screen and (max-width: 476px) {
    width: 50%;
    font-size: 12px;
 }
 @media screen and (max-width: 371px) {
    width: 100%;
 }


&:hover {
  background-color: transparent;
  border: 1px solid black;
  color: black;
}
`;


export {
  GridContainer1,
  StyledButton1,
  GridItem,
};
