import Styles from './input.module.css';

const input = (props) =>{
    

    return (
        <input className={Styles.input} onChange={ props.onChange } />
    );
}

export default input;