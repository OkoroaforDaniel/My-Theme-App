import styled from "styled-components";

const StyledInstagramImage = styled.img`
  width: 100%;
`;

const StyledInstagramIcon1 = styled.img`
  width: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.8s ease;
`;

const StyledInstagramDiv1 = styled.div`
  position: relative;
  @media screen and (max-width: 758px) {
    display: none;
  }
  &:hover ${StyledInstagramIcon1} {
    opacity: 1;
  }
`;

const StyledImageInstagram = styled.div`
  // display: flex;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 100px;
  margin-bottom: -4px;
  @media screen and (max-width: 1182px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: 956px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 758px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 390px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledInstagramIcon2 = styled.img`
  width: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.8s ease;
`;

const StyledInstagramDiv2 = styled.div`
  position: relative;
  @media screen and (max-width: 390px) {
    display: none;
  }
  &:hover ${StyledInstagramIcon2} {
    opacity: 1;
  }
`;

const StyledInstagramIcon3 = styled.img`
  width: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.8s ease;
`;

const StyledInstagramDiv3 = styled.div`
  position: relative;
  &:hover ${StyledInstagramIcon3} {
    opacity: 1;
  }
`;

const StyledInstagramIcon4 = styled.img`
  width: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.8s ease;
`;

const StyledInstagramDiv4 = styled.div`
  position: relative;
  &:hover ${StyledInstagramIcon4} {
    opacity: 1;
  }
`;

const StyledInstagramIcon5 = styled.img`
  width: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.8s ease;
`;

const StyledInstagramDiv5 = styled.div`
  position: relative;
  @media screen and (max-width: 956px) {
    display: none;
  }
  &:hover ${StyledInstagramIcon5} {
    opacity: 1;
  }
`;

const StyledInstagramIcon6 = styled.img`
  width: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.8s ease;
`;

const StyledInstagramDiv6 = styled.div`
  position: relative;
  @media screen and (max-width: 1182px) {
    display: none;
  }
  &:hover ${StyledInstagramIcon6} {
    opacity: 1;
  }
`;

export {
  StyledImageInstagram,
  StyledInstagramDiv1,
  StyledInstagramImage,
  StyledInstagramIcon1,
  StyledInstagramDiv2,
  StyledInstagramIcon2,
  StyledInstagramDiv3,
  StyledInstagramIcon3,
  StyledInstagramDiv4,
  StyledInstagramIcon4,
  StyledInstagramDiv5,
  StyledInstagramIcon5,
  StyledInstagramDiv6,
  StyledInstagramIcon6,
};
