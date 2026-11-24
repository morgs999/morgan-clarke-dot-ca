import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MobileNavbar() {
    const mobileStyles = {
            fontFamily: 'Bebas Neue',
            position: 'fixed',
            bottom: '0',
            top: 'auto',
            left: '0',
            right: '0',
            zIndex: '111',
            backgroundColor: 'var(--dark)',
            '--bs-navbar-color': 'var(--white)',
            '--bs-navbar-brand-color': 'var(--white)',
            '--bs-navbar-hover-color': 'var(--slate)',
            '--bs-navbar-brand-hover-color': 'var(--slate)'
    }

    return (
        <>
        <Navbar className="my-navbar" style={mobileStyles}>
            <Container>
                {/* <Navbar.Brand >MorganClarke.Ca</Navbar.Brand> */}
                <Nav className="me-auto">
                    <Nav.Link href="#podcasts">Podcasts</Nav.Link>
                    <Nav.Link href="#software">Software</Nav.Link>
                    <Nav.Link href="#orbstudios">Orb Studios</Nav.Link>
                    <Nav.Link href="#originalmusic">Original Music</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}