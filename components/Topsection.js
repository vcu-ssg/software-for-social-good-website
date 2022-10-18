import { useState, useEffect } from 'react';

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
}

const Topsection = () => {
    const screenSize = useWindowSize();

    return(
        <div className={ topSectionContainer } >
            
        </div>
    )
}

export default Topsection;