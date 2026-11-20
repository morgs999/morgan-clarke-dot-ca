export default function Header({title, subtitle}) {

    const headerStyles = {
        // fontSize: '10rem',
        // letterSpacing: '-5.5px',
        color: 'white',
        marginLeft: '10%',
    }

    return(
        <>
        <div style={headerStyles}>
        <h2 style={{
            fontSize: '10rem',
            marginBottom: '-0.5rem',
        }}
        >{title}</h2>
        <hr/>
        <h3 style={{
            fontSize: '4.5rem',
            marginTop: '-0.5rem',
        }}
        >{subtitle}</h3>
        </div>
        </>
    )
}