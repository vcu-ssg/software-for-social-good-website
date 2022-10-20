import styles from '../styles/Pillars.module.css'
import Image from "next/image";
import JoinButton from './JoinButton';

const Pillars = () => 
{
    return(
        <div>
            <div className={ styles.pillarsHeader}>
                <h3 className={ styles.header}>Our Pillars</h3>
            </div>
            <div className={ styles.pillarsSubheader}>
                <h5>SSG is a Vertically Integrated Project (VIP) at Virginia Commonwealth University. <br/>Our student-lead team and faculty mentors operate under three pillars.</h5>
            </div>
            <div className={ styles.hand }>
                <Image src="/Hand.svg" width="47" height="50" placeholder="empty" />
            </div>
            <div className={ styles.idea }>
                <Image src="/Idea.svg" width="63" height="63" placeholder="empty" />
            </div>
            <div className={ styles.tricolors }>
                <Image src="/Tricolor.svg" width="51" height="50" placeholder="empty" />
            </div>
            <div className={ styles.pillarOne }>
                <h4 className={ styles.pillarOneHeader }>Hands-on Experience</h4>
            </div>
            <div className={ styles.pillarTwo }>
                <h4 className={ styles.pillarTwoHeader }>Innovative Solutions</h4>
            </div>
            <div className={ styles.pillarThree }>
                <h4 className={ styles.pillarTwoHeader }>Connecting with Talents</h4>
            </div>
            <div className={ styles.pillarOneSub }>
                <h5>Provide students with opportunities to work on real-world software challenges.</h5>
            </div>
            <div className={ styles.pillarTwoSub }>
                <h5>Build innovative & creative softwares with a socially beneficial bottom line.</h5>
            </div>
            <div className={ styles.pillarThreeSub }>
                <h5>Discover emerging skills in the software design and development by working with us.</h5>
            </div>
            <JoinButton/>
            <div className={ styles.secondScroll }>
                <Image src="/buttonScrollDown.svg" width="69" height="69" />
            </div>
        </div>
    )
}

export default Pillars;