import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorHandlerWrapper from './ErrorHandler/ErrorHandlerWrapper';
import Home from './pages/Home/Home';
import Partners from './pages/Partners/Partners';
import Prevention from './pages/Prevention/Prevention';

// Manage routing
function App() {
  return (
    <Router>
      <ErrorHandlerWrapper>
        <Routes>
          <Route path='/' default element={<Home />} />
          <Route path='/partenaires' element={<Partners />} />
          <Route path='/prevention' element={<Prevention />} />
        </Routes>
      </ErrorHandlerWrapper>
    </Router>
  );
}

export default App;
