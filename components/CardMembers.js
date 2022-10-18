import Image from "next/image";

import styles from "../styles/CardMembers.module.css"

const CardMembers = (props) => {
    return(
        <div className={ styles.container }>
            <Image src={ props.imagePath } alt="Team Member Picture" />
            <p className={ styles.nameText }>{ props.name }</p>
            <p className={ styles.majorYearText }>{ props.major }</p>
            <p className={ styles.majorYearText }>{ props.graduationyear }</p>
            <div>
                <div>
                    <img src="/ArrowRight.svg" alt="Arrow Right" style={{ marginRight: 1 + "rem" }}/>
                    <a href={ props.linkedInURL }>LinkedIn</a>
                </div>
                
                
            </div>
            
        </div>
    )
};

export default CardMembers;