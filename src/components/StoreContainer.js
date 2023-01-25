import React, { useState } from 'react';
import Header from './Header.js';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './Footer'

export default function PortfolioHolder() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Projects') {
          return <Projects />;
        }
        return <Contact />;
      };
    
      const handlePageChange = (page) => setCurrentPage(page);
    
      return (
        <div class="homepage">
          {/* We are passing the currentPage from state and the function to update it */}
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* Here we are calling the renderPage method which will return a component  */}
          {renderPage()}
          <Footer/>
        </div>
      );
    }