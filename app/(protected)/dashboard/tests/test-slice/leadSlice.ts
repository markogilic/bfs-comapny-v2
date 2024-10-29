import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const autokratski = [4, 6, 12, 14]; // Uatokratski lider
const demokratski = [1, 8, 11, 13]; // Demokratski lider
const slobodni = [2, 7, 9, 16]; // Slobodni lider
const situacioni = [3, 5, 10, 15]; // Situacioni lider

interface Question {
  question: string;
  answers: { text: string; value: number }[];
}

type SortedResult = {
  name: string;
  value: number;
};

interface InitialStatProp {
  questions: Question[];
  status: string;
  index: number;
  currAnswer: number | null;
  autkratskiPoints: number;
  demokratskiPoints: number;
  slobodniPoints: number;
  situacioniPoints: number;
  testType: string;
  testName: string;
  sortedResult: SortedResult[];
}

const initialState: InitialStatProp = {
  questions: [],
  status: 'loding',
  testType: 'soft',
  testName: 'Stil liderstva',
  index: 0,
  currAnswer: null,
  autkratskiPoints: 0,
  demokratskiPoints: 0,
  slobodniPoints: 0,
  situacioniPoints: 0,
  sortedResult: [],
};

export const leadSlice = createSlice({
  name: 'leadTest',
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
      state.currAnswer = action.payload;
    },
    next: (state) => {
      const question = state.questions[state.index];
      const numQuestion = state.index + 1;
      if (state.currAnswer === null) return;
      if (autokratski.includes(numQuestion)) {
        state.autkratskiPoints += question.answers[state.currAnswer].value;
      }
      if (demokratski.includes(numQuestion)) {
        state.demokratskiPoints += question.answers[state.currAnswer].value;
      }
      if (slobodni.includes(numQuestion)) {
        state.slobodniPoints += question.answers[state.currAnswer].value;
      }
      if (situacioni.includes(numQuestion)) {
        state.situacioniPoints += question.answers[state.currAnswer].value;
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
      state.autkratskiPoints = 0;
      state.demokratskiPoints = 0;
      state.slobodniPoints = 0;
      state.situacioniPoints = 0;
      state.sortedResult = [];
    },
    updateSortResult: (
      state,
      action: PayloadAction<
        {
          name: string;
          value: number;
        }[]
      >
    ) => {
      state.sortedResult = action.payload;
    },
  },
});

export const {
  loadQuestions,
  start,
  newAnswer,
  next,
  finished,
  back,
  updateSortResult,
} = leadSlice.actions;

export default leadSlice.reducer;
