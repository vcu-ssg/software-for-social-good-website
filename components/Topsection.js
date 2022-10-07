import styles from '../styles/Topsection.module.css'

const Topsection = () => 
{
    return(
        <div>
            <div>
                <h1 className={ styles.main }>Software for Social <br/ > Good</h1>
                <h5 className={ styles.sub }>We connect the students with outer communities through projects that bring social impact.</h5>
                <button className={ styles.button }> Learn more about us </button>
                <div className={ styles.emptyBoxOne}>

                </div>
            </div>
        </div>
    )
}

export default Topsection;