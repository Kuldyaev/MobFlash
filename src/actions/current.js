import {SET_CURRENT_DECK, SET_CURRENT_QUESTION} from '../actions/constants'



const setCurrentDeck = (deck) => ({
    type: SET_CURRENT_DECK,
    payload: deck
})

const setCurrentQuestion = (question) => ({
    type: SET_CURRENT_QUESTION,
    payload: question
    
})

export {setCurrentDeck, setCurrentQuestion}