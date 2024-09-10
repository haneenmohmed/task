import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';  
import Navbar from './components/Navbar/Navbar';
import SearchNavbar from './components/SearchNavBar/SearchNavbar';
import HeroSection from './components/Hero/HeroSection';
import MostPopular from './components/MostPopular/MostPopular';
import HowWork from './components/HowWork/HowWork';
import PopularCategory from './components/PopularCategory/PopularCategory';
import Testimonial from './components/Testimonial/Testimonial';
import EmployerComponent from './components/Employer/Employer';
import TopCompanies from './components/TopCompanies/TopCompanies';
import Footer from './components/Footer/Footer';
import FindJobs from './pages/FindJob/FindJob'; 
import JobDetail from './pages/JobDetail/JobDetail'; 
import FeaturedJobs from './components/FeaturedJobs /FeaturedJobs';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); 

  return (
    <>
      <Navbar />
      {location.pathname !== '/find-job' && !location.pathname.startsWith('/find-job/') && <SearchNavbar />}
      
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <MostPopular />
            <HowWork />
            <PopularCategory />
            <TopCompanies />
            <FeaturedJobs />
            <Testimonial />
            <EmployerComponent />
          </>
        } />
        <Route path="/find-job" element={<FindJobs />} />
        <Route path="/find-job/:id" element={<JobDetail />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
