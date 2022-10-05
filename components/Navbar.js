import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <h1 className={ styles.navbarTitle }>Software for Social Good</h1>
                <div className={ styles.navbarNavigation }>
                    <a className={ styles.navbarNavigationItems } href="/">Home</a>
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
