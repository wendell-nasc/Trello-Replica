import React from "react";
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
        return !isListEmpty(localStorage.getItem(STORAGE_KEY.LIST_DATA)) ? JSON.parse(localStorage.getItem(STORAGE_KEY.LIST_DATA)) : [...DEMO_DATA];
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
            console.log(oldData[i], listId);
            if(oldData[i].id == listId) {
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

    return(
        <section>
            <div className={classes.TopStrip}>
                <div>
                    <img className={classes.EarthIcon} src={GET_IMAGES(ICON.EARTH_GREEN)} />
                    <span className={classes.Message}>This board is set to public. Board admins can change its visibility setting at any time.</span>
                    <a className={classes.KnowMore}>Learn more here</a>
                </div>
                <span class="material-icons">&#xe5cd;</span>
            </div>

            <div className={classes.MainContainer}>
                <div className={classes.TitleWrapper}>
                    <h1 className={classes.BoardTitle}>Kanban Board</h1>
                    <div className={classes.StarWrapper}>
                        <span class="material-icons">&#xf06f;</span>
                    </div>
                    <div className={classes.Separator}></div>
                    <Button classList={BUTTON_TYPE.SECONDARY} icon={GET_IMAGES(ICON.EARTH_WHITE)} iconLabel={"earth white"} label="Public" />
                    <div className={classes.Separator}></div>
                    <UserAvatar initials={"AH"} />
                </div>

                <div className={classes.ListWrapper}>
                    {
                        state.listData && state.listData.map(item => <ListCard key={item.id} listId={item.id} title={item.title} taskList={item.tasks} onCreateNewCardClick={createNewCard} />)
                    }
                    
                    <ListCard onCreateNewListClick={createNewList} />
                </div>
            </div>
        </section>
    );
}

export default BoardPage;