interface Answer {
  answer: string;
  value: number;
}

interface Question {
  question: string;
  answers: Answer[];
}
export const assertion: Question[] = [
  {
    question:
      'Kada sam u gužvi, mogu reći osobi koja me zove da trenutno ne mogu da razgovaram.',
    answers: [
      { answer: 'NIKAD', value: 1 },
      { answer: 'RETKO', value: 2 },
      { answer: 'PONEKAD', value: 3 },
      { answer: 'UVEK', value: 4 },
    ],
  },
  {
    question:
      'Ako neko započne razgovor pre nego što završim, u stanju sam reći da mi to smeta.',
    answers: [
      { answer: 'NIKAD', value: 1 },
      { answer: 'RETKO', value: 2 },
      { answer: 'PONEKAD', value: 3 },
      { answer: 'UVEK', value: 4 },
    ],
  },
  {
    question:
      'Kada me neko neprestano uzrujava, mogu jasno izraziti svoje nezadovoljstvo.',
    answers: [
      { answer: 'RETKO', value: 2 },
      { answer: 'NIKAD', value: 1 },
      { answer: 'PONEKAD', value: 3 },
      { answer: 'UVEK', value: 4 },
    ],
  },
  {
    question: 'U stanju sam da ukažem nekome na ponašanje koje mi smeta.',
    answers: [
      { answer: 'NIKAD', value: 1 },
      { answer: 'RETKO', value: 2 },
      { answer: 'PONEKAD', value: 3 },
      { answer: 'UVEK', value: 4 },
    ],
  },
  {
    question: 'Mogu zamoliti kolege da preuzmu neku manje prijatnu obavezu.',
    answers: [
      { answer: 'NIKAD', value: 1 },
      { answer: 'RETKO', value: 2 },
      { answer: 'PONEKAD', value: 3 },
      { answer: 'UVEK', value: 4 },
    ],
  },
  {
    question: 'Mogu smireno razgovarati s osobom koja se ponaša agresivno.',
    answers: [
      { answer: 'NIKAD', value: 1 },
      { answer: 'RETKO', value: 2 },
      { answer: 'PONEKAD', value: 3 },
      { answer: 'UVEK', value: 4 },
    ],
  },
  {
    question: 'Ne reagujem burno na kritike koje dobijam.',
    answers: [
      { answer: 'NIKAD', value: 1 },
      { answer: 'RETKO', value: 2 },
      { answer: 'PONEKAD', value: 3 },
      { answer: 'UVEK', value: 4 },
    ],
  },
  {
    question: 'U stresnim situacijama uspevam da ostanem smiren i staložen.',
    answers: [
      { answer: 'NIKAD', value: 1 },
      { answer: 'RETKO', value: 2 },
      { answer: 'PONEKAD', value: 3 },
      { answer: 'UVEK', value: 4 },
    ],
  },
  {
    question: 'Mogu reći kolegi kada posao nije obavljen kako treba.',
    answers: [
      { answer: 'NIKAD', value: 1 },
      { answer: 'RETKO', value: 2 },
      { answer: 'PONEKAD', value: 3 },
      { answer: 'UVEK', value: 4 },
    ],
  },
  {
    question:
      'Kada se drugi svađaju, mogu bez problema jasno izraziti na čijoj sam strani.',
    answers: [
      { answer: 'NIKAD', value: 1 },
      { answer: 'RETKO', value: 2 },
      { answer: 'PONEKAD', value: 3 },
      { answer: 'UVEK', value: 4 },
    ],
  },
];
