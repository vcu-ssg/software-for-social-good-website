import styles from '../styles/HamburgerMenu.module.css'

const HamburgerMenu = () => {
    return(
        <div className={ styles.hamburger }>
            <div className={ styles.burger }/>
            <div className={ styles.burger }/>
            <div className={ styles.burger }/>
        </div>
    )
}

export default HamburgerMenu;