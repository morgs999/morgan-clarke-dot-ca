import HeroHeader from '../components/hero-header.jsx'
import Header from '../components/header.jsx'
import SquareCard from '../components/square-card.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Podcasts() {
    

    return(
        <>
            <HeroHeader title="Podcasts"/>
            <Header title="Puzzle In A Thunderstorm" subtitle="Audio Engineer, Video Editor"/>
            <Container style={{marginLeft: '10%'}}>
                <Row>
                    <Col>
                <SquareCard
                    img="/hero.jpg"
                    title="Scathing Atheist"
                    text="a scathing look at religions"
                    link="hear me"
                />
                </Col>
                <Col>
                <SquareCard
                    img="/hero.jpg"
                    title="Scathing Atheist"
                    text="a scathing look at religions"
                    link="hear me"
                />
                </Col>
                <Col>
                <SquareCard
                    img="/hero.jpg"
                    title="Scathing Atheist"
                    text="a scathing look at religions"
                    link="hear me"
                />
                </Col>
                </Row>
                <Row>
                <SquareCard
                    img="/hero.jpg"
                    title="Scathing Atheist"
                    text="a scathing look at religions"
                    link="hear me"
                />
                </Row>
                
            </Container>
        </>
    )
}