import React from "react";
import {
  StyledPopularDiv1,
  StyledPopularDiv2,
  StyledImageText,
  StyledH3,
  Arrow,
} from "../styles/PopularProduct.styled";
import {
  StyledPartner,
  StyledPartnerText,
  StyledPartnerImageSlick,
  Image,
} from "../styles/Partners.styled";
import { CategoriesText } from "../styles/Categories.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const data = [
  {
    img: `./images/partner/partner2.png`,
  },
  {
    img: `./images/partner/partner1.png`,
  },
  {
    img: `./images/partner/partner3.png`,
  },
  {
    img: `./images/partner/partner4.png`,
  },
  {
    img: `./images/partner/partner2.png`,
  },
  {
    img: `./images/partner/partner5.png`,
  },
  {
    img: `./images/partner/partner6.png`,
  },
];

const ArrowLeft = styled(Arrow)`
  left: 10px; /* Adjust this value according to your layout */
  z-index: 2;
`;

const ArrowRight = styled(Arrow)`
  right: 10px;
`;

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <ArrowLeft onClick={onClick}>{"<"}</ArrowLeft>
);
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <ArrowRight onClick={onClick}>{">"}</ArrowRight>
);

export default function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1196,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 807,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 517,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 347,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <CategoriesText>
        <h5>See Our Collection</h5>
        <h1>Best Selling Products</h1>
      </CategoriesText>
      <StyledPartner>
        <StyledPartnerText>
          <h1>Our Partners</h1>
        </StyledPartnerText>

        <StyledPopularDiv1>
          <StyledPopularDiv2>
            <Slider {...settings}>
              {data.map((d, idx) => (
                <StyledImageText key={idx}>
                  <StyledPartnerImageSlick>
                    <Image src={d.img} alt="" />
                  </StyledPartnerImageSlick>
                </StyledImageText>
              ))}
            </Slider>
          </StyledPopularDiv2>
        </StyledPopularDiv1>
      </StyledPartner>
    </div>
  );
}
