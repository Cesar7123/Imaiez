'use client';

import { Icon } from '@iconify/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import LightGallery from 'lightgallery/react';
import { PortfolioProvider, usePortfolio } from './PortfolioContext';

const categoryLabels = {
  wedding: 'Bodas',
  portrait: 'Retratos',
  fashion: 'Moda',
  commercial: 'Comercial',
  landscape: 'Paisajes',
  shortfilm: 'Short film',
};
const categoryOrder = ['wedding', 'portrait', 'fashion', 'commercial', 'landscape', 'shortfilm'];

function ProgressiveImage({ item }) {
  const fullUrl = item.url;
  const previewUrl = item.previewUrl || fullUrl;
  const [src, setSrc] = useState(previewUrl);

  return (
    <img
      src={src}
      alt={item.alt || item.description || item.caption || item.title}
      loading="lazy"
      width={item.width}
      height={item.height}
      onLoad={() => {
        if (src !== fullUrl) setSrc(fullUrl);
      }}
      style={{ objectFit: 'cover', width: '100%', height: 'auto', display: 'block' }}
    />
  );
}

function GalleryContent() {
  const [active, setActive] = useState('all');
  const [columnCount, setColumnCount] = useState(4);
  const lightGalleryRef = useRef(null);
  const { images, nextCursor, loading, loadMore } = usePortfolio();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const update = () => setColumnCount(mediaQuery.matches ? 4 : 2);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  const categories = useMemo(
    () => {
      const available = new Set(images.flatMap((item) => item.categories || []));
      return [
        ...categoryOrder.filter((category) => available.has(category)),
        ...[...available].filter((category) => !categoryOrder.includes(category)),
      ];
    },
    [images],
  );
  const visibleItems = images.filter(
    (item) => active === 'all' || item.categories?.includes(active),
  );
  const dynamicEl = useMemo(
    () =>
      visibleItems.map((item) => ({
        src: item.url,
        thumb: item.previewUrl || item.url,
        subHtml: item.caption || item.title || '',
        alt: item.alt || item.description || item.caption || item.title || '',
      })),
    [visibleItems],
  );
  const columns = useMemo(() => {
    const cols = Array.from({ length: columnCount }, () => []);
    visibleItems.forEach((item, index) => {
      cols[index % columnCount].push({ item, index });
    });
    return cols;
  }, [visibleItems, columnCount]);

  const handleInit = (detail) => {
    lightGalleryRef.current = detail.instance;
  };

  const openGallery = (event, index) => {
    event.preventDefault();
    lightGalleryRef.current?.openGallery(index);
  };

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
      <LightGallery
        speed={500}
        download={false}
        elementClassNames="cs-masonry_cols"
        dynamic
        dynamicEl={dynamicEl}
        onInit={handleInit}
      >
        {columns.map((columnItems, columnIndex) => (
          <Div className="cs-masonry_col" key={columnIndex}>
            {columnItems.map(({ item, index }) => (
              <a
                href={item.url}
                className="cs-masonry_item"
                data-sub-html={item.caption || item.title || ''}
                key={item.publicId}
                onClick={(event) => openGallery(event, index)}
              >
                <Div
                  className="cs-portfolio cs-style1 cs-type2"
                  style={{ height: 'auto', aspectRatio: `${item.width} / ${item.height}` }}
                >
                  <Div className="cs-lightbox_item">
                    <ProgressiveImage item={item} />
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
              </a>
            ))}
          </Div>
        ))}
      </LightGallery>
      <Div className="container">
        <Div className="text-center">
          {nextCursor && (
            <>
              <Spacing lg="65" md="40" />
              <button type="button" className="cs-load_more_btn" onClick={loadMore} disabled={loading}>
                <span>{loading ? 'Cargando...' : 'Cargar más'}</span>
                <Icon icon="bi:arrow-right" aria-hidden="true" />
              </button>
            </>
          )}
        </Div>
      </Div>
    </>
  );
}

export default function MasonryGallery({ portfolioData = [], nextCursor = null, total, category }) {
  return (
    <PortfolioProvider
      initialImages={portfolioData}
      initialNextCursor={nextCursor}
      total={total}
      category={category}
    >
      <GalleryContent />
    </PortfolioProvider>
  );
}
