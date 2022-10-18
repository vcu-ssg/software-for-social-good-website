import styles from '../styles/Topsection.module.css'
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
        <div className={ styles.topSectionContainer }>
            <div className={ styles.topSecText }>
                <h1 className={ styles.topSecHeader}>Software for Social Good</h1>
            </div>
        </div>
    )
}

export default Topsection;