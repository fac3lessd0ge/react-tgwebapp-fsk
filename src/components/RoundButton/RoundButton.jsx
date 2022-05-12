import React, { useEffect } from 'react';

import './RoundButton.css';

const RoundButton = ({ isActive, children, choiceHandler }) => {
    const [active, setActive] = React.useState(isActive);

    const clickHandler = (event) => {
        setActive(() => !active);
    }

    useEffect(() => {
        choiceHandler(children.toString(), active);
        // eslint-disable-next-line
    }, [active])

    const classes = `round-button${active ? ' active' : ''}`

    return (
        <div className={classes} onClick={clickHandler}>
            <span>{children}</span>
        </div>
    );
}
 
export default RoundButton;