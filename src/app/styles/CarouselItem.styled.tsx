import styled from "styled-components";

interface StyledCarouselImageProps {
  $imageUrl: string;
}

const StyledCarouselImage = styled.div.attrs<StyledCarouselImageProps>(
  ({ $imageUrl }) => ({
    style: {
      backgroundImage: `url('${$imageUrl}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
  })
)<StyledCarouselImageProps>`
  width: 100%;
  height: 900px;
  @media screen and (max-width: 835px) {
    height: 700px;
  }
  @media screen and (max-width: 500px) {
    height: 500px;
  }
`;

const StyledDescription = styled.div<{ $isLast: boolean; $isFirstOrSecond: boolean }>`
  padding-left: ${(props) => (props.$isFirstOrSecond ? '10%' : '0')};
  padding-top: 15%;
  text-align: ${(props) => (props.$isLast ? 'center' : 'left')};

  h1 {
    font-size: 60px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  h6 {
    font-size: 18px;
  }
  p {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 835px) {
    h1 {
      font-size: 40px;
    }
  h6 {
    font-size: 15px;
  }
}
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 30px;
    }
  h6 {
    font-size: 12px;
  }
  }
`;

const StyledButton1 = styled.button`
background-color: #F33A6A;
color: white;
border: none;
padding-bottom: 15px;
padding-top: 15px;
padding-right: 20px;
padding-left: 20px;
width:180px;
transition: background-color 1s ease;

&:hover {
  background-color: transparent;
  border: 1px solid black; 
color: black;
}
@media screen and (max-width: 500px) {
  padding-bottom: 15px;
padding-top: 15px;
padding-right: 15px;
padding-left: 15px;
width:150px;
}
@media screen and (max-width: 369px) {
  padding-bottom: 15px;
  padding-top: 15px;
  padding-right: 10px;
  padding-left: 10px;
  width:120px;
  font-size: 10px;
}
@media screen and (max-width: 288px) {
  width:100px;
}
`;

const StyledButton2 = styled.button`
background-color: transparent;
border: 1px solid black; 
color: black;
padding-bottom: 15px;
padding-top: 15px;
padding-right: 20px;
padding-left: 20px;
margin-left: 20px;
width:150px;
transition: background-color 1s ease;

&:hover {
  background-color: #F33A6A;
  color: white;
  border: none;
}
@media screen and (max-width: 500px) {
  padding-bottom: 15px;
padding-top: 15px;
padding-right: 15px;
padding-left: 15px;
width:150px;
}
@media screen and (max-width: 369px) {
  padding-bottom: 15px;
  padding-top: 15px;
  padding-right: 10px;
  padding-left: 10px;
  width:120px;
  font-size: 10px;
}
@media screen and (max-width: 288px) {
  width:100px;
}
`


export { StyledCarouselImage, StyledDescription, StyledButton1, StyledButton2 };
