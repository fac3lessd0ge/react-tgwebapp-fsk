import React from 'react';
import './BorderButton.css';



const BorderButton = ({className, style, children}) => {

    const [classes, setClasses] = React.useState(className);

    const clickHandler = (e) => {
        if (classes.includes('default')) {
            setClasses('chosen')
        }
        else {
            setClasses('default')
        }
    }

    return (
        <button onClick={clickHandler} style={style} className={classes}>
            {children}
        </button>
    );
}
 
export default BorderButton;