import styled from "styled-components";

const Image = styled.img`
`;

const StyledPartner = styled.div`
  background-color: #f5f5f5;
  padding-bottom: 100px;
`;

const StyledPartnerText = styled.div`
  padding-top: 100px;
  text-align: center;
`;

const StyledPartnerImageSlick = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Image} {
    width: 80px;
  }
`;
export { StyledPartner, StyledPartnerText, StyledPartnerImageSlick, Image, };
