import styles from '../styles/ForStudentsLanding.module.css'

const ForStudentsLanding = () => 
{
    return(
        <div>
            <div>
                <h1 className={ styles.main }>I'm interested in:</h1>
                <div class= {styles.frame}>
                    <div class={styles.carousel}>
                        <div class= {styles.change_outer}>
                           <div class= {styles.change_inner}>
                            <div class= {styles.element}>
                                User Experience
                            </div>
                            <div class= {styles.element}>
                                Interaction Design
                            </div>
                            <div class= {styles.element}>
                                Data Science
                            </div>
                            <div class= {styles.element}>
                                Software Development
                            </div>
                            <div class= {styles.element}>
                                Networking
                            </div>
                            <div class= {styles.element}>
                               Cross Functionality
                            </div>
                            <div class= {styles.element}>
                               Visual Design
                            </div>
                            <div class= {styles.element}>
                               User Research
                            </div>
                            <div class= {styles.element}>
                               Career Development
                            </div>
                            <div class= {styles.element}>
                               Project Management
                            </div>
                            <div class= {styles.element}>
                               Community Outreach
                            </div>
                            <div class= {styles.element}>
                               Collaboration
                            </div>
                            <div class= {styles.element}>
                               Product Innovation
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
                <h5 className={ styles.sub }>
                    You are at the right place! Join the Software for Social Good, a Vertically Integrated Project (VIP) 
                    at VCU college of engineering to gain real-life experience from projects that gives to our communities.
                </h5>
                <button className={ styles.buttonFAQ }> Join the SSG team </button>
                <button className={ styles.buttonJoin }> Student FAQ </button>
            </div>
        </div>
    )
}

const interests = ["User Experience", "Interaction Design", "Data Science", "Software Development", "Networking", "Cross Functionality", 
    "Visual Design", "User Research", "Career Development", "Project Management", "Community Outreach", "Collaboration"];
const lastInterest = "Product Innovation";

export default ForStudentsLanding;

// </div> <h1 className= {styles.scrollWheel}> {interests.map((interest) => { return interest + ",\n"})} {lastInterest} </h1>
