import './App.css';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import SingleProjectPage from './pages/single-project/single-project.jsx';
import AboutMePage from './pages/about-me/about-me.jsx';
import ContactPage from './pages/contact-page/contact-page.jsx';
import ProjectPage from './pages/projects/projects.jsx';
import HomePage from './pages/homepage/homepage.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  return ( 
    <Router>
      <Header/>
      <Routes>
        <Route 
          path="/"
          element={<HomePage/>}
        />
        <Route 
          path="portfolio/:slug"
          element={<SingleProjectPage/>}
        />
        <Route 
          path="portfolio"
          element={<AboutMePage/>}
        />
        <Route 
          path="services"
          element={<ProjectPage/>}
        />
        <Route 
          path="contact"
          element={<ContactPage/>}
        />
        <Route 
          path="*"
          element={<HomePage/>}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;