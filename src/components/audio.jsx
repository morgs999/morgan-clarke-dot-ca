export default function Song({file}) {
    const songStyles = {
        width: '100%',
        borderRadius: '0',
        backgroundColor: 'var(--white)',
        filter: 'invert(1) hue-rotate(180deg)'
    }

    return <audio src={file} style={songStyles} controls controlsList="nodownload" preload="metadata" loading="lazy"/>
}