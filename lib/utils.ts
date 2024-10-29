import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { StaticImageData } from 'next/image';
import { format } from 'date-fns';
import { srLatn } from 'date-fns/locale';

interface GalleryImage {
  id: number;
  imageUrl: StaticImageData;
  title: string;
}

interface ObjProp {
  name: string;
  value: number;
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
    tags?: string[];
    titleList?: string;
    list: string[];
    optionalFileds?: string[];
    final?: string;
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

export function getProgramById(array: ProgramProps[], id: number) {
  const program = array.find((program) => program.id === id);
  return program;
}

export function formatDate(date: string) {
  const formattedDate = format(new Date(date), 'dd. MMMM yyyy.', {
    locale: srLatn,
  });
  return formattedDate;
}

export function subtractTime(testTime: number, timeToSubtract: number) {
  const totalSecondsIn10Minutes = timeToSubtract * 60; // 10 minutes in seconds

  const remainingSeconds = totalSecondsIn10Minutes - testTime;

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return { minutes, seconds };
}

export function sortResultLeaderTest(
  num1: number,
  num2: number,
  num3: number,
  num4: number
) {
  let objResult = [
    { name: 'autokratski', value: num1 },
    { name: 'demokratski', value: num2 },
    { name: 'slobodni', value: num3 },
    { name: 'situacioni', value: num4 },
  ];

  objResult.sort((a, b) => b.value - a.value);

  return objResult;
}

export function returnHighestValue(obj: ObjProp[]) {
  if (obj[0].value !== obj[1].value) {
    return [obj[0]];
  }
  if (obj[1].value !== obj[2].value) {
    return [obj[0], obj[1]];
  }
  if (obj[2].value !== obj[3].value) {
    return [obj[0], obj[1], obj[2]];
  }
  return obj;
}

export function calcPrecentige(part: number, whole: number) {
  let number = (part / whole) * 100;
  return Number(number.toFixed(2));
}
