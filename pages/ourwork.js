import Navbar from "../components/Navbar";
import Pastprojects from "../components/Pastprojects";
import ProposeButton from "../components/ProposeButton";
import styles from "../styles/OurWork.module.css"
import Footer from "../components/Footer";
import HomeBottom from '../components/HomeBottom'

export default function ourwork()
{
    return(
        <div>
            <HomeBottom/>
            {/* <div className= { styles.container }>
                <div className= { styles.textContainer }>
                    <h2 className={ styles.mainTextBox }>We are currently searching for exciting projects!</h2>
                    <div className={ styles.subheaderBox }>
                        <h5>Challenges that your community experiences. Projects that grows student success. Education, transportation, health, logistics - you name it. Don’t hesitate to start a project with us!</h5>
                    </div>
                    <div className={ styles.buttonBox }>
                        <ProposeButton/>
                    </div>
                </div>
            </div> */}
            
        </div>
    )
}