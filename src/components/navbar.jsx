import { useState, useEffect } from 'react';
import DesktopNavbar from './desktop-navbar.jsx';
import MobileNavbar from './mobile-navbar.jsx';


export default function MNavbar(){

    const [isMobile, setIsMobile] = useState(
        () => window.matchMedia('(max-width: 767.98px)').matches
    )

    useEffect(() => {
        const mediaquery = window.matchMedia('(max-width: 767.98px)');
        const handleChange = (e) => setIsMobile(e.matches);

        mediaquery.addEventListener('change', handleChange);
        return () => mediaquery.removeEventListener('change', handleChange);
    }, []);

    return isMobile ? <MobileNavbar/> : <DesktopNavbar/>;   
}