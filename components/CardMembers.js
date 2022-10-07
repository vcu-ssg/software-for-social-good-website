import styles from "../styles/CardMembers.module.css"

const CardMembers = (props) => {
    return(
        <div className={ styles.container }>
            <p className={ styles.nameText }>{ props.name }</p>
            <p className={ styles.nameText }>{ props.major }, { props.graduationyear }</p>
        </div>
    )
};

export default CardMembers;