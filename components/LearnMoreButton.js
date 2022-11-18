import styles from '../styles/ButtonStyle.module.css'
import Link from 'next/link'

const LearnMoreButton = () => 
{
    
    return(
        <div>
            <Link href='/about'>
                <button className={ styles.learnButton}>
                    <h5 className= { styles.buttonText }>Learn more about us</h5>
                </button>
            </Link>
        </div>
    )
};

export default LearnMoreButton;