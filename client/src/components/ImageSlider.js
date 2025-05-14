import React from 'react';
import Slider from 'react-slick';

function ImageSlider({ images }) {
  console.log(
    'images',images
  )
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map((url, index) => (
        <div key={index}>
          <img
            src={'http://localhost:5000/static/' + url.storedName}
            alt={`Slide ${index}`}
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
          />
        </div>
      ))}
    </Slider>
  );
}

export default ImageSlider;
