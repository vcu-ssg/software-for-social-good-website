import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Topsection from '../components/Topsection'
import Pillars from '../components/Pillars'
import Pastprojects from '../components/Pastprojects'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import LearnMoreButton from '../components/LearnMoreButton'
import Link from "next/link";
import { useRouter } from "next/router";
import JoinButton from '../components/JoinButton'
import ProposeButton from '../components/ProposeButton'


export default function Home()
{
  return(
    <div className={ styles.container }>
      <Navbar/>
      <div className={ styles.topSectionContainer }>
        <div>
          <h1 className={styles.homePageTitle}>Software For<br />Social<br />Good</h1>
          <h2 className={styles.homePageSubTitle}> We connect VCU students with outer<br />communities through projects that brings<br />social impact.</h2>
          <LearnMoreButton />
        </div>
        <div>
          <Image src="/topSecImg.svg" width="719" height="597" placeholder="empty" />
        </div>
      </div>

      <div className={ styles.pillarContainer }>
        <h1 className={ styles.pillarTitle }>Our Pillars</h1>
        <div className={ styles.pillarMain }>
          <h2 className={ styles.pillarSubTitle }>SSG is a Vertically Integrated Project (VIP) at Virginia Commonwealth University. <br/>Our student-lead team and faculty mentors operate under three pillars.</h2>
          <div className={ styles.pillarContent}>
            <div className={ styles.pillarBox}>
              <Image src="/Hand.svg" width="63" height="63" />
              <div className={ styles.pillarBoxTitle }>
                <h1>Hands-on Experience</h1>
              </div>
              <h3 className={ styles.pillarBoxSubTitle }>Provide students with opportunities to work on real-world software challenges.</h3>
            </div>
            <div className={ styles.pillarBox}>
              <Image src="/Idea.svg" width="63" height="63" />
              <div className={ styles.pillarBoxTitle}>
                <h1>Innovative Solutions</h1>
              </div>
              <h3 className={ styles.pillarBoxSubTitle }>Build innovative & creative softwares with a socially beneficial bottom line.</h3>
            </div>
            <div className={ styles.pillarBox }>
              <Image src="/Tricolor.svg" width="63" height="63" />
              <div className={ styles.pillarBoxTitle }>
                <h1>Connecting <br/>with Talents</h1>
              </div>
              <h3 className={ styles.pillarBoxSubTitle }>Discover emerging skills in the software design and development by wokring with us.</h3>
            </div>
          </div>
        </div>
        <div className={ styles.joinButton}>
          <JoinButton/>
        </div>
      </div>

      <div className={ styles.pastProjectsContainer}>
        <h1 className={ styles.projectsHeader }>Past Projects</h1>
        <div className={ styles.projectsTexts}>
          <div className={ styles.projectsBoxOne }>
            <h1 className={ styles.projectsTextOne }>We are currently searching for exciting projects!</h1>
          </div>
          <div className={ styles.lineOne }/>
          <div className={ styles.lineTwo }/>
          <div className={ styles.projectsBoxTwo }>
          <h2 className={ styles.projectsTextTwo }>Challenges that your community experiences. Projects that grows student success. Education, transportation, health, logistics - you name it. Don’t hesitate to start a project with us!</h2>
          </div>
        </div>
        <div className={ styles.proposeButton }>
          <ProposeButton/>
        </div>
      </div>
      <Footer/>
    </div>

  )
}
