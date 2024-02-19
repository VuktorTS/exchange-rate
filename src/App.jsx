// import Home from 'pages/Home';
// import Rates from 'pages/Rates';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { ROUTES } from './helpers';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Rates = lazy(() => import('pages/Rates'));

export const App = () => {
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
