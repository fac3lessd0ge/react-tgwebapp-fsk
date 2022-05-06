import React from 'react';
import GradientEllipse from './components/GradientEllipse/GradientEllipse';

const StandartLayout = ({ children }) => {
    return (
        <main className='App'>
            <div className='content'>
                {children}
                <GradientEllipse />
            </div>
        </main>
    );
}
 
export default StandartLayout;