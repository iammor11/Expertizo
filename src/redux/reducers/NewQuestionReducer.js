import { NEW_QUESTION } from "../actions/ActionType";

const initState = 0

const NewQuestionReducer = (state = initState, action) => {
    switch (action.type) {

        case NEW_QUESTION:   
        return state + 1;

        default :
        return state;
    }}
export default NewQuestionReducer;