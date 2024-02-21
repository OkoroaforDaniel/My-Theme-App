import styled from "styled-components";

const OuterContainer = styled.div`
  overflow-x: auto;
  min-width: 100%;
  padding-right: 10%;
  padding-left: 10%;
  margin-bottom: 100px;

  @media screen and (max-width: 1088px) {
    // padding-right: 1%;
    // padding-left: 1%;
  }
  @media screen and (max-width: 985px) {
    padding-right: 10%;
    padding-left: 10%;
  }
`;

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr`
  border: 1px solid #ddd;
`;

const Image = styled.img`
  width: 95%;
  padding-left: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 1088px) {
    width: 250px;
    height: 300px;
    padding-left: 0;
  }

  transition: transform 0.8s ease;
`;

const ImageContainer = styled.div`
  &:hover ${Image} {
    transform: scale(1.1);
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  color: gray;
  padding-top: 20px;
  padding-bottom: 20px;
  h4 {
    padding-top: 10px;
    padding-bottom: 10px;
    color: black;
  }
`;

const TableHead = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

export {
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  OuterContainer,
  Image,
  ImageContainer,
};
