import React from 'react';

import './RoundButton.css';

const RoundButton = ({ isActive, children }) => {
    const [active, setActive] = React.useState(isActive);

    const clickHandler = (event) => {
        setActive(() => !active);
    }

    const classes = `round-button${active ? ' active' : ''}`

    return (
        <div className={classes} onClick={clickHandler}>
            {children}
        </div>
    );
}
 
export default RoundButton;