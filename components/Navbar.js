import styles from '../styles/Navbar.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import HamburgerMenu from './HamburgerMenu';
import logo from '../public/ssglogo.svg';

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

    // const activeStyles = {
    //   marginRight: 10,
    //   color: router.asPath === href ? 'red' : 'black',
    // }

    // const handleClick = (e) => {
    //   e.preventDefault()
    //   router.push(href)
    // }

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
                <a className={ styles.navbarTitle } href="/">SSG</a>
                {/* This is the div that contains all the navbar items.
                    Check if the router path is the index, about, ourwork, or etc.
                    and if they are then choose the active style.
                    If not then, simply choose the Inactive style */}
                <div className={ styles.navbarNavigation }>
                    <a className={ router.asPath== "/" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive }
                      href="/"></a>
                    <a className={ router.asPath == "/about" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive } 
                      href="/about">Our Team</a>
                    <a className={ router.asPath == "/ourwork" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive } 
                      href="/ourwork">Our Work</a>
                    <a className={ router.asPath == "/blog" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive } 
                      href="/blog">For Students</a>
                    <a className={ router.asPath == "/contactus" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive } 
                      href="/contactus">Contact Us</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
