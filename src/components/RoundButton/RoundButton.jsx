import React, { useEffect } from 'react';

import './RoundButton.css';

const RoundButton = ({ isActive, children, choiceHandler }) => {
    const [active, setActive] = React.useState(isActive);

    const clickHandler = (event) => {
        setActive(() => !active);
    }

    useEffect(() => {
        choiceHandler(children.toString(), active);
    }, [active, children, choiceHandler])

    const classes = `round-button${active ? ' active' : ''}`

    return (
        <div className={classes} onClick={clickHandler}>
            {children}
        </div>
    );
}
 
export default RoundButton;