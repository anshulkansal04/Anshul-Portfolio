import React from 'react';
import gear from './images/gear.png';
import ak from './images/ak-2.png';

const Loader = () => {
    return (
        <div className="loader-body">
            <div className="site-loader">
                <img src={gear} className="gear" alt="Gear" />
                <img src={ak} className="ak-text" alt="AK" />
            </div>
        </div>
    );
};

export default Loader;
