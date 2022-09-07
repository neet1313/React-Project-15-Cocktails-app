import React, { Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import SingleCocktail from './pages/SingleCocktail'
import Layout from './components/Layout/Layout'
import Loading from './components/Loading';

//Lazy Loaded components
const LazyHome = lazy(() => import('./pages/Home'));
const LazyAbout = lazy(() => import('./pages/About'));
const LazyError = lazy(() => import('./pages/Error'));

function App() {
  return (
    <>
      <Layout />
      <Suspense fallback={<Loading />}>
        <Switch >
          <Route path="/" exact><Redirect to="/home" /></Route>
          <Route path='/home' exact><LazyHome /></Route>
          <Route path="/home/:cocktailId"><SingleCocktail /></Route>
          <Route path="/about"><LazyAbout /></Route>
          <Route path="/*"><LazyError /></Route>
        </Switch>
      </Suspense>
    </>
  )
}

export default App
