import { useState } from 'react';
import NavBar from "./components/Navbar";
import './App.css';
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Timeline from './components/Timeline';
import { Footer } from "./components/Footer";

// https://ibraheemportfolio-eke4azbhdqa5czg7.germanywestcentral-01.azurewebsites.net/

function App() {
  const [activeLink, setActiveLink] = useState('banner');

  const getAciveLink = (value) => {
    switch(value) {
      case 'project':
        return <Projects />;
      case 'timeline':
        return <Timeline />;
      case 'banner':
      default:
        return <Banner />;
    }
  }


  return (
    <div className="App"> 
        <NavBar activeLink={activeLink} setActiveLink={setActiveLink} />
        {getAciveLink(activeLink)}
        <Footer />
    </div>
  );
}

export default App;
 