import HeroHeader from '../components/hero-header.jsx'
import Header from '../components/header.jsx'
import SquareCard from '../components/square-card.jsx'
import WideCard from '../components/wide-card.jsx';
import SideCard from '../components/side-card.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function OrbStudios() {
    return(
        <>
        <div id="orbstudios" style={{backgroundColor: 'var(--red)'}}>
        <HeroHeader 
            title="Orb Studios"
        />
        </div>
        </>
    )
}