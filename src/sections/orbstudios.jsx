import HeroHeader from '../components/hero-header.jsx'
import Header from '../components/header.jsx'
import SquareCard from '../components/square-card.jsx'
import WideCard from '../components/wide-card.jsx';
import SideCard from '../components/side-card.jsx';
import SideParallax from '../components/side-parallax.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function OrbStudios() {
    return(
        <>
        <div id="orbstudios" style={{backgroundColor: 'var(--red)'}}>
            <HeroHeader 
                title="Orb Studios"
                color="var(--white)"
            />
            <Container>
                <Row>
            <SideParallax 
                img="/liveroom2.jpg"
                side="slideLeft"
                delay=""
            />
            </Row>
            <Row>
            <SideParallax 
                img="/controlroom1.jpg"
                side="slideRight"
                delay={0}
            />
            </Row>
            <Row>
            <SideParallax 
                img="/controlroom1.jpg"
                side="slideRight"
                delay={0.25}
            />
            </Row>
            <Row>
            <SideParallax 
                img="/controlroom1.jpg"
                side="slideRight"
                delay={100}
            />
            </Row>
            </Container>
        </div>
        </>
    )
}