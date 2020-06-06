import { combineReducers } from "redux";
import NewQuestionReducer from './NewQuestionReducer';
import CorrectAnswerReducer from './CorrectAnswerReducer';

const rootReducer = combineReducers({
    NewQuestionReducer: NewQuestionReducer,
    CorrectAnswerReducer: CorrectAnswerReducer
});

export default rootReducer;