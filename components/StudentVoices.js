import styles from '../styles/StudentVoices.module.css'

const StudentVoices = () => 
{
    return(
        <div>
            <div className={ styles.lineLeft }/>
            <div className={ styles.headerContainer }>
                <h1 className= { styles.headerTitle }>Student Voices</h1>
            </div>
            <div className={ styles.lineRight }/>
        </div>
    )
}



export default StudentVoices;