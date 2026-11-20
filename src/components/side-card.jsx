import { Button, Card, Row, Col } from 'react-bootstrap'

export default function SideCard({img, title, text, link}) {

    const cardStyles = {
        
    }

    return(
        <>
            <Card className="w-75 p-5">
                <Row className="g-5">
                    <Col>
                        <Card.Img style={{maxHeight: '25vh', objectFit: 'cover'}}src={img}></Card.Img>
                    </Col>
                    <Col>
                        <Card.Title>
                            <h5>Live Shows</h5>
                        </Card.Title>
                        <Card.Text>
                            <p>Did some stuff at live shows</p>
                        </Card.Text>
                    </Col>
                </Row>
            </Card>
        </>
    )
}