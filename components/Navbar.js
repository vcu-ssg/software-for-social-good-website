import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <h1 className={ styles.navbarTitle }>SSG</h1>
                <div className={ styles.navbarNavigation }>
                    <a className={ styles.navbarNavigationItems } href="/">Who We Are</a>
                    <a className={ styles.navbarNavigationItems } href="/about">Our Work</a>
                    <a className={ styles.navbarNavigationItems } href="/ourwork">For Students</a>
                    <a className={ styles.navbarNavigationItems } href="/blog">Contact Us</a>
                    {/* <a className={ styles.navbarNavigationItems } href="/contactus">Contact Us</a> */}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
