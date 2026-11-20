import { Button, Card } from 'react-bootstrap'

export default function SquareCard({img, title, text, link}){
    const cardStyles = {
        margin: '3rem'
        
        // marginLeft: '10%'
        // margin: '10px',
        // padding: '100px',
    }

    return(
        <>
        <div style={cardStyles}>
        <Card style={{ width: '' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {text}
                </Card.Text>
                <Button variant="primary">{link}</Button>
            </Card.Body>
        </Card>
        </div>
        </>
    )
}