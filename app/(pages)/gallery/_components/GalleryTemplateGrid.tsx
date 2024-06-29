import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface GalleryProps {
  id: number;
  imageUrl: StaticImageData;
  title: string;
}

const GalleryTemplateGrid = ({ gallery }: { gallery: GalleryProps[] }) => {
  return (
    <div className="galleryContainer">
      {gallery.map((image, index) => (
        <div key={index} className={`image_${index}`}>
          <Image
            src={image.imageUrl}
            alt={image.title}
            className="object-cover w-full h-full "
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryTemplateGrid;
