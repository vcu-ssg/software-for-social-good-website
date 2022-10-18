import styles from '../styles/ForStudentsLanding.module.css'

const ForStudentsLanding = () => 
{
    return(
        <div>
            <div>
                <h1 className={ styles.main }>I'm interested in:</h1>
                <h1 className= {styles.scrollWheel}> {interests.map((interest) => { return interest + ",\n"})} {lastInterest} </h1>
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