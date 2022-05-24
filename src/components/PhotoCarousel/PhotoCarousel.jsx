import React from 'react';
import './PhotoCarousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// const tooglesGroupId = 'Toggles';
// const valuesGroupId = 'Values';
// const mainGroupId = 'Main';

// const getConfigurableProps = () => ({
//     showArrows: boolean('showArrows', true, tooglesGroupId),
//     showStatus: boolean('showStatus', true, tooglesGroupId),
//     showIndicators: boolean('showIndicators', true, tooglesGroupId),
//     infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
//     showThumbs: boolean('showThumbs', true, tooglesGroupId),
//     useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
//     autoPlay: boolean('autoPlay', true, tooglesGroupId),
//     stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
//     swipeable: boolean('swipeable', true, tooglesGroupId),
//     dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
//     emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
//     autoFocus: boolean('autoFocus', false, tooglesGroupId),
//     thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
//     selectedItem: number('selectedItem', 0, {}, valuesGroupId),
//     interval: number('interval', 2000, {}, valuesGroupId),
//     transitionTime: number('transitionTime', 500, {}, valuesGroupId),
//     swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
//     ariaLabel: text('ariaLabel', undefined),
// });

const indicatorStyles = {
    background: '#727272',
    width: 8,
    height: 8,
    display: 'inline-block',
    margin: '0 26px',
    borderRadius: '50%'
};

const carouselProps = {
    showArrows: true,
    infiniteLoop: true,
    interval: 300,
    autoPlay: true
}

const PhotoCarousel = ({ imgArr }) => {
    return (
        <div style={{marginTop: '50px', marginBottom:'50px'}}>
            <Carousel
                width={'100%'}
                showThumbs={false}
                autoPlay={true} 
                interval={5500}
                showArrows={false}
                swipeable={true}
                emulateTouch={true}
                infiniteLoop={true}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                style={{ ...indicatorStyles, background: '#E84E0E' }}
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                        <li
                            style={indicatorStyles}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}
            >
                {imgArr.map(elem => 
                    <div>
                        <img src={elem} alt='Housing'/>
                    </div>    
                )}
            </Carousel>
        </div>
    );
}
 
export default PhotoCarousel;



// export const withCustomStatusArrowsAndIndicators = () => {
//     const arrowStyles: React.CSSProperties = {
//         position: 'absolute',
//         zIndex: 2,
//         top: 'calc(50% - 15px)',
//         width: 30,
//         height: 30,
//         cursor: 'pointer',
//     };

    

//     return (
//         <Carousel
//             statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
//             renderArrowPrev={(onClickHandler, hasPrev, label) =>
//                 hasPrev && (
//                     <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
//                         -
//                     </button>
//                 )
//             }
//             renderArrowNext={(onClickHandler, hasNext, label) =>
//                 hasNext && (
//                     <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
//                         +
//                     </button>
//                 )
//             }
            
//         >
//             {baseChildren.props.children}
//         </Carousel>
//     );
// };