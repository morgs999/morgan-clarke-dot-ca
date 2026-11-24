import HeroHeader from '../components/hero-header.jsx'
import Header from '../components/header.jsx'
import SquareCard from '../components/square-card.jsx'
import WideCard from '../components/wide-card.jsx';
import SideCard from '../components/side-card.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Podcasts() {

    const podcasts = [
        {
            "img": '/scathingcover.png',
            "title": 'Scathing Atheist',
            "text": 'A Scathing look at religions',
            "link": 'scathingatheist.com',
            "stats": {
                "listeners": 100666,
                "episodes": "Over 700 "
            }
        },
        {
            "img": '/gamcover.jpeg',
            "title": 'God Awful Movies',
            "text": "Making fun of God's movies",
            "link": 'godawfulmovieslive.com',
            "stats": {
                // "listeners": 666100,
                "episodes": "Over 500 "
            }
        },
        {
            "img": '/skepcover.jpg',
            "title": 'Skepticrat',
            "text": 'Politics and Religion',
            // "link": 'patreon.com/skepticrat',
            "stats": {
                "listeners": 8645,
                "episodes": "Over 250 "
            }
        }
    ]
    

    return(
        <>
        <div id="podcasts" style={{backgroundColor: 'var(--slate)'}}>
            <HeroHeader title="Podcasts"/>
            <Header title="Puzzle In A Thunderstorm" subtitle="Audio Engineer, Video Editor"/>
            <Container className="" style={{}}>

                <Row sm={1} md={2} lg={3} className="my-3 g-5">
                    {podcasts.map((podcast) => (
                    <Col key={podcast.title}>
                        <SquareCard
                            img={podcast.img}
                            title={podcast.title}
                            text={podcast.text}
                            link={podcast.link}
                            stats={podcast.stats}
                            />
                    </Col>
                ))}
                </Row>

                <Row className="my-3 g-5">
                    <Col>
                        <WideCard
                            className=""
                            img="/hero.jpg"
                            title="Live Show Experience"
                            text="Did some crazy stuff at live shows that I don't want to talk about"
                            link="www.morganclarke.ca"
                        />
                    </Col>
                </Row>

                <Row className="my-3 g-5">
                    <Col>
                        <SideCard
                            className=""
                            img="/dndcover.jpg"
                            title="DnD Minus"
                            text="Dungeons & Dragons but with dick jokes.  Not dragon dick jokes per se..."
                            link="patreon.com/dndminus"
                        />
                    </Col>
                </Row>
                
            </Container>
        </div>
        </>
    )
}