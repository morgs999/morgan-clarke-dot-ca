export default function Header({title, subtitle}) {

    const headerStyles = {
        // fontSize: '10rem',
        // letterSpacing: '-5.5px',
        color: 'white',
        marginLeft: '10%',
    }

    return(
        <>
        <div className="shadow-lg p-3" style={headerStyles}>
        <h2 style={{
            fontSize: '7rem',
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