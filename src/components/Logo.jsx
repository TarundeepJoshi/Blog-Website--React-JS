import React from 'react';

function Logo({ width = '40px' }) {
    return (
        <img
            src="https://logo.com/image-cdn/images/kts928pd/production/28563b4f836c667b30238865f796aeb03ae702db-358x357.png?w=640&q=72"
            alt="Blog Logo"
            style={{ width: width, height: 'auto' }}
        />
    );
}

export default Logo;
