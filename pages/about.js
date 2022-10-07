import { useState } from "react";

import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css"

export default function about()
{
    const [team, setTeam] = useState("Develop");

    return(
        <div>
            <div className={ styles.mainContainer }>
                <Navbar/>
                <h1 className={ styles.mainTitle }>Cross-functional <br/>&amp; Collaborative</h1>
                <h2 className={ styles.subTitle }>Our team is critical yet creative. Under<br/>interdisciplinary environment, we solve problems with<br/>inputs from students from diverse fields.</h2>
                {/* The Three Buttons Develop, Design, and User Research */}
                <div className={ styles.teamSection }>
                    <button onClick={() => setTeam("Develop")} className={ team == "Develop" ? styles.buttonContainerActive : styles.buttonContainerInactive}>
                        <p className={ team == "Develop" ? styles.buttonTextActive : styles.buttonTextInactive }>Develop</p>
                    </button>
                    <button onClick={() => setTeam("Design")} className={ team == "Design" ? styles.buttonContainerActive : styles.buttonContainerInactive}>
                        <p className={ team == "Design" ? styles.buttonTextActive : styles.buttonTextInactive }>Design</p>
                    </button>
                    <button onClick={() => setTeam("User Research")} className={ team == "User Research" ? styles.buttonContainerActive : styles.buttonContainerInactive}>
                        <p className={ team == "User Research" ? styles.buttonTextActive : styles.buttonTextInactive }>User Research</p>
                    </button>
                </div>
                <div className={ styles.teamSectionHeader }>
                    <div className={ styles.teamSectionTitleContainer }>
                        <div>
                            <p className={ styles.teamSectionTitle }>Develop</p>
                        </div>
                        <p className={ styles.teamSectionSubTitle }>The developers ensures our products<br />come to life.</p>
                    </div>
                    {/* Right hand Side: showing skills */}
                    <div className={ styles.teamSectionSkillsContainer }>
                        <div>
                            <p className={ styles.teamSectionSkillsText }>Front-end: Next.js, React.js, Angular, Vue.js</p>
                            <p className={ styles.teamSectionSkillsText }>Back-end: PHP, Python, Java</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={ styles.teamSectionMemberHeader }>Our Developers</p>
                </div>
            </div>
        </div>
    )
}