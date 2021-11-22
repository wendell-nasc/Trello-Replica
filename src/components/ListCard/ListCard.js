import { isStringEmpty } from '../../utils/CommonMethods';
import NewListCard from '../NewListCard/NewListCard';
import NewTaskCard from '../NewTaskCard/NewTaskCard';
import TaskCard from '../TaskCard/TaskCard';
import classes from './ListCard.module.css';

const ListCard = (props) => {
    return(
        isStringEmpty(props.title) ? <NewListCard onCreateNewListClick={props.onCreateNewListClick} /> : 
        <div className={classes.MainContainer}>
            <div className={classes.TitleWrapper}>
                <h3 className={classes.Title}>{props.title}</h3>
                <span class="material-icons">&#xe5d3;</span>
            </div>

            {
                props.taskList && props.taskList.map(item => <TaskCard key={item.id} message={item.message} label={item.label} />)
            }

            <NewTaskCard listId={props.listId} onCreateNewCardClick={props.onCreateNewCardClick} />
        </div>
    );
}

export default ListCard;