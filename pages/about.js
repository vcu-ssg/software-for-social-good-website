import { useState } from "react";

import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css"
import CardMembers from "../components/CardMembers";
import PageDividerTitle from "../components/PageDividerTitle";
import Footer from "../components/Footer";

const developersTeam = [
    {
        name: "Kevin Ly",
        major: "Computer Science",
        graduationyear: "Class of 2023"
    },
    {
        name: "Daniel Tran",
        major: "Computer Science",
        graduationyear: "Class of 2024"
    },
    {
        name: "Lenice Jackson",
        major: "Computer Science",
        graduationyear: "Class of 2022"
    },
    {
        name: "Sweta Parajuli",
        major: "Computer Science",
        graduationyear: "Class of 2024"
    },
    {
        name: "Aneesh Sai",
        major: "Computer Science",
        graduationyear: "Class of 2024"
    }
];

const operationsList = [
    {
        orderNumber: 1,
        operationTitle: "Faculty\nguidance",
        operationDesc: "The developers have access to faculty mentorship from VCU college of engineering. This helps them to work in efficient and smart manner."
    },
    {
        orderNumber: 2,
        operationTitle: "Insights from\npartnered org",
        operationDesc: "Developers gain insights from the partnered organizations to see how they solved the same problem."
    },
    {
        orderNumber: 3,
        operationTitle: "Communication\nwith designers",
        operationDesc: "By communicating with the designers, developers share what the technical constraints are, and ensure the development is on the right path."
    },
    {
        orderNumber: 4,
        operationTitle: "Technical\nresearch",
        operationDesc: "The developers also conduct reserach on APIs, open sources, and databases to be used in the softwares."
    }
]

const teamCulture = [
    {
        cardTitle: "Curious & Motivated",
        cardDesc: "The SSG team is always curious and motivated. With their own unique vision, students find ways to use their skills and learn as they build."
    },
    {
        cardTitle: "Professional Growth",
        cardDesc: "By being part of SSG projects, students gain invaluable industry and process insight. The SSG provides a foundation for student success after college."
    },
    {
        cardTitle: "Team Integrity",
        cardDesc: "A great team makes great projects! We are not some mundane team for a school group project - The SSG thrives upon strong team spirit."
    },
    {
        cardTitle: "Openness",
        cardDesc: "We question what’s normal. Our students are not hesitant to say “no” when everyone says yes, and carefully listen to others’ voices."
    },
    {
        cardTitle: "Having Fun!",
        cardDesc: "Lastly, we care about having fun! Academic stress, grades, and output are important. Doing what students truly enjoy is what moves us."
    }
]

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
                            <h3 className={ styles.teamSectionTitle }>Develop</h3>
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
                    <h4 className={ styles.teamSectionMemberHeader }>Our Developers</h4>
                    <div className={ styles.teamSectionMemberContainer }>
                        {developersTeam.map((member) => {
                            return(
                                <CardMembers name={ member.name } major={ member.major } graduationyear={ member.graduationyear }/>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h5 className={ styles.teamSectionMemberHeader }>How We Operate</h5>
                    <div className={ styles.operationContainer }>
                        {operationsList.map((operation) => {
                            return(
                                <div className={ styles.operationOuterBox }>
                                    <div className={ styles.operationBox }>    
                                        <p className={ styles.operationOrderNumber }> {operation.orderNumber} </p>
                                        <h6 className={ styles.operationTitle }> { operation.operationTitle } </h6>
                                    </div>
                                    <p className={ styles.operationDesc }> { operation.operationDesc } </p>
                                </div>
                            )
                        })}
                    </div>
                    <PageDividerTitle text="Team Culture"/>
                </div>
                <div className= { styles.teamCultureSection }>
                        {teamCulture.map((card) => {
                            return(
                                <div className={ styles.teamCultureCard }>
                                    <h7 className={ styles.teamCultureHeader }> { card.cardTitle } </h7>
                                    <p className={ styles.teamCultureDesc }> { card.cardDesc } </p>
                                </div>
                            )
                        })}
                </div>
                <Footer/>
            </div>
        </div>
    )
}