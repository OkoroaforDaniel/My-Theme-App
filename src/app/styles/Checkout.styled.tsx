import styled from "styled-components";

const GridContainer1 = styled.div`
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 100px;
`;

const TopLine = styled.div`
  background-color: #f33a6a;
  width: 100%;
  height: 3px;
`;

const GridContainer2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media screen and (max-width: 1037px) {
    grid-template-columns: repeat(1, 4fr);
  }
`;

const GridItem1 = styled.div`
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
  textarea {
    width: 100%;
    border: none;
    background-color: #f5f5f5;
    height: 100px;
    margin-bottom: 20px;
  }
`;

const GridItem2 = styled.div`
  h2 {
    margin-bottom: 10px;
  }
`;

const TopGrid = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 50px;
  p {
    color: #f33a6a;
    @media screen and (max-width: 765px) {
      font-size: 13px;
    }
  }
  span {
    color: black;
    &:hover {
      color: #f33a6a;
    }
  }
`;

const CheckoutHr = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(to right, #f33a6a 10%, #dddddd 20%);
  margin-bottom: 20px;
`;

const PostEmailStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media screen and (max-width: 761px) {
    grid-template-columns: repeat(1, 4fr);
  }
`;

const PostStyle = styled.div``;

const EmailStyle = styled.div``;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
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

const RadioButton = styled.div`
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  p {
    color: gray;
    font-size: 15px;
    line-height: 1.8;
  }
`;

const RadioStyle = styled.div`
  display: flex;
  margin-bottom: 15px;

  p {
    color: black;
    font-size: 13px;
    font-weight: bold;
    margin-top: 9px;
  }
`;

export {
  GridContainer1,
  GridContainer2,
  GridItem1,
  GridItem2,
  TopGrid,
  TopLine,
  CheckoutHr,
  PostEmailStyle,
  PostStyle,
  EmailStyle,
  Table,
  TableRow,
  TableCell,
  StyledButton1,
  RadioButton,
  RadioStyle,
};
