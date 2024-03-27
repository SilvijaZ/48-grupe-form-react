// import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BasicLayout } from './layout/BasicLayout';
import { LayoutWithAds } from './layout/LayoutWithAds';
import { PageHome } from './pages/PageHome';
import { PageBasketball } from './pages/PageBasketball';
import { PageVegetables } from './pages/PageVegetables';
import { Page404 } from './pages/Page404';
import { PageVegetablesInner } from './pages/PageVegetablesInner';
import { PageStudents } from './pages/PageStudents';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={BasicLayout}>
          <Route index path='/' element={<PageHome />} />
          <Route path='/basketball' element={<PageBasketball />} />
          <Route path='/students' element={<PageStudents />} />
          <Route path='*' element={<Page404 />} />
        </Route>
        <Route Component={LayoutWithAds}>
          <Route path='/vegetables' element={<PageVegetables />} />
          <Route path='/vegetables/:id' element={<PageVegetablesInner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// su :id pagauna visas nuorodas