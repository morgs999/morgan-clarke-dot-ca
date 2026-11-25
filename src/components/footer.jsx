export default function Footer(){

    const footerStyles = {
        marginTop: '10%',
        marginBottom: '0',
        backgroundColor: 'var(--dark)',
        color: 'var(--white)',
        bottom: '0',
        // position: 'fixed',
        width: '100vw',
        textAlign: 'center',
        padding: '2%',
    }
    return(
        <div style={footerStyles}>
            <h5>©️ 2026 Morgan Clarke</h5>
            <h6>Crazy enough, no generative AI was used to make this site.</h6>
        </div>
    )
}