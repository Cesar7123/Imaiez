'use client';

import { createContext, useContext, useRef, useState } from 'react';

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children, initialImages = [], initialNextCursor = null, total = initialImages.length, category }) {
  const [images, setImages] = useState(initialImages);
  const [nextCursor, setNextCursor] = useState(initialNextCursor);
  const [loading, setLoading] = useState(false);
  const loadedCursors = useRef(new Set());

  async function loadMore() {
    if (!nextCursor || loading || loadedCursors.current.has(nextCursor)) return;
    const cursor = nextCursor;
    loadedCursors.current.add(cursor);
    setLoading(true);

    try {
      const params = new URLSearchParams({ limit: '25', next_cursor: cursor });
      if (category) params.set('category', category);
      const response = await fetch(`/api/cloudinary?${params}`);
      if (!response.ok) throw new Error('Unable to load portfolio images');
      const page = await response.json();
      setImages((current) => [...current, ...page.images]);
      setNextCursor(page.nextCursor);
    } catch (error) {
      loadedCursors.current.delete(cursor);
      console.error('Portfolio pagination error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <PortfolioContext.Provider value={{ images, total, nextCursor, loading, loadMore }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('usePortfolio must be used within PortfolioProvider');
  return context;
}
