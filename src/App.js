import { useState } from 'react';
import NavBar from "./components/Navbar";
import './App.css';
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  const [activeLink, setActiveLink] = useState('banner');

  const getAciveLink = (value) => {
    switch(value) {
      case 'project':
        return <Projects />;
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
 