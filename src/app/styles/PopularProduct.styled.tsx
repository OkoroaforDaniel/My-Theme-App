import styled from "styled-components";

const Image = styled.img`
`;

const StyledPopularDiv1  = styled.div`
width: 200px:
`;

const StyledPopularDiv2 = styled.div`
margin-top: 10px;
// margin-bottom: 10px;
`;

const StyledImageSlick = styled.div`
display: flex;
flex-direction: column;
align-items: center;

${Image} {
    width: 200px;
    height: 150px;
    color: #F33A6A;

}
`
const StyledImageText = styled.div`
text-align: center;

`
const Arrow = styled.div`
width: 40px;
height: 40px;
font-size: 20px;
border: 1px solid gray; /* Border for the circle */
border-radius: 50%;
padding: 10px;
background-color: white;
color: gray;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
position: absolute;
top: 50%;
transform: translateY(-50%);
transition: background-color 1s ease;

&:hover {
    background-color: #F33A6A;
    color: white;
    border: none;
}
`;

const StyledH3 = styled.h3`
margin-bottom: 20px;
`

export { StyledPopularDiv1, StyledPopularDiv2, StyledImageSlick, StyledImageText, Arrow, StyledH3, Image }