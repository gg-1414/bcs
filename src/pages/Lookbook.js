import React from 'react';
import Media from 'react-media';
import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Image,
  Slide,
  Slider,
} from 'pure-react-carousel';
import image1 from '../assets/images/lookbook/1.png';
import image2 from '../assets/images/lookbook/2.png';
import image3 from '../assets/images/lookbook/3.png';
import image4 from '../assets/images/lookbook/4.png';
import image6 from '../assets/images/lookbook/6.png';
import image7 from '../assets/images/lookbook/7.png';
import image8 from '../assets/images/lookbook/8.png';
import image10 from '../assets/images/lookbook/10.png';
import image11 from '../assets/images/lookbook/11.png';
import leftArrow from '../assets/images/left-arrow.svg';
import rightArrow from '../assets/images/right-arrow.svg';
import '../styles/pages/Lookbook.scss';


const images = [
  image1,
  image2,
  image3,
  image4,
  image6,
  image7,
  image8,
  image10,
  image11,
]

const slides = images.map((image, index) => {
  return (
    <Slide tag="a" index={index} style={{paddingBottom: '0'}} key={`lookbookImg-${index}`}>
      <Image src={image} alt={`Lookbook item ${index}`} />
    </Slide>
  )
})

const Lookbook = () => {
  return (
    <section className="Lookbook">
      <div className="container">
      <Media query="(max-width: 767px)">
        {matches => (
          matches ? (
            <CarouselProvider
              visibleSlides={1}
              totalSlides={images.length}
              naturalSlideWidth={300}
              naturalSlideHeight={300}
            >
              <Slider>
                {slides}
              </Slider>
              <ButtonBack><img className="" src={leftArrow} alt="Go back" /></ButtonBack>
              <ButtonNext><img src={rightArrow} alt="Go next" /></ButtonNext>
            </CarouselProvider>
          ) : null
        )}
      </Media>

      <Media query="(min-width: 768px) and (max-width: 1279px)">
        {matches => (
          matches ? (
            <CarouselProvider
              visibleSlides={2}
              totalSlides={images.length}
              naturalSlideWidth={300}
              naturalSlideHeight={300}
            >
              <Slider>
                {slides}
              </Slider>
              <ButtonBack><img src={leftArrow} alt="Go back" /></ButtonBack>
              <ButtonNext><img src={rightArrow} alt="Go next" /></ButtonNext>
            </CarouselProvider>
          ) : null
        )}
      </Media>

      <Media query="(min-width: 1280px)">
        {matches => (
          matches ? (
            <CarouselProvider
              visibleSlides={3}
              totalSlides={images.length}
              naturalSlideWidth={300}
              naturalSlideHeight={300}
            >
              <Slider>
                {slides}
              </Slider>
              <ButtonBack><img src={leftArrow} alt="Go back" /></ButtonBack>
              <ButtonNext><img src={rightArrow} alt="Go next" /></ButtonNext>
            </CarouselProvider>
          ) : null
        )}
      </Media>

      </div>
    </section>
  )
}

export default Lookbook;
