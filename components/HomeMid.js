import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router"
import { Button } from '@chakra-ui/react'



export default function HomeMid()
{
  const router = useRouter();
  return(
    <div className={ styles.homeSection2 }>
        <div className={ styles.homeBox3 }> 
            <text className={ `${styles.header3} ${styles.homeHeader2}` }>
                Our Pillars
            </text>
            <text className={ `${styles.body2} ${styles.homeSub2}` }>
                SSG is a Vertically Integrated Project (VIP) at Virginia Commonwealth University. Our student-lead team and faculty mentors operate under three pillars.
            </text>
        </div>

        <div className={ styles.homePillars }>
            <div className={ styles.homePillarBox }>
                <text className={ `${styles.subtitle1} ${styles.homeHeader2}` }>
                Hands-on Experience
                </text>
                <text className={ `${styles.body4} ${styles.homeSub2}` }>
                Provide students with opportunities to work on real-world software challenges.
                </text>
            </div>
            <div className={ styles.homePillarBox }>
                <text className={ `${styles.subtitle1} ${styles.homeHeader2}` }>
                Innovative Solutions
                </text>
                <text className={ `${styles.body4} ${styles.homeSub2}` }>
                Build innovative & creative softwares with a socially beneficial bottom line.
                </text>
            </div>
            <div className={ styles.homePillarBox }>
                <text className={ `${styles.subtitle1} ${styles.homeHeader2}` }>
                Connecting with Talents
                </text>
                <text className={ `${styles.body4} ${styles.homeSub2}` }>
                Discover emerging skills in the software design and development by working with us.
                </text>
            </div>
        
        </div>
        <div className={ styles.homePillarsButton }>
            <Button
                onClick={() => router.push('/ourwork')} 
                backgroundColor= '#4045C2'
                borderRadius='50px'
                fontFamily='Be Vietnam Pro'
                fontSize='14px'
                textColor='#FFFFFF'
                gap='10px'
                paddingTop='32px'
                paddingBottom='32px'
                paddingLeft= '35px'
                paddingRight= '35px'
                >Our Pillars</Button>
        </div>

        <div className={ styles.homeDownButton2 }>
            <Image src="/DownButton.svg" width="64" height="64" placeholder="empty" />
        </div>
    </div>
  )
}