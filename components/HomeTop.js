import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router"
import { Button } from '@chakra-ui/react'



export default function HomeTop()
{
  const router = useRouter();
  return(
    <div className={ styles.homeSection1}>
        <div className={ styles.homeBox1}>
          <text className={styles.header1}>Software For<br />Social<br />Good</text>
          <text className={`${styles.body2} ${styles.homeBox1Subtitle}`}>We connect VCU students with outer communities through projects that brings social impact.</text>
          <div className={styles.homeBox1Button}>
            <Button
            onClick={() => router.push('/forstudents')} 
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
            >Learn more about us</Button>
          </div>
        </div>
        <div className={ styles.homeDownButton1 }>
            <a href="#Top"><Image src="/DownButton.svg" width="64" height="64" placeholder="empty" /></a>
        </div>
        <div className={ styles.homeBox2}>
          <div className={styles.homeBox2Pic}>
            <Image src="/topSecImg.svg" width="719" height="597" placeholder="empty" />
          </div>
        </div>
        


    </div>
  )
}