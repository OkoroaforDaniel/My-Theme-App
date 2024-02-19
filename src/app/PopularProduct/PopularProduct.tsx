import React from "react";
import {
  StyledPopularDiv1,
  StyledPopularDiv2,
  StyledImageSlick,
  StyledImageText,
  StyledH3,
  Arrow,
  Image,
} from "../styles/PopularProduct.styled";
import { CategoriesText } from "../styles/Categories.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const data = [
  {
    name: `Easy Return Policy`,
    img: `./images/secure.png`,
  },
  {
    name: `Secure Payment Methods`,
    img: `./images/payment.png`,
  },
  {
    name: `Track Your Order`,
    img: `./images/track-order.png`,
  },
  {
    name: `Free Shipping Worldwide`,
    img: `./images/shipping.png`,
  },
  {
    name: `24/7 customer Support`,
    img: `./images/customer-support.png`,
  },
  {
    name: `Weekend Discount Coupon`,
    img: `./images/Discount.png`,
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

export default function PopularProduct() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 807,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 517,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <StyledPopularDiv1>
        <StyledPopularDiv2>
            <Slider {...settings}>
            {data.map((d) => (
              <StyledImageText key={d.name}>
                <StyledImageSlick>
                  <Image src={d.img} alt="" />
                </StyledImageSlick>
                <div>
                  <StyledH3>{d.name}</StyledH3>
                </div>
              </StyledImageText>
            ))}
            </Slider>
        </StyledPopularDiv2>
      </StyledPopularDiv1>
    </div>
  );
}