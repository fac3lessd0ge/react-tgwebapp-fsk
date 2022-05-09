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
            <span style={{fontSize:'1.1rem'}}>{children}</span>
        </button>
    );
}
 
export default BorderButton;