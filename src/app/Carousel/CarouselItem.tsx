import React from "react";
import { Paper, Button } from "@mui/material";
import Link from 'next/link';


import {
  StyledDescription,
  StyledCarouselImage,
  StyledButton1,
  StyledButton2,
} from "../styles/CarouselItem.styled";

interface CarouselItemProps {
  item: {
    id: number;
    image: string;
    text1: string;
    title: string;
    text2: string;
  };
  isLast: boolean;
  isFirstOrSecond: boolean;
}

const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  return (
    <Paper>
      <StyledCarouselImage $imageUrl={props.item.image}>
        <StyledDescription
          $isLast={props.isLast}
          $isFirstOrSecond={props.isFirstOrSecond}
        >
          <h6>{props.item.text1}</h6>
          <h1>{props.item.title}</h1>
          <p>{props.item.text2}</p>
          <div>
            <Link href="/products-left-sidebar">
            <StyledButton1>SHOP WOMEN&apos;S</StyledButton1>
            </Link>
            <Link href="/products-right-sidebar">
            <StyledButton2>SHOP MEN&apos;S</StyledButton2>
            </Link>
            
          </div>
        </StyledDescription>
      </StyledCarouselImage>
    </Paper>
  );
};

export default CarouselItem;
