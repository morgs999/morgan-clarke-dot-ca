import { Button, Card } from 'react-bootstrap'

export default function SquareCard({img, title, text, link, stats}){

    return(
        <>

        <Card 
            className="rounded-0 border-0 shadow-lg h-100" 
            style={{
                color: 'white', 
                backgroundColor: 'var(--red)',
            }}>
            
            <Card.Img className="rounded-0" style={{}} variant="top" src={img} />

            <Card.Body>
                <Card.Title style={{letterSpacing: '7.5px'}}><h4>{title}</h4></Card.Title>
                <Card.Text>
                {text}
                </Card.Text>
                {link && (
                    <Card.Link href={`https://${link}`} target="_blank">
                        {link}
                    </Card.Link>
                )}
                {stats.listeners && (
                    <Card.Text className="text-end">
                        {stats.listeners} Listeners!
                    </Card.Text>
                )}
                {stats.episodes && (
                    <Card.Text className="text-end">
                        {stats.episodes} Episodes!
                    </Card.Text>
                )}
            </Card.Body>
            
        </Card>

        </>
    )
}