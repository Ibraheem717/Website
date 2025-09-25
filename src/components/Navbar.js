import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import Logo from '../assets/img/logo.svg';
import LinkedIn from '../assets/img/nav-icon1.svg';
import GitHub from '../assets/img/github.png';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const updateActiveLink = (value) => {
        setActiveLink(value)
    }

    const MenuTab = ({value, displayedValue}) => (
        <Nav.Link href={`#${value}`} className={activeLink === `#${value}` ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>{displayedValue}</Nav.Link>
    )

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar expand="lg">
            <Container>

                <Navbar.Brand href="#home" className={scrolled ? "scrolled" : ""}>
                    <img src={Logo} alt=''/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <MenuTab value="home" displayedValue="Home" />
                        <MenuTab value="skills" displayedValue="Skills" />
                        <MenuTab value="projects" displayedValue="Projects" />
                    </Nav>

                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/ibraheem-samih-b3b521261/'><img src={LinkedIn} alt=''/></a> 
                            {/* Put in LinkedIn */}
                            <a href='https://github.com/Ibraheem717'><img src={GitHub} alt=''/></a> 
                            {/* Put in GitHub */}
                        </div>
                    </span>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}

export default NavBar