import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Question {
  answers: { answer: string; value: number }[];
  question: string;
}

interface InitialStatProp {
  questions: Question[];
  status: string;
  index: number;
  currAnswer: number | null;
  points: number;
  testType: string;
  testName: string;
}

const initialState: InitialStatProp = {
  questions: [],
  status: 'loding',
  index: 0,
  currAnswer: null,
  points: 0,
  testType: 'soft',
  testName: 'asertivnost',
};

export const assertionSlice = createSlice({
  name: 'assertion',
  initialState,
  reducers: {
    dataRecived: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
      state.status = 'ready';
    },
    start: (state) => {
      state.status = 'active';
    },
    newAnswer: (state, action: PayloadAction<number>) => {
      state.currAnswer = action.payload;
    },
    nextQuestion: (state) => {
      const question = state.questions[state.index];
      if (state.currAnswer === null) return;
      state.points += question.answers[state.currAnswer].value;
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
      state.points = 0;
    },
  },
});

export const { dataRecived, start, newAnswer, nextQuestion, back, finished } =
  assertionSlice.actions;

export default assertionSlice.reducer;
