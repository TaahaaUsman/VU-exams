import React from 'react';
// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CoursesList from './components/CoursesList';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Quiz from './components/Quiz';
// React router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Layout component for standard pages
const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <div className="flex mt-8">
      <Sidebar />
      {children}
    </div>
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Quiz route without layout */}
        <Route path="/quiz" element={<Quiz />} />

        {/* All other routes with layout */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/courseslist"
          element={
            <Layout>
              <CoursesList />
            </Layout>
          }
        />
        <Route
          path="/contactus"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
