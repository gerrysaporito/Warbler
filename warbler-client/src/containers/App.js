import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import{ configureStore } from '../store';

import Navbar from './Navbar';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='onboarding'>
        <Navbar />

      </div>
    </Router>
  </Provider>
);

export default App;
