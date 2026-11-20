import { Button, Card } from 'react-bootstrap'

export default function SquareCard({img, title, text, link}){
    const cardStyles = {
        // margin: '3rem',
        // maxWidth: '33vw',
        // marginLeft: '10%'
        // margin: '10px',
        // padding: '50px',
    }

    return(
        <>

        <Card className="">
            <Card.Header style={{ backgroundColor: "red"}}><h2>The Scathing Atheist</h2></Card.Header>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title><h5>{title}</h5></Card.Title>
                <Card.Text>
                {text}
                </Card.Text>
                <Button variant="primary">{link}</Button>
            </Card.Body>
        </Card>

        </>
    )
}