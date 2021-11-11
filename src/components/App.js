import React from 'react';
import Calculator from './Calculator';
import Header from './Header';

const App = () => (
  <div>
    <Header />
    <div className="calc-container">
      <Calculator />
    </div>
  </div>
);

export default App;
