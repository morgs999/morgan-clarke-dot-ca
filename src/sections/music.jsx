import HeroHeader from '../components/hero-header.jsx';
import Header from '../components/header.jsx';
import SquareCard from '../components/square-card.jsx'
import WideCard from '../components/wide-card.jsx';
import SideCard from '../components/side-card.jsx';
import Song from '../components/song.jsx';
import Spotify from '../components/spotify.jsx';
import Carousel from '../components/carousel.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Music() {

    const songs = [
        {
            'file': '/audio/Bad-Dog-MASTER.wav',
            'img': '/hero.jpg',
            'title': '',
            'text': '',
        }
    ]

    return(
        <>
        <div id="originalmusic" style={{backgroundColor: 'var(--white)'}}>
            
            <HeroHeader 
                title="Original Music"
            />

            <Container>
                <Row sm={1} md={1} lg={2} className="my-3 g-5">
                    {songs.map((song) => (
                    <Col key={song.title}>
                        <SideCard
                            img={song.img}
                            title={song.title}
                            text={song.text}
                            />
                        <Song 
                            file={song.file}
                        />
                    </Col>
                    ))}
                    
                    <Col>
                        <Carousel />
                    </Col>
                </Row>
            </Container>
            
        </div>
        </>
    )
}