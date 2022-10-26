import styles from '../styles/Footer.module.css'

const Footer = () => 
{
    
    return(
        <div className={ styles.container }>
            <div className={ styles.innerContainer }>
                <div className={ styles.ssgGraphicContainer }>
                    <div className={ styles.ssgBrandContainer }>
                        <img src="/SsgLogo.svg" width="120" height="50" className={ styles.ssgLogo }/>
                        <h4 className={ styles.ssgName }>Software for<br/>Social<br/>Good</h4>
                    </div>
                    <img src="/VCUCollegeOfEngr.png" width="221" height="61" className={ styles.vcuContainer }/>
                </div>
                <div className={ styles.infoContainer }>
                    <div className={ styles.infoItemContainer }>
                        <div className={ styles.infoHeaderContainer }>
                            <img src="/JoinUsArrow.svg" width="15" height="15" style={{ marginRight: 0.5 + "rem" }}/>
                            <p className= { styles.infoHeaderText }>Join Us</p>
                        </div>
                        <p className={ styles.infoText }>Student Recruitment</p>
                    </div>
                    <div className={ styles.infoItemContainer }>
                        <div className={ styles.infoHeaderContainer }>
                            <img src="/ContactMail.svg" width="15" height="15" style={{ marginRight: 0.5 + "rem" }}/>
                            <p className= { styles.infoHeaderText }>Contact</p>
                        </div>
                        <p className={ styles.infoText }>wbenton@vcu.edu | Faculty</p>
                        <p className={ styles.infoText }>jdleonard@vcu.edu | Faculty</p>
                    </div>
                    <div className={ styles.infoItemContainer }>
                        <div className={ styles.infoHeaderContainer }>
                            <img src="/OfficeMarker.svg" width="15" height="15" style={{ marginRight: 0.5 + "rem" }}/>
                            <p className= { styles.infoHeaderText }>Office</p>
                        </div>
                        <p className={ styles.infoText }>Virginia Commonwealth University,</p>
                        <p className={ styles.infoText }>College of Engineering</p>
                        <p className={ styles.infoText }>401 W Main St. Richmond, VA 23284</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;