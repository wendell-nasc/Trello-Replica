import React from "react";
import { BUTTON_TYPE } from "../../utils/Constants";
import Button from "../Button/Button";
import classes from './NewListCard.module.css';

const NewListCard = (props) => {
    const initialState = { showNewForm:false }
    const [state, setState] = React.useState({...initialState});

    const onCreateNewClick = () => {
        setState({...state, showNewForm: true});
    }

    const onHideForm = () => {
        setState({...state, showNewForm: false});
    }

    const onCreateListFormSubmit = (e) => {
        e.preventDefault();
        const data = {            
            id: new Date().getTime(),
            title: e.target.listTitle.value,
            tasks: []
        }
        setState({...state, showNewForm: false})
        props.onCreateNewListClick(data);
    }

    return(
        <div className={[classes.NewListWrapper, state.showNewForm ? classes.CreateFormOpen : null].join(" ")}>
            {
                !state.showNewForm ? 
                <div className={classes.AddMoreWrapper} onClick={onCreateNewClick}>
                    <span className="material-icons">&#xe145;</span>
                    Add another list
                </div>
                :
                <div>
                    <form className={classes.CreateListForm} onSubmit={onCreateListFormSubmit}>
                        <input className={classes.InputBox} type="text" required placeholder="Enter list title..." name="listTitle" autoFocus />
                        <div className={classes.ButtonWrapper}>
                            <Button classList={BUTTON_TYPE.PRIMARY} label="Add list" />                
                            <span className="material-icons" onClick={onHideForm}>&#xe5cd;</span>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
}

export default NewListCard;