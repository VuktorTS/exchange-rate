import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operation';

const initialState = {
  baseCurrency: '',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, { peyload }) => {
      state.baseCurrency = peyload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBaseCurrency.fullfilled, (state, { peyload }) => {
      state.baseCurrency = peyload;
    });
  },
});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
