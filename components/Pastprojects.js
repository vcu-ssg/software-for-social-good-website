import styles from '../styles/Pastprojects.module.css'

const Pastprojects = () => 
{
    return(
        <div className={ styles.container}>
            <h3 className={ styles.projects }>Past Projects</h3>
            <div className={ styles.line }/>
            <h1 className={ styles.header }>We are currently searching for exciting projects!</h1>
            <h3 className= { styles.sub }>Challenges that yout community experiences. Projects that grow your student success. Education, transportation, health, logistics - you name it. Don't hesitate to start a project with us!</h3>
            <button className={ styles.button }>Ask us for more details</button>
            
        </div>
    )
}

export default Pastprojects;