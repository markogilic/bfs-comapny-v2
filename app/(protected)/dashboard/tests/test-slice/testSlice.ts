import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { set } from 'date-fns';

interface Question {
  question: string;
  options: string[];
  answer: number;
}
interface wrongAnswers {
  questionIndex: number;
  wrongAnswerIndex: number;
}
interface InitialStatProp {
  questions: Question[];
  status: string;
  index: number;
  currAnswer: number | null;
  points: number;
  wrongAnswers: wrongAnswers[];
  testType: string;
}

const initialState: InitialStatProp = {
  questions: [],
  // loading, error ,ready ,active, finished
  status: 'loding',
  index: 0,
  currAnswer: null,
  points: 0,
  wrongAnswers: [],
  testType: '',
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTestType: (state, action: PayloadAction<string>) => {
      state.testType = action.payload;
    },

    dataRecived: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
      state.status = 'ready';
    },
    start: (state) => {
      state.status = 'active';
    },
    newAnswer: (state, action: PayloadAction<number>) => {
      const question = state.questions[state.index];
      state.currAnswer = action.payload;
      state.points =
        action.payload === question.answer ? state.points + 1 : state.points;
      state.wrongAnswers =
        action.payload !== question.answer
          ? [
              ...state.wrongAnswers,
              {
                questionIndex: state.index,
                wrongAnswerIndex: action.payload,
              },
            ]
          : state.wrongAnswers;
    },
    next: (state) => {
      state.index++;
      state.currAnswer = null;
    },
    finished: (state) => {
      state.status = 'finished';
    },
  },
});

export const { dataRecived, start, newAnswer, next, finished, setTestType } =
  testSlice.actions;

export default testSlice.reducer;
