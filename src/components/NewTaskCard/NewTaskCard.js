import React from "react";
import { BUTTON_TYPE } from "../../utils/Constants";
import Button from "../Button/Button";
import classes from './NewTaskCard.module.css';

const NewTaskCard = (props) => {
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
            message: e.target.cardTitle.value,
        }
        setState({...state, showNewForm: false})
        props.onCreateNewCardClick(props.listId, data);
    }

    return(
        <div className={[classes.NewListWrapper, state.showNewForm ? classes.CreateFormOpen : null].join(" ")}>
            {
                !state.showNewForm ? 
                <div className={classes.AddMoreWrapper} onClick={onCreateNewClick}>
                    <span className="material-icons">&#xe145;</span>
                    Add a card
                </div>
                :
                <div>
                    <form className={classes.CreateListForm} onSubmit={onCreateListFormSubmit}>
                        <input className={classes.InputBox} type="text" required placeholder="Enter a title for this card..." name="cardTitle" autoFocus />
                        <div className={classes.ButtonWrapper}>
                            <Button classList={BUTTON_TYPE.PRIMARY} label="Add card" />                
                            <span className="material-icons" onClick={onHideForm}>&#xe5cd;</span>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
}

export default NewTaskCard;