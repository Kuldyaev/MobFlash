import {ADD_NEW_DECK, ADD_NEW_QUESTIONS} from './constants'



const addNewDeck = (deck) => ({
    type: ADD_NEW_DECK,
    deck
})

const addNewQuestion = (deck, question) => ({
    type: ADD_NEW_QUESTIONS,
    deck,
    question,
    
})

export {addNewDeck, addNewQuestion}