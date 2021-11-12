import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Header from './Header';
import WelcomePage from './WelcomePage';
import Quote from './Quote';

const App = () => (
  <Router basename="/math-magicians">
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<WelcomePage />}
        />
        <Route
          path="/Calculator"
          element={<Calculator />}
        />
        <Route
          exact
          path="/Quote"
          element={<Quote />}
        />
      </Routes>
    </div>
  </Router>
);

export default App;
