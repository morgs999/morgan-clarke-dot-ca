import Image from 'react-bootstrap/Image';

export default function SideParallax({img, side, delay}){
    const styles = {
        display: 'block',
        position: 'relative',
        objectFit: 'contain',
        height: '50%',
        width: '50%',
        // clipPath: 'rect(0px 1500px 1500px 0px round 80%)',
        animation: `${side} linear both`,
        animationTimeline: 'view(block)',
        animationRange: `entry ${delay}% exit 100%,`
    }
    
    return(
        <>
        <Image 
            src={img}
            className=""
            style={styles}
            thumbnail
        />
        </>
    )
}