import React from 'react';
import parse from 'html-react-parser';
import Div from '../Div';
import Button from '../Button';
import VerticalLinks from '../VerticalLinks';

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
  variant,
}) {
  return (
    <Div
      className={`cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1 ${variant || ''}`}
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <Div className="cs-hero_info">
            <Div>
              <Div className="cs-hero_subtitle">{parse(subtitle)}</Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <VerticalLinks
        data={heroSocialLinks}
        title={socialLinksHeading}
        variant="cs-hero_social_glass"
      />
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </Div>
  );
}
