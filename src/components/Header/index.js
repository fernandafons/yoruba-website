import videoHome from '../../assets/sequence-1.mp4';
import React from 'react';

function Header() {
    return (
        <div>
            <video 
                src={videoHome}
                autoPlay 
                loop 
                muted 
                style={{
                width: '100%',
                height: '80%',
                objectFit: 'cover',
                clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 100%)',
                marginTop: '-200px',
                }}
            />
            <h1 style={{ position: 'absolute', zIndex: 100, marginTop: '-200px', marginLeft: '150px', fontSize: '60px'}} >
                DANCE AS A COMMUNICATION SYSTEM
            </h1>
            <p style={{color: "#ce301e",  zIndex: 2, fontSize: '40px', marginTop: '-120px', fontFamily: 'roboto'}}>
                How dance can be used to keep a tradition alive
            </p>
        </div>
    );
}

export default Header;