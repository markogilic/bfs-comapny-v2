interface Answer {
  option: string;
  value: number;
}

interface Question {
  text: string;
  answers: Answer[];
}
export const assertion: Question[] = [
  {
    text: 'Kada sam u gužvi, mogu reći osobi koja me zove da trenutno ne mogu da razgovaram.',
    answers: [
      { option: 'NIKAD', value: 1 },
      { option: 'RETKO', value: 2 },
      { option: 'PONEKAD', value: 3 },
      { option: 'UVEK', value: 4 },
    ],
  },
  {
    text: 'Ako neko započne razgovor pre nego što završim, u stanju sam reći da mi to smeta.',
    answers: [
      { option: 'NIKAD', value: 1 },
      { option: 'RETKO', value: 2 },
      { option: 'PONEKAD', value: 3 },
      { option: 'UVEK', value: 4 },
    ],
  },
  {
    text: 'Kada me neko neprestano uzrujava, mogu jasno izraziti svoje nezadovoljstvo.',
    answers: [
      { option: 'NIKAD', value: 1 },
      { option: 'RETKO', value: 2 },
      { option: 'PONEKAD', value: 3 },
      { option: 'UVEK', value: 4 },
    ],
  },
  {
    text: 'U stanju sam da ukažem nekome na ponašanje koje mi smeta.',
    answers: [
      { option: 'NIKAD', value: 1 },
      { option: 'RETKO', value: 2 },
      { option: 'PONEKAD', value: 3 },
      { option: 'UVEK', value: 4 },
    ],
  },
  {
    text: 'Mogu zamoliti kolege da preuzmu neku manje prijatnu obavezu.',
    answers: [
      { option: 'NIKAD', value: 1 },
      { option: 'RETKO', value: 2 },
      { option: 'PONEKAD', value: 3 },
      { option: 'UVEK', value: 4 },
    ],
  },
  {
    text: 'Mogu smireno razgovarati s osobom koja se ponaša agresivno.',
    answers: [
      { option: 'NIKAD', value: 1 },
      { option: 'RETKO', value: 2 },
      { option: 'PONEKAD', value: 3 },
      { option: 'UVEK', value: 4 },
    ],
  },
  {
    text: 'Ne reagujem burno na kritike koje dobijam.',
    answers: [
      { option: 'NIKAD', value: 1 },
      { option: 'RETKO', value: 2 },
      { option: 'PONEKAD', value: 3 },
      { option: 'UVEK', value: 4 },
    ],
  },
  {
    text: 'U stresnim situacijama uspevam da ostanem smiren i staložen.',
    answers: [
      { option: 'NIKAD', value: 1 },
      { option: 'RETKO', value: 2 },
      { option: 'PONEKAD', value: 3 },
      { option: 'UVEK', value: 4 },
    ],
  },
  {
    text: 'Mogu reći kolegi kada posao nije obavljen kako treba.',
    answers: [
      { option: 'NIKAD', value: 1 },
      { option: 'RETKO', value: 2 },
      { option: 'PONEKAD', value: 3 },
      { option: 'UVEK', value: 4 },
    ],
  },
  {
    text: 'Kada se drugi svađaju, mogu bez problema jasno izraziti na čijoj sam strani.',
    answers: [
      { option: 'NIKAD', value: 1 },
      { option: 'RETKO', value: 2 },
      { option: 'PONEKAD', value: 3 },
      { option: 'UVEK', value: 4 },
    ],
  },
];
