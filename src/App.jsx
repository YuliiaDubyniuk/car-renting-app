import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import { AppContainer } from './App.styled';

const HomePage = lazy(() => import('/src/pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('/src/pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('/src/pages/FavoritesPage/FavoritesPage'));

const appRoutes = [
  { path: '/', element: <HomePage/> },
  { path: '/catalog', element: <CatalogPage /> },
  { path: '/favorites', element: <FavoritesPage /> },
  { path: '/*',  element: <Navigate to='/' replace={true}/>}
]

function App() {
  
 return (
   <>
     <Header />
     <AppContainer>
    <Suspense fallback={<Loader />}>
      <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
       </Suspense>
       </AppContainer>
    </>
  )
}

export default App;
