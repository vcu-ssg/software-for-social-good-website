import styles from '../styles/JoinButton.module.css'
import Link from 'next/link'

const JoinButton = () => 
{
    return(
        <div>
            <Link href='/forstudents'>
                <button className={ styles.joinButton}>
                    <h5 className= { styles.buttonText }>Join our team</h5>
                </button>
           </Link>
        </div>
    )
}

export default JoinButton;