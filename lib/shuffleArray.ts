import { StaticImageData } from 'next/image';

interface GalleryImage {
  id: number;
  imageUrl: StaticImageData;
  title: string;
}

// export function shuffleArray(array: GalleryImage[]): GalleryImage[] {
//   let shuffedArray = [] as GalleryImage[];
//   let usedIndex = [] as number[];

//   let i = 0;

//   while (i < array.length) {
//     let randomIndex = Math.floor(Math.random() * array.length);

//     if (!usedIndex.includes(randomIndex)) {
//       shuffedArray.push(array[randomIndex]);
//       usedIndex.push(randomIndex);
//       i++;
//     }
//   }

//   return shuffedArray;
// }

export function shuffleArray(array: GalleryImage[]): GalleryImage[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
