// import { Heading } from 'components';
import Home from 'pages/Home';
import Rates from 'pages/Rates';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';

export const App = () => {
  // return <Heading title="Just do it!" />;
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/rates" element={<Rates />}></Route>
        </Route>
      </Routes>
    </>
  );
};
