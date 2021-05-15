import Styles from "./input.module.css";

const input = (props) => {
  return (
    <div>
      <input type="text" className={Styles.input} onChange={props.onChange} />
      <input type="color" value={props.colorValue} className={Styles.input} onChange={props.click} />
    </div>
  );
};

export default input;
