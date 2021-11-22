import classes from './Button.module.css';

const Button = (props) => {
    const styleClasses = props.classList && props.classList.split(",").map(item => {
        return classes[item]
    })
    return(
        <button className={[classes.ButtonWrapper, styleClasses].join(" ")}>
            {
                !props.icon ? null :
                <img className={classes.Icon} src={props.icon} alt={props.iconAlt} />
            }
            {
                !props.label ? null :
                <span className={classes.Label}>{props.label}</span>
            }
        </button>
    );
}

export default Button;