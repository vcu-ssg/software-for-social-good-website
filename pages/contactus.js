import Navbar from "../components/Navbar";
import styles from '../styles/ContactUs.module.css';
import { Divider, Text, Image } from "@chakra-ui/react";

export default function contactus()
{
    return(
        <div className={ styles.container }>
            <div className={ styles.contactUsContainer }>
                <Text className={styles.headingText} fontSize="4xl" pb="1">Contact Us</Text>
                <Text className={styles.headingText}>Whether you are a business, non-profit, student,</Text>
                <Text className={styles.headingText}>or a teacher, reach out to us for any questions!</Text>
                <div className={styles.facultyCard}>
                    <Image src='WilliamPic.jpg' boxSize="100px" />
                    <div>
                        <Text className={styles.headingText} fontSize="2xl">William Benton</Text>
                        <Text className={styles.headingText}>wbenton@vcu.edu | Faculty</Text>
                    </div>
                </div>
                <Divider border="1px solid"/>
                <div className={styles.facultyCard}>
                    <Image src='LeonardPic.jpg' boxSize="100px"/>
                    <div>
                        <Text className={styles.headingText} fontSize="2xl">John Leonard</Text>
                        <Text className={styles.headingText}>jdleonard@vcu.edu | Faculty</Text>
                    </div>
                </div>
            </div>
            <Divider orientation="vertical" border="1px solid" height="25rem"/>
            <div className={ styles.visitUsContainer }>
                <Text className={styles.headingText} fontSize="4xl">Visit Us</Text>
                <Text className={styles.headingText}>VCU Engineering Research Building</Text>
                <Text className={styles.headingText}>401 W Main St.</Text>
                <Text className={styles.headingText}>Richmond, VA 23284</Text>
            </div>
        </div>
    )
}