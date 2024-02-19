import styled from "styled-components";

const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 3fr);
// margin-left: 10%;
// margin-right: 10%;
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
// border-radius: 5px;
background-color: #F5F5F5;
margin-top: -100px;
width: 95%;
// padding-left: 10px;
padding: 10px;
margin-left: 20px;
transition: 0.8s ease;
opacity: 0;

right: 2.5%;

p {
    margin-bottom: 10px;
    margin-top: 10px;    
    color: #F33A6A;
    text-align: center;
    font-size: 13px;
    @media screen and (max-width: 386px) {
        font-size: 12px;
    }
    @media screen and (max-width: 259px) {
        font-size: 10px;
    }
}
h3 {
    text-align: center;
    @media screen and (max-width: 360px) {
        font-size: 12px;
    }
}
span {
    color: gray;
}
`;

const Image = styled.img`
`;

const GridItem = styled.div`
position: relative;
margin-bottom: -10px;
z-index: 1;
overflow: hidden;

&:hover ${BelowImage} {
    opacity: 1;
  }

${Image} {
    width: 100%;
    transition: transform 0.9s;
    
}
&:hover ${Image} {
    transform: scale(1.2) rotate(10deg);
  }

`;


export { GridContainer, GridItem, BelowImage, Image, }