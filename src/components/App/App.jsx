import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import NavBar from 'components/NavBar/NavBar';

const Home = lazy(() => import('../../pages/home/home'));
const Catalog = lazy(() => import('../../pages/catalog/catalog'));
// const Favorites = lazy(() => import('../../pages/Favorites/Favorites'));

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          {/* <Route path="/favorites" element={<Favorites />} /> */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
