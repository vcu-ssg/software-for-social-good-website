import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router"
import { Button } from '@chakra-ui/react'



export default function HomeBottom()
{
  const router = useRouter();
  return(
    <div className={ styles.homeSection2 }>
        <text className={ `${styles.header2} ${styles.homeHeader3}` }>
            We are currently <strong>searching</strong> for exciting projects!
        </text>
        <text className={`${styles.body2} ${styles.homeSub3}`}>
            Challenges that your community experiences. Projects that grows student success. Education, transportation, health, logistics - you name it. Don’t hesitate to start a project with us!
        </text>
        <Button
                onClick={() => router.push('/contactus')} 
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
                >Propose a project</Button>
    </div>
  )
}