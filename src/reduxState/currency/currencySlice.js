import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchLatestRates,
} from './operation';

const initialState = {
  baseCurrency: '',
  exchangeInfo: null,
  isLoading: false,
  isError: null,
  rates: [],
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
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, { payload }) => {
        state.baseCurrency = payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, { payload }) => {
        state.exchangeInfo = payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(fetchLatestRates.fulfilled, (state, { payload }) => {
        state.rates = payload;
        state.isLoading = false;
        state.isError = null;
      })

      // -----------------------------------------------------------------------------------------------------

      .addMatcher(
        isAnyOf(
          fetchBaseCurrency.pending,
          fetchExchangeCurrency.pending,
          fetchLatestRates.rejected,
        ),
        state => {
          state.isLoading = true;
          state.isError = null;
        },
      )
      .addMatcher(
        isAnyOf(
          fetchBaseCurrency.rejected,
          fetchExchangeCurrency.rejected,
          fetchLatestRates.rejected,
        ),
        state => {
          state.isLoading = false;
          state.isError = true;
          state.exchangeInfo = null;
        },
      );
  },
});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
