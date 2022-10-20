import styles from '../styles/_Pastprojects.module.css'
import Link from 'next/link'

const ProposeButton = () => 
{
    return(
        <div>
            <Link href='/contactus'>
                <button className={ styles.proposeButton}>
                        <h5 className= { styles.buttonText }>Learn more about us</h5>
                </button>
           </Link>
        </div>
    )
}

export default ProposeButton;