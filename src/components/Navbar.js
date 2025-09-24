import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

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
                    <img src={''} alt='Logo' />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <MenuTab value="home" displayedValue="Home" />
                        <MenuTab value="skills" displayedValue="Skills" />
                        <MenuTab value="projects" displayedValue="Projects" />
                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}

export default NavBar