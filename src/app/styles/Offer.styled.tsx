import styled from "styled-components";

const StyledOfferImage = styled.img`
  width: 100%;
  // height: 100%;
`;

const StyledOfferDiv1 = styled.div`
  text-align: center;
  margin-top: -40%;
  margin-left: 100px;
  border: 1px solid white;
  padding: 10px;
  position: absolute;
  width: 35%;
  border-radius: 5px;
  @media screen and (max-width: 987px) {
    margin-top: -50%;
  }
  @media screen and (max-width: 780px) {
    width: 50%;
    margin-left: 50px;
  }
  @media screen and (max-width: 605px) {
    h5 {
      font-size: 12px;
    }
    ,
    h1 {
      font-size: 15px;
    }
    ,
    p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 347px) {
    width: 70%;
    margin-top: -50%;
    h5 {
      font-size: 10px;
    }
    ,
    h1 {
      font-size: 13px;
    }
    ,
    p {
      font-size: 10px;
    }
  }
`;

const StyledOfferDiv2 = styled.div`
  border-radius: 5px;
  background-color: white;
  padding: 50px;
  @media screen and (max-width: 987px) {
    padding: 30px;
  }

  h5 {
    color: #f33a6a;
    margin-bottom: 30px;
  }
  h1 {
    margin-bottom: 30px;
  }
  p {
    color: gray;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 605px) {
    padding: 20px;
    h5 {
      margin-bottom: 10px;
    }
    h1 {
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 347px) {
    padding: 10px;
  }
`;

const StyledOfferButton1 = styled.button`
  background-color: #f33a6a;
  color: white;
  border: none;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-right: 20px;
  padding-left: 20px;
  width: 180px;
  transition: background-color 1s ease;

  &:hover {
    background-color: transparent;
    border: 1px solid black;
    color: black;
  }
  @media screen and (max-width: 505px) {
    padding-bottom: 5px;
    padding-top: 5px;
    padding-right: 10px;
    padding-left: 10px;
    font-size: 10px;
    width: 120px;
  }
`;

export {
  StyledOfferImage,
  StyledOfferDiv1,
  StyledOfferDiv2,
  StyledOfferButton1,
};
