import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function DesktopNavbar() {
    const desktopStyles = {
            fontFamily: 'Bebas Neue',
            fontSize: '4rem',
            // marginBottom: '800px',
            position: 'sticky',
            top: '0',
            left: '0',
            right: '0',
            zIndex: '111',
            backgroundColor: 'var(--dark)',
            '--bs-navbar-color': 'var(--white)',
            '--bs-navbar-brand-color': 'var(--white)',
            '--bs-navbar-active-color': 'var(--slate)',
            '--bs-navbar-brand-active-color': 'var(--white)',
            '--bs-navbar-hover-color': 'var(--gold)',
            '--bs-navbar-brand-hover-color': 'var(--white)'
    }

    return(
        <>
        <Navbar className="my-navbar" style={desktopStyles}>
            <Container>
                <Navbar.Brand >MorganClarke.Ca</Navbar.Brand>
                <Nav className="me-auto text-end">
                    <Nav.Link href="#podcasts">Podcasts</Nav.Link>
                    <div style={{color: 'var(--white)'}}>|</div>
                    <Nav.Link href="#software">Software</Nav.Link>
                    <div style={{color: 'var(--white)'}}>|</div>
                    <Nav.Link href="#orbstudios">Orb Studios</Nav.Link>
                    <div style={{color: 'var(--white)'}}>|</div>
                    <Nav.Link href="#originalmusic">Original Music</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}