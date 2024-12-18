import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  testType: 'web';
  testName: string;
  userId: string;
  timeRemaining: number;
}

const initialState: InitialStatProp = {
  questions: [],
  // loading, error ,ready ,active, finished
  status: 'loding',
  index: 0,
  currAnswer: null,
  points: 0,
  wrongAnswers: [],
  testType: 'web',
  testName: '',
  userId: '',
  timeRemaining: 600,
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTestName: (state, action: PayloadAction<string>) => {
      state.testName = action.payload;
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
    tick: (state) => {
      state.timeRemaining--;
    },
    back: (state) => {
      state.testName = '';
      state.questions = [];
      state.status = 'loading';
      state.index = 0;
      state.currAnswer = null;
      state.points = 0;
      state.wrongAnswers = [];
      state.timeRemaining = 20;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setLoading: (state) => {
      state.status = 'loading';
      state.testName = '';
    },
  },
});

export const {
  dataRecived,
  start,
  newAnswer,
  next,
  finished,
  setTestName,
  back,
  setUserId,
  tick,
  setLoading,
} = testSlice.actions;

export default testSlice.reducer;
