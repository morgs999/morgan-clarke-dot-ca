import { Button, Card } from 'react-bootstrap'

export default function WideCard({img, title, text, link}) {

    return(
        <>
            <Card 
                className="rounded-0 border-0 shadow-lg" 
                style={{
                    color: 'white',
                    backgroundColor: 'var(--dark)'
                }}>

                <Card.Img
                    className="rounded-0"
                    style={{
                        maxHeight: '45vh',
                        objectFit: 'cover'
                    }}
                    src={img}/>
                <Card.Body 
                    className=""
                    style={{
                        borderBottom: '5px solid var(--white)',
                        borderLeft: '5px solid var(--white)',
                        margin: '20px',
                        
                    }}>
                    <Card.Title style={{letterSpacing: '7.5px'}}>
                        <h2>{title}</h2>
                    </Card.Title>

                    <Card.Text>
                        {text}
                    </Card.Text>

                    <Card.Link href={`https://${link}`} target="_blank">
                        {link}
                    </Card.Link>
                </Card.Body>

            </Card>
        </>
    )
}