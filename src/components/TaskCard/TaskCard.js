import classes from './TaskCard.module.css';

const TaskCard = (props) => {
    return (
        <div className={classes.MainContainer}>
            {
                props.label && props.label ? 
                <div className={classes.TaskLabelWrapper} style={{backgroundColor: `${props.label.color}`}} title={props.label.title}></div>
                : null
            }
            <h3 className={classes.Message}>{props.message}</h3>
        </div>
    );
}

export default TaskCard;