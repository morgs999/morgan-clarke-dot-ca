export default function HeroHeader ({title}) {

    const heroHeaderStyles = {
        letterSpacing: '-11px',
        color: 'white',
        marginLeft: '10%',
        fontSize: '15rem',
        transform: 'scaleY(1.25)'
    }

    return(
        <h1 style={heroHeaderStyles}>
            {title}
        </h1>
    )
}