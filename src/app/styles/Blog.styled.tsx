import styled from "styled-components";

const StyledBlogImage = styled.img`
  width: 100%;
  height: 300px;
  // display: block;
  transition: transform 0.8s ease;
`;
const StyledDateDiv = styled.div`
  display: flex;
  margin-right: 20px;
  position: absolute;
  z-index: 1;
  margin-top: -15%;
  background-color: white;
  padding: 10px;
  // float: right;
  opacity: 0;
  transform: translateX(100%); /* Start outside the container */
  transition: transform 0.9s;
  h4 {
    font-style: italic;
  }
`;

const StyledBlogDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-right: 10%;
  margin-left: 10%;
  @media screen and (max-width: 985px) {
    grid-template-columns: repeat(2, 2fr);
  }
  @media screen and (max-width: 716px) {
    grid-template-columns: repeat(1, 3fr);
  }
  @media screen and (max-width: 326px) {
    
  }
`;

const StyledBlogDiv1 = styled.div`
  // width: 25%;
  // margin-right: 20px;

  h5 {
    color: #f33a6a;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 20px;
  }
  p {
    text-decoration: underline;
  }
`;
const StyledBlogDiv2 = styled.div`
  // width: 100%;
  height: 300px;
  overflow: hidden;
  @media screen and (max-width: 1085px) {
    height: 250px;
  }

  &:hover ${StyledDateDiv} {
    opacity: 1;
    transform: translateX(0);
  }

  &:hover ${StyledBlogImage} {
    transform: scale(1.1) rotate(2deg);
  }
`;
const StyledFollowDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;


export {
  StyledBlogImage,
  StyledBlogDiv,
  StyledBlogDiv1,
  StyledBlogDiv2,
  StyledDateDiv,
  StyledFollowDiv,
};
