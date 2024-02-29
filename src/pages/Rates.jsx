import { Wave } from 'react-animated-text';

import { Container, Heading, Loader, RatesList, Section } from 'components';
import {
  selectBaseCurrency,
  selectIsError,
  selectIsLoading,
  selectVisibleRates,
} from 'reduxState/currency/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchLatestRates } from 'reduxState/currency/operation';

const Rates = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const fileredRates = useSelector(selectVisibleRates);
  const baseCurrency = useSelector(selectBaseCurrency);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLatestRates(baseCurrency));
  }, [baseCurrency, dispatch]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${'UAH'} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />

        {fileredRates.length > 0 && <RatesList rates={fileredRates} />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default Rates;
