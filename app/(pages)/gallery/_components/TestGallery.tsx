'use client';

import PhotoAlbum from 'react-photo-album';
import { testImage } from '@/lib/data';

export default function TestGallery() {
  return (
    <div className="w-[1140px] md:py-[96px]  mx-auto">
      <PhotoAlbum layout="masonry" photos={testImage} />;
    </div>
  );
}
