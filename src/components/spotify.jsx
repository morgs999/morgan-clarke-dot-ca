export default function Spotify({id}) {
    return (
            <iframe 
            data-testid="embed-iframe" 
            style={{borderRadius:"0px"}} 
            src={`https://open.spotify.com/embed/album/${id}`}
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            />
    )
}