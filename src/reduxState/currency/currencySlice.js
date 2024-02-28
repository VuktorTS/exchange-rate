import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operation';

const initialState = {
  baseCurrency: '',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, { payload }) => {
      console.log('peyload: ', payload);
      state.baseCurrency = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBaseCurrency.fulfilled, (state, { payload }) => {
      state.baseCurrency = payload;
    });
  },
});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
