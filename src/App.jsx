import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Result from './Result';
import Redirect from './Redirect';
import Footer from './Footer';

function App() {
  return (
    <div className='min-h-screen'>
      <header className='mb-5 bg-blue-400 px-6 shadow-md'>
        <h1 className='text-white mx-auto py-6 text-left md:pl-20 text-2.5xl lg:text-5xl font-bold max-w-screen-xl'>
          <a href='/'>miuURL</a>
        </h1>
      </header>

      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/result'>
          <Result />
        </Route>
        <Route path='/:hash'>
          <Redirect />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
