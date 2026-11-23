import { Button, Card, Row, Col } from 'react-bootstrap'

export default function SideCard({img, title, text, link}) {

    return(
        <>
            <Card 
                className="rounded-0 border-0 shadow-lg"
                style={{
                    color: 'white',
                    backgroundColor: 'var(--dark)'
                }}>

                <Row className="">

                    <Col md lg="4">
                        <Card.Img 
                            className="rounded-0"
                            style={{
                                maxHeight: '45vh', 
                                objectFit: 'contain'
                            }}
                            src={img}/>
                    </Col>

                    <Col lg="8">
                        <Card.Body
                            className=""
                            style={{
                                borderRight: '5px solid var(--white)',
                                borderTop: '5px solid var(--white)',
                                margin: '20px'
                            }}
                        >
                            <Card.Title style={{letterSpacing: '7.5px'}}>
                                <h4>{title}</h4>
                            </Card.Title>
                            <Card.Text>
                                {text}
                            </Card.Text>
                            <Card.Link href={`https://${link}`} target="_blank">
                                {link}
                            </Card.Link>
                        </Card.Body>
                    </Col>

                </Row>

            </Card>
        </>
    )
}