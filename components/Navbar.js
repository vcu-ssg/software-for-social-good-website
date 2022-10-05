import styles from '../styles/Navbar.module.css'
import { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';

// https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

const Navbar = () => {
    const screenSize = useWindowSize();

    return screenSize.width <= 786 ? (
        <div>
            <nav className={styles.navbar}>
                <h1 className={ styles.navbarTitle }>Software for Social Good</h1>
                <HamburgerMenu/>
            </nav>
        </div>
    ) :
    (
        <div>
            <nav className={styles.navbar}>
                <h1 className={ styles.navbarTitle }>SSG</h1>
                <div className={ styles.navbarNavigation }>
                    <a className={ styles.navbarNavigationItems } href="/">DESKTOP Home</a>
                    <a className={ styles.navbarNavigationItems } href="/about">About</a>
                    <a className={ styles.navbarNavigationItems } href="/ourwork">Our Work</a>
                    <a className={ styles.navbarNavigationItems } href="/blog">Blog</a>
                    <a className={ styles.navbarNavigationItems } href="/contactus">Contact Us</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
