import Styles from './card.module.css';

const card = (props) =>{
    console.log(props.children)

return <div className = { Styles.charStyle } >
        { props.children }
     </div>
}


export default card;