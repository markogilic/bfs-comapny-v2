import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { StaticImageData } from 'next/image';

interface GalleryImage {
  id: number;
  imageUrl: StaticImageData;
  title: string;
}

interface ProgramProps {
  id: number;
  imageUrl: StaticImageData;
  typeData: string;
  type: string;
  title: string;
  desc: string;
  stats: {
    duration: string;
    location: string;
    price: string;
  };
  fullDesc: {
    main: string;
    tags: string[];
    list: string[];
  };
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffleArray(array: GalleryImage[]): GalleryImage[] {
  let shuffedArray = [] as GalleryImage[];
  let usedIndex = [] as number[];

  let i = 0;

  while (i < array.length) {
    let randomIndex = Math.floor(Math.random() * array.length);

    if (!usedIndex.includes(randomIndex)) {
      shuffedArray.push(array[randomIndex]);
      usedIndex.push(randomIndex);
      i++;
    }
  }

  return shuffedArray;
}

export function getProgramsByType(type: string, array: ProgramProps[]) {
  const programs = array.filter((program) => program.typeData === type);
  return programs;
}

export function getProgramById(array: { id: number }[], id: number) {
  const program = array.find((program) => program.id === id);
  return program;
}
