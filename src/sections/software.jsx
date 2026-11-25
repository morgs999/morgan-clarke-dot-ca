import HeroHeader from '../components/hero-header.jsx'
import Header from '../components/header.jsx'
import SquareCard from '../components/square-card.jsx'
import WideCard from '../components/wide-card.jsx';
import SideCard from '../components/side-card.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Software() {

    const software = [
        {
            "img": 'null',
            "title": 'a',
            "text": 'c',
            "link": 'e',
        },
        {
            "img": 'null',
            "title": 'b',
            "text": 'd',
            "link": 'f',
        },
    ];

    return(
        <>
        <div id="software" className="" style={{backgroundColor: 'var(--slate)'}}>
            <HeroHeader title="Software" color="var(--white)"/>
            <Header title="Komo Dev" subtitle="Software Engineer, Founder"/>

            <Container className="" style={{}}>

                <Row sm={1} lg={2} className="my-3 g-5">
                    {software.map((soft) => (
                    <Col key={soft.title}>
                        <SideCard
                            img={soft.img}
                            title={soft.title}
                            text={soft.text}
                            link={soft.link}
                            />
                    </Col>
                ))}
                </Row>

                <Row className="my-3 g-5">
                    <Col>
                        
                    </Col>
                </Row>

                <Row className="my-3 g-5">
                    <Col>
                        
                    </Col>
                </Row>
                
            </Container>
        </div>
        </>
    )
}