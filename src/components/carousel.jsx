import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Spotify from './spotify.jsx';

export default function ControlledCarousel() {
    const carouselArrowStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // width: '3rem',
        // height: '3rem',
        borderRadius: '20%',
        background: 'var(--slate)',
        color: 'var(--white)',
        fontSize: '2rem',
        lineHeight: '3'
    }

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const musics = [
        {
            'id': "6VD6DTUmrCmKoStGmDBRUx?utm_source=generator&si=6cfc24d659f14460",
            'artist': 'Moodieboy',
            'album': 'Heladaria',
        },
        {
            'id': "7ng2RkZkm2EGoR6c5J4T5i?utm_source=generator&si=b331f5f102ca4683",
            'artist': 'Falsies',
            'album': 'Magenta',
        },
        {
            'id': "01si7mk5xOjlYnhlbzAyNR?utm_source=generator&si=ef6cad841e5d4709",
            'artist': 'Charles Warren Orchestra',
            'album': 'Moonlanding EP',
        }
    ]

  return (
    <>
            <Carousel 
                activeIndex={index} 
                onSelect={handleSelect} 
                interval={null}
                style={{width: '40vw', height: '40vh'}}
                indicators={false}
                prevIcon={<span style={carouselArrowStyles}>PREV</span>}
                nextIcon={<span style={carouselArrowStyles}>NEXT</span>}
            >
            
            {musics.map((music) => (
                <Carousel.Item key={music.id} className="px-5 pb-5">

                    <Spotify id={music.id} className=""/>

                    <Carousel.Caption className="position-static pt-3">
                        <h3 style={{color: 'black'}}>{music.artist}</h3>
                        <p style={{color: 'black'}}>{music.album}</p>
                    </Carousel.Caption>

                </Carousel.Item>
            ))}
            </Carousel>
    </>
  );
};