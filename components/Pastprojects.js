import styles from '../styles/Pastprojects.module.css'
import ProposeButton from './ProposeButton';

const Pastprojects = () => 
{
    return(
        <div>
           <div className={ styles.projectsHeader}>
                <h3 className={ styles.header}>Past Projects</h3>
            </div>
            <div className={ styles.textContainer }>
                <h2 className={ styles.mainTextBox }>We are currently searching for exciting projects!</h2>
                <div className={ styles.subheaderBox }>
                    <h5>Challenges that your community experiences. Projects that grows student success. Education, transportation, health, logistics - you name it. Don’t hesitate to start a project with us!</h5>
                </div>
                <div className={ styles.lineOne }/>
                <div className={ styles.lineTwo }/>
            </div>
            <div className={ styles.buttonBox}>
                <ProposeButton/>
            </div>
        </div>
    )
}

export default Pastprojects;