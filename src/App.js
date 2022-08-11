import { React } from 'react';
import AboutDescription from './components/AboutDescription/AboutDescription';
import Artwork from './components/Artwork/Artwork';
import ContactUs from './components/ContactUs/ContactUs';
import PageTop from './components/PageTop/PageTop';
import TopNavigation from './components/TopNavigation/TopNavigation';
import AboutPage from './pages/AboutPage';
import AllCoursePage from './pages/AllCoursePage';
import AllServicesPage from './pages/AllServicesPage';
import ArtworkPage from './pages/ArtworkPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';


function App() {
  return (
    <div>
      <AllServicesPage />
    </div>
  );
}

export default App;
