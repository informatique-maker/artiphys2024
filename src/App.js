import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorHandlerWrapper from './ErrorHandler/ErrorHandlerWrapper';
import Home from './pages/Home/Home';
import Partners from './pages/Partners/Partners';
import Prevention from './pages/Prevention/Prevention';
import Association from './pages/Association/Association';
import Contact from './pages/Contact/Contact';

// Manage routing
function App() {
  return (
    <Router>
      <ErrorHandlerWrapper>
        <Routes>
          <Route path='/' default element={<Home />} />
          <Route path='/partenaires' element={<Partners />} />
          <Route path='/prevention' element={<Prevention />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/association' element={<Association />} />
        </Routes>
      </ErrorHandlerWrapper>
    </Router>
  );
}

export default App;
