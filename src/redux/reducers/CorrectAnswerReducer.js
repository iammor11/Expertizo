import { CORRECT_ANS } from "../actions/ActionType";

const initState = 0

const CorrectAnswerReducer = (state = initState, action) => {
    switch (action.type) {

        case CORRECT_ANS:   
        return state + 1;

        default :
        return state;
    }}
export default CorrectAnswerReducer;