import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'features/layout/Layout';
import NotFound from 'features/errorPages/NotFound';
import Question1 from 'features/question1/Question1';
import Question2 from 'features/question2/Question2';
import Question3 from 'features/question3/Question3';
import Question4 from 'features/question4/Question4';
import Question5 from 'features/question5/Question5';
import Question6 from 'features/question6/Question6';

const App = () => {
  return (
    <div className="App">
      <ToastContainer autoClose={false} transition={Zoom} style={{ marginTop: '50px' }} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route exact path="" element={<Question1 />} />
            <Route exact path="question1" element={<Question1 />} />
            <Route exact path="question2" element={<Question2 />} />
            <Route exact path="question3" element={<Question3 />} />
            <Route exact path="question4" element={<Question4 />} />
            <Route exact path="question5" element={<Question5 />} />
            <Route exact path="question6" element={<Question6 />} />
            <Route exact path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
