import styles from '../styles/ContactUs.module.css'

export default function ContactUs()
{
    return(
        <div className= { styles.contactContainer }>
            <div className= { styles.contactForm }>
                <div className= { styles.contactLeft }>
                    <text>Contact Us</text>
                    <text>Whether you are a business, non-profit, student, or a teacher, reach out to us for any questions!</text>
                </div>
                <div className= { styles.contactRight }>
                    <text>Visit Us</text>
                    <text>VCU Engineering Research Building 401 W Main St. Richmond, VA 23284</text>
                </div>
            </div>
            <div className= { styles.contactMap }>
            </div>
        </div>
    )
}