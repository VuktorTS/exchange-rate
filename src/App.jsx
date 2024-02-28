// import Home from 'pages/Home';
// import Rates from 'pages/Rates';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { ROUTES } from './helpers';
import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from 'reduxState/currency/currencySlice';
import { fetchBaseCurrency } from 'reduxState/currency/operation';
// import { getUserInfo } from './service';

const Home = lazy(() => import('pages/Home'));
const Rates = lazy(() => import('pages/Rates'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    const success = ({ coords }) => {
      dispatch(fetchBaseCurrency(coords));
    };
    const error = () => {
      dispatch(setBaseCurrency('USD'));
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.rates} element={<Rates />}></Route>
          <Route path="*" element={<Navigate to={ROUTES.home} />} />
        </Route>
      </Routes>
    </>
  );
};
