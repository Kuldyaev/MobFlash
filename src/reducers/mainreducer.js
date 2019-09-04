import { combineReducers } from 'redux'
import questions from './questions'
import current from './current'



const reducer = combineReducers({
    questions,
    current,
});

export default reducer