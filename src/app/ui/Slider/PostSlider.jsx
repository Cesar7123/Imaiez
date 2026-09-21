'use client';

import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Post from '../Post';

export default function PostSlider({ posts }) {
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24">
      {posts.map((item) => (
        <Div key={item.slug}>
          <Post
            url={`/blog/${item.slug}`}
            src={item.image}
            alt={item.title}
            date={item.date}
            title={item.title}
          />
        </Div>
      ))}
    </Slider>
  );
}
