import { useEffect } from 'react';

declare global {
  interface Window {
    usePreloadImagesData?: Record<symbol, unknown[]>;
  }
}

const useImagePreloader = (imageSrcs: string[]): void => {
  useEffect(() => {
    const key = Symbol();
    window.usePreloadImagesData = window.usePreloadImagesData ?? {};
    window.usePreloadImagesData[key] = [];
    for (const src of imageSrcs) {
      // preload the image
      const img = new Image();
      img.src = src;
      // keep a reference to the image
      window.usePreloadImagesData[key].push(img); 
    }
    return () => {
      delete window.usePreloadImagesData?.[key];
    };
  }, [ imageSrcs ]);
};

export default useImagePreloader;