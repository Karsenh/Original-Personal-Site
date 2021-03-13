import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';

const App = () => {
  return (
    <div className='App'>
      <div className='sidebar'>
        <NavBar />
      </div>
      <div className='main-content'>
        <div className='content'>
          <Switch>
            <Route path='/cv/' exact>
              <HomePage />
            </Route>
            <Route path='/about' exact>
              <AboutPage />
            </Route>
            <Route path='/portfolio' exact>
              <PortfolioPage />
            </Route>
            <Route path='/blog' exact>
              <AboutPage />
            </Route>
            <Route path='/contact' exact>
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
