import Styles from './card.module.css';

const card = (props) =>{
    
return <div className = { Styles.charStyle } onClick={props.click} >
        { props.children }
     </div>
}


export default card;