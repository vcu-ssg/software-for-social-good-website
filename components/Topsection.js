import styles from '../styles/Topsection.module.css'
import LearnMoreButton from './LearnMoreButton';
import Image from "next/image";

const Topsection = () => {

    return(
        <div  className={ styles.itemContainer }>
            <div className={ styles.topSecText }>
                <h1 className={ styles.topSecHeader}>Software for Social <br/>Good</h1>
                <h5 className={ styles.topSecSubheader}> We connect VCU students with outer communities through projects that brings social impact. </h5>
            </div>
            <div>
                <LearnMoreButton/>
            </div>
            <div className={ styles.imageContainer }>
                <Image src="/topSecImg.svg" width="719" height="597" placeholder="empty" />
            </div>
            <div className={ styles.firstScroll }>
                <Image src="/buttonScrollDown.svg" width="69" height="69" />
            </div>
        </div>
    )
}

export default Topsection;