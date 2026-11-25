export default function HeroParallax() {
    
    const styles = {
        position: 'fixed',
        inset: '0',
        zIndex: '0',
        backgroundImage: 'url(/public/hero.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        height: '100svh'
    }
    
    return(
        <header className="hero-parallax">
        <div
            className="hero-parallax__bg"
            style={{ backgroundImage: `url(/public/hero.jpg)` }}
        />
        <div className="hero-parallax__content">↓</div>
        </header>
    )
}