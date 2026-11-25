export default function HeroHeader ({title, color}) {

    const heroHeaderStyles = {
        letterSpacing: '-11px',
        color: `${color}`,
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