import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage'));

const appRoutes = [
  { path: '/', element: <HomePage/> },
  { path: '/catalog', element: <CatalogPage /> },
  { path: '/favorites', element: <FavoritePage /> },
  { path: '/*',  element: <Navigate to='/' replace={true}/>}
]

function App() {
  
 return (
   <>
    <Header /> 
    <Suspense fallback={<Loader />}>
      <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
    </>
  )
}

export default App;
