import styles from '../styles/Pillars.module.css'

const Pillars = () => 
{
    return(
        <div className={ styles.container}>
            <h3 className={ styles.pillars }>Our Pillars</h3>
            <div className={ styles.line }/>
            <div className={ styles.emptyBoxOne}/>
            <h1 className={ styles.one }>1</h1>
            <h1 className={ styles.oneTitle }>Hands-on Experience</h1>
            <h3 className={ styles.oneDesc }>Provide students with opportunities to work on real-world software challenges.</h3>
            <div className={ styles.emptyBoxTwo}/>
            <h1 className={ styles.two }>2</h1>
            <h1 className={ styles.twoTitle }>Innovative Solutions</h1>
            <h3 className={ styles.twoDesc }>Build innovative & creative softwares that helps your community.</h3>
            <div className={ styles.emptyBoxThree}/>
            <h1 className={ styles.three }>3</h1>
            <h1 className={ styles.threeTitle }>Connecting with Talents</h1>
            <h3 className={ styles.threeDesc }>Discover future talents in the software technology landscape by working with us.</h3>
        </div>
    )
}

export default Pillars;