import styles from '../styles/CurrentProjects.module.css'
import ProposeButton from './ProposeButton';
const CurrentProjects = () => {
    return (
        <div>
            <div className={styles.projectsHeader}>
                <h3 className={styles.header}> Current Projects </h3>
            </div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2 className={styles.mainTextBox}>We are currently searching for exciting projects!</h2>
                    <div className={styles.subheaderBox}>
                        <h5>Challenges that your community experiences. Projects that grows student success. Education, transportation, health, logistics - you name it. Don’t hesitate to start a project with us!</h5>
                    </div>
                    <div className={styles.buttonBox}>
                        <ProposeButton />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CurrentProjects;

