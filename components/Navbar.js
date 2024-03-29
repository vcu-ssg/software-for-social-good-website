import styles from '../styles/Navbar.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import HamburgerMenu from './HamburgerMenu';
import logo from '../public/ssglogo.svg';
import Link from 'next/link';

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

const Navbar = ({children, href}) => {
    const screenSize = useWindowSize();
    const router = useRouter();

    return screenSize.width <= 786 ? (
        <div>
            <nav className={styles.navbar}>
                <Link href="/">
                  <a className={ styles.navbarTitle }>
                    <img src="/SsgLogo.svg" width="120" height="50"/>
                  </a>
                </Link>
                <HamburgerMenu/>
            </nav>
        </div>
    ) :
    (
        <div>
            <nav className={styles.navbar}>
                <Link href="/">
                  <a className={ styles.navbarTitle }>
                    <img src="/SsgLogo.svg" width="120" height="50"/>
                  </a>
                </Link>
                
                {/* This is the div that contains all the navbar items.
                    Check if the router path is the index, about, ourwork, or etc.
                    and if they are then choose the active style.
                    If not then, simply choose the Inactive style */}
                <div className={ styles.navbarNavigation }>
                  <Link href="/about">
                    <a className={ router.asPath == "/about" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive }>
                      Our Team</a>
                  </Link>
                  <Link href="/ourwork">
                    <a className={ router.asPath == "/ourwork" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive }>
                      Our Work</a>
                  </Link>
                  <Link href="/forstudents">
                    <a className={ router.asPath == "/forstudents" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive }>
                      For Students</a>
                  </Link>
                  <Link href="/contactus">
                    <a className={ router.asPath == "/contactus" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive }>
                      Contact Us</a>
                  </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
