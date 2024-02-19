import React from 'react';
import { StyledOfferImage,StyledOfferDiv1, StyledOfferDiv2, StyledOfferButton1} from '../styles/Offer.styled';
// import { StyledButton1 } from '../styles/CarouselItem.styled';
import { CategoriesText } from '../styles/Categories.styled';

export default function Offer() {
  return (
    <div>
        <StyledOfferImage src='../images/offer-bg.jpg' />
        <StyledOfferDiv1>
            <StyledOfferDiv2>
                <h5>Limited Time Offer!</h5>
                <h1>-40% OFF</h1>
                <p>Get The Best Deals Now</p>
                <StyledOfferButton1>DISCOVER NOW</StyledOfferButton1>
            </StyledOfferDiv2>
        </StyledOfferDiv1>
        <CategoriesText>
          <h5>See Our Collection</h5>
          <h1>Recent Products</h1>
        </CategoriesText>
    </div>
  )
}
