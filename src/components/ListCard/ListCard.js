import { Draggable, Droppable } from 'react-beautiful-dnd';
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
                <span className="material-icons">&#xe5d3;</span>
            </div>

            <Droppable droppableId={props.listId.toString()}>
                {
                    (provided, snapshot) => {
                    return(
                        <div className={classes.TaskListWrapper} ref={provided.innerRef} {...provided.droppableProps}>
                            {
                                props.taskList && props.taskList.map((item, index) => {
                                    return (
                                        <Draggable key={item.id.toString()} index={index} draggableId={item.id.toString()}>
                                            {
                                                (provided, snapshot) => {
                                                    return(           
                                                        <div className={classes.TaskCardWrapper} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={item.id.toString()} >
                                                            <TaskCard 
                                                                message={item.message} 
                                                                label={item.label} />
                                                        </div>                 
                                                    )
                                                }
                                            }
                                        </Draggable>
                                    )
                                })
                            }
                            {provided.placeholder}
                        </div>
                    )}
                }
            </Droppable>

            <div className={classes.NewTaskCardWrapper}>
                <NewTaskCard listId={props.listId} onCreateNewCardClick={props.onCreateNewCardClick} />
            </div>
        </div>
    );
}

export default ListCard;