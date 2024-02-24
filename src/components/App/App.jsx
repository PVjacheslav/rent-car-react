import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('../../pages/home/Home'));
const Catalog = lazy(() => import('../../pages/catalog/Catalog'));
const Favorites = lazy(() => import('../../pages/favorites/Favorites'));

export default function App() {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    // </Router>

  );
}
