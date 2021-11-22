import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Button from "../../components/Button/Button";
import ListCard from "../../components/ListCard/ListCard";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import { DEMO_DATA } from "../../utils/AppData";
import { isListEmpty } from "../../utils/CommonMethods";
import { BUTTON_TYPE, ICON, STORAGE_KEY } from "../../utils/Constants";
import { GET_IMAGES } from "../../utils/ImageLoader";

import classes from './BoardPage.module.css';

const BoardPage = () => {
    const initialState = {
        listData: [],
    }
    const [state, setState] = React.useState({...initialState});

    const getDataFromStorage = () => {
        if(!isListEmpty(localStorage.getItem(STORAGE_KEY.LIST_DATA))) {
            return JSON.parse(localStorage.getItem(STORAGE_KEY.LIST_DATA))
        } else {        
            localStorage.setItem(STORAGE_KEY.LIST_DATA, JSON.stringify(DEMO_DATA));
            return [...DEMO_DATA]
        };
    }

    const createNewList = (newListData) => {
        const updatedState = [...state.listData];
        updatedState.push(newListData);
        setState({...state, listData: updatedState});
        localStorage.setItem(STORAGE_KEY.LIST_DATA, JSON.stringify(updatedState));
    }

    const createNewCard = (listId, newCardData) => {
        const oldData = [...state.listData];
        let updatedListData = null;
        let updatedListDataPos = -1;
        for(let i=0; i<oldData.length; i++) {
            if(oldData[i].id.toString() === listId.toString()) {
                updatedListData = oldData[i]
                updatedListDataPos = i;
                break;
            }
        }
        updatedListData.tasks.push(newCardData);
        oldData[updatedListDataPos] = updatedListData;
        setState({...state, listData: oldData});
        localStorage.setItem(STORAGE_KEY.LIST_DATA, JSON.stringify(oldData));
    }

    React.useEffect(() => {
        const dataFromStorage = getDataFromStorage();
        setState({...state, listData: dataFromStorage});
    }, [])

    const handleDragEnd = ({destination, source}) => {
        if (!destination) {
          return
        }
    
        if (destination.index === source.index && destination.droppableId.toString() === source.droppableId.toString()) {
          return
        }

        const initialListData = [...state.listData];
        let draggedItemData = null;
        let draggedFromListPos = -1;
        let draggedToListPos = -1;
        for(let i=0; i<initialListData.length; i++) {
            if(initialListData[i].id.toString() === source.droppableId.toString()) {
                draggedItemData = initialListData[i].tasks[source.index]
                draggedFromListPos = i
            }
            if(initialListData[i].id.toString() === destination.droppableId.toString()) {
                draggedToListPos = i
            }
        }

        // alert(JSON.stringify(destination) + " ------- " + JSON.stringify(source))
        // alert(JSON.stringify(initialListData));
        // alert(JSON.stringify(draggedItemData));
        // alert(draggedFromListPos + " " + draggedToListPos);

        if(draggedFromListPos > -1 && draggedToListPos > -1) {            
            initialListData[draggedFromListPos].tasks.splice(source.index, 1);
            initialListData[draggedToListPos].tasks.splice(destination.index, 0, draggedItemData);

            setState({...state, listData: initialListData});
            localStorage.setItem(STORAGE_KEY.LIST_DATA, JSON.stringify(initialListData));
        }
      }

    return(
        <section>
            <div className={classes.TopStrip}>
                <div>
                    <img className={classes.EarthIcon} src={GET_IMAGES(ICON.EARTH_GREEN)} />
                    <span className={classes.Message}>This board is set to public. Board admins can change its visibility setting at any time.</span>
                    <a className={classes.KnowMore}>Learn more here</a>
                </div>
                <span className="material-icons">&#xe5cd;</span>
            </div>

            <div className={classes.MainContainer}>
                <div className={classes.TitleWrapper}>
                    <h1 className={classes.BoardTitle}>Kanban Board</h1>
                    <div className={classes.StarWrapper}>
                        <span className="material-icons">&#xf06f;</span>
                    </div>
                    <div className={classes.Separator}></div>
                    <Button classList={BUTTON_TYPE.SECONDARY} icon={GET_IMAGES(ICON.EARTH_WHITE)} iconLabel={"earth white"} label="Public" />
                    <div className={classes.Separator}></div>
                    <UserAvatar initials={"AH"} />
                </div>

                <div className={classes.ListWrapper}>
                    <DragDropContext onDragEnd={handleDragEnd}>
                        {
                            state.listData && state.listData.map(item => {
                                return(                                       
                                    <ListCard 
                                    listId={item.id} 
                                    title={item.title} 
                                    taskList={item.tasks} 
                                    onCreateNewCardClick={createNewCard} />
                                )
                            })
                        }
                    </DragDropContext>
                    
                    <ListCard onCreateNewListClick={createNewList} />
                </div>
            </div>
        </section>
    );
}

export default BoardPage;