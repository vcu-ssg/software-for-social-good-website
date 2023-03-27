import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Topsection from '../components/Topsection'
import Pillars from '../components/Pillars'
import Pastprojects from '../components/Pastprojects'
import Footer from '../components/Footer'
import HomeTop from '../components/HomeTop'
import HomeMid from '../components/HomeMid'
import HomeBottom from '../components/HomeBottom'
import styles from '../styles/Home.module.css'
import LearnMoreButton from '../components/LearnMoreButton'
import Link from "next/link";
import { useRouter } from "next/router"
import { Button } from '@chakra-ui/react'



export default function Home()
{
  const router = useRouter();
  return(
    <div>
      <Navbar/>
      <HomeTop/>
      <HomeMid/>
      <HomeBottom/>
        
      </div>
      
  )
}
