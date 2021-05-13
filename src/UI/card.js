import Styles from './card.module.css';

const card = (props) =>{

return <div className = { Styles.card } >
        <p >{ props.value }</p>
     </div>
}


export default card;