import styles from '../styles/StudentVoices.module.css'
const StudentVoices = () => {
    return (
        <div className={styles.container}>
            <div className={styles.voicesHeader}>
                <h3 className={styles.header}>Student Voices</h3>
            </div>
            <div className={styles.quoteTop} >
                "
            </div>
            <div className={styles.quoteContainer}>
                <div className={styles.quote}>
                    <h4>
                        It was nice to see what others’ problem solving process is like.
                    </h4>
                </div>
                <div className={styles.author}>
                    <h6>Kevin <br />
                        Computer Science Senior</h6>
                </div>
            </div>
            <div className={styles.quoteBottom}>
                "
            </div>
        </div>
    )
}


export default StudentVoices;

