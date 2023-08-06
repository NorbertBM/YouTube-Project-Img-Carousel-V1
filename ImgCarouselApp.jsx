import React from "react";

import "./imgCarouselStyle.css";
import Carousel from "./Carousel";
import { data } from "./data";
export default function ImgCarouselApp() {
  return (
    <>
      <h1 className="title">Img Carousel </h1>

      <Carousel data={data} />
    </>
  );
}
