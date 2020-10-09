import React from 'react';
import icon from './death-star-icon.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="Death Star o_0"/>
            <h3 className="boom">SKIDISH !!!</h3>
            <p>Something went wrong, maybe planet was destroyed</p>
            <p>(we already sent scouts to check it)</p>
        </div>
    )
}

export default ErrorIndicator;