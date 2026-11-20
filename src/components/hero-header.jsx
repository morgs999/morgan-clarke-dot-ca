export default function HeroHeader ({title}) {

    const heroHeaderStyles = {
        letterSpacing: '-10px',
        color: 'white',
        marginLeft: '10%',
        fontSize: '15rem',
    }

    return(
        <h1 style={heroHeaderStyles}>
            {title}
        </h1>
    )
}