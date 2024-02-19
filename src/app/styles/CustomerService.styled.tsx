import styled from "styled-components";

const GridContainer1 = styled.div`
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 100px;

@media screen and (max-width: 570px) {
    margin-right: 1%;
    margin-left: 1%;
}
  p {
    color: gray;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 2;
    span {
        height: 5px;
        width: 5px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        background-color: #F33A6A;
        // margin-top: -100%;
        margin-bottom: 2px;
    }
  }
  h2 {
    margin-top: 30px;
    margin-bottom: 30px;
    @media screen and (max-width: 320px) {
      font-size: 18px;
    }
  }
`;


export {
  GridContainer1,
};
