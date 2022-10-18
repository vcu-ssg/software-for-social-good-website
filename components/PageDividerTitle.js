import styles from '../styles/PageDividerTitle.module.css'

const PageDividerTitle = (props) => 
{
    return(
        <div className={ styles.container }>
            <div className={ styles.lineLeft }/>
            <div className={ styles.headerContainer }>
                <h1 className= { styles.headerTitle }>{ props.text }</h1>
            </div>
            <div className={ styles.lineRight }/>
        </div>
    )
}



export default PageDividerTitle;