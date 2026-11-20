import { Button, Card } from 'react-bootstrap'

export default function WideCard({img, title, text, link}) {

    const cardStyles = {
        
    }

    return(
        <>
            <Card className="w-75 p-5">
                <Card.Img style={{maxHeight: '25vh', objectFit: 'cover'}}src={img}></Card.Img>
                    <Card.Title>
                        <h5>Live Shows</h5>
                    </Card.Title>
                    <Card.Text>
                        <p>Did some stuff at live shows</p>
                    </Card.Text>
            </Card>
        </>
    )
}