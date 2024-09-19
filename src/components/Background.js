import React from 'react';

const Background = ({ children }) => {
    return (
        <div style={{
            backgroundImage: '/workspaces/stem-inspire/public/background.jpg',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: '109px',
            left: '0',
            zIndex: '-1',
        }}>
            {children}
        </div>
    );
};

export default Background;