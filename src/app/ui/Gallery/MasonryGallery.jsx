'use client';

import { Icon } from '@iconify/react';
import { useMemo, useState } from 'react';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import LightGallery from 'lightgallery/react';

const categoryLabels = {
  wedding: 'Bodas',
  portrait: 'Retratos',
  fashion: 'Moda',
  commercial: 'Comercial',
  landscape: 'Paisajes',
  shortfilm: 'Short film',
};
const categoryOrder = ['wedding', 'portrait', 'fashion', 'commercial', 'landscape', 'shortfilm'];

function ProgressiveImage({ item, height }) {
  const fullUrl = item.url;
  const previewUrl = item.previewUrl || fullUrl;
  const [src, setSrc] = useState(previewUrl);

  return (
    <img
      src={src}
      alt={item.description || item.title}
      loading="lazy"
      width={item.width}
      height={item.height}
      onLoad={() => {
        if (src !== fullUrl) setSrc(fullUrl);
      }}
      style={{ objectFit: 'cover', width: '100%', height: `${height}px` }}
    />
  );
}

export default function MasonryGallery({ portfolioData = [] }) {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(10);
  const categories = useMemo(
    () => {
      const available = new Set(portfolioData.flatMap((item) => item.categories || []));
      return [
        ...categoryOrder.filter((category) => available.has(category)),
        ...[...available].filter((category) => !categoryOrder.includes(category)),
      ];
    },
    [portfolioData],
  );
  const visibleItems = portfolioData.filter(
    (item) => active === 'all' || item.categories?.includes(active),
  );

  return (
    <>
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Fotografías recientes" subtitle="Nuestro Portafolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <button type="button" aria-pressed={active === 'all'} onClick={() => setActive('all')}>Todo</button>
              </li>
              {categories.map((category) => (
                <li className={active === category ? 'active' : ''} key={category}>
                  <button type="button" aria-pressed={active === category} onClick={() => setActive(category)}>
                    {categoryLabels[category] || category.replace(/_/g, ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
      </Div>
      <Spacing lg="90" md="45" />
      <LightGallery speed={500} download={false} elementClassNames="cs-masonry_4_col">
        {visibleItems.slice(0, itemShow).map((item) => {
          const height = Math.max(299, Math.round(480 * (item.height / item.width)));
          return (
            <Div href={item.url} className="" key={item.publicId}>
              <Div className="cs-portfolio cs-style1 cs-type2" style={{ height: `${height}px` }}>
                <Div className="cs-lightbox_item">
                  <ProgressiveImage item={item} height={height} />
                </Div>
                <Div className="cs-portfolio_hover" />
                <span className="cs-plus" aria-hidden="true" />
                <Div
                  className="cs-portfolio_bg cs-bg"
                  style={{ backgroundImage: `url("${item.previewUrl || item.url}")` }}
                />
                <Div className="cs-portfolio_info">
                  <Div className="cs-portfolio_info_bg cs-accent_bg" />
                  <h2 className="cs-portfolio_title">{item.title}</h2>
                  <Div className="cs-portfolio_subtitle">{item.description}</Div>
                </Div>
              </Div>
            </Div>
          );
        })}
      </LightGallery>
      <Div className="container">
        <Div className="text-center">
          {visibleItems.length > itemShow && (
            <>
              <Spacing lg="65" md="40" />
              <button type="button" className="cs-text_btn" onClick={() => setItemShow(itemShow + 4)}>
                <span>Cargar más</span>
                <Icon icon="bi:arrow-right" aria-hidden="true" />
              </button>
            </>
          )}
        </Div>
      </Div>
    </>
  );
}
