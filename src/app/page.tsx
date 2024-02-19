"use client";
import Blog from "./Blog/Blog";
import Carousel from "./Carousel/Carousel";
import Categories from "./Categories/Categories";
import Footer from "./Footer/Footer";
import InstagramaImage from "./InstagramImage/InstagramaImage";
import NavBar from "./NavBarOne/Page";
import NavBarTwo from "./NavBarTwo/NavBarTwo";
import Offer from "./Offer/Offer";
import Partners from "./Partners/Partners";
import PopularProduct from "./PopularProduct/PopularProduct";

export default function Home() {
  return (
    <div className="blur-container">
      <NavBarTwo />
      <NavBar />
      <Carousel />
      <Categories />
      <Offer />
      <PopularProduct />
      <Partners />
      <Blog />
      <InstagramaImage />
      <Footer />
    </div>
  );
}
