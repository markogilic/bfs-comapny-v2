import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const TET = [1, 4, 5, 8, 10, 11, 12, 18, 20, 25, 31, 34, 39, 41]; // Odons prema sebi:Intiman emocionalna inteligencija(TET)
export const SEI = [6, 9, 13, 14, 15, 16, 17, 19, 21, 22, 23, 28, 35, 40]; //Odons prema drugima:Socialna emocionala inteligencija(SEI)
export const EIE = [2, 3, 7, 23, 25, 26, 28, 30, 32, 33, 36, 37, 38, 42]; //Odnos prema zivotu:Emocionalna inteligencija egzistencije(EIE)

interface Question {
  question: string;
  answers: { answer: string; value: number }[];
}

interface InitialStatProp {
  questions: Question[];
  status: string;
  index: number;
  testType: string;
  currAnswer: number | null;
  totalPoints: number;
  tetPoints: number;
  seiPoints: number;
  eiePoints: number;
}

const initialState: InitialStatProp = {
  questions: [],
  status: 'loding',
  index: 0,
  currAnswer: null,
  testType: 'emo',
  totalPoints: 0,
  tetPoints: 0,
  seiPoints: 0,
  eiePoints: 0,
};

export const emoTestSlice = createSlice({
  name: 'emoTest',
  initialState,
  reducers: {
    loadQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
      state.status = 'ready';
    },
    start: (state) => {
      state.status = 'active';
    },
    newAnswer: (state, action: PayloadAction<number>) => {
      // const question = state.questions[state.index];
      // const numQuestion = state.index + 1;
      state.currAnswer = action.payload;
    },
    next: (state) => {
      const question = state.questions[state.index];
      const numQuestion = state.index + 1;
      if (state.currAnswer === null) return;
      state.totalPoints += question.answers[state.currAnswer].value;
      if (TET.includes(numQuestion)) {
        state.tetPoints += question.answers[state.currAnswer].value;
      }
      if (SEI.includes(numQuestion)) {
        state.seiPoints += question.answers[state.currAnswer].value;
      }
      if (EIE.includes(numQuestion)) {
        state.eiePoints += question.answers[state.currAnswer].value;
      }
      state.index++;
      state.currAnswer = null;
    },
    finished: (state) => {
      state.status = 'finished';
    },
    back: (state) => {
      state.questions = [];
      state.status = 'loding';
      state.index = 0;
      state.currAnswer = null;
      state.totalPoints = 0;
      state.tetPoints = 0;
      state.seiPoints = 0;
      state.eiePoints = 0;
    },
  },
});

export const { loadQuestions, start, newAnswer, next, finished, back } =
  emoTestSlice.actions;

export default emoTestSlice.reducer;
