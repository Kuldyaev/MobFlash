import {ADD_NEW_DECK, ADD_NEW_QUESTIONS, SET_QUIZ_REZULT} from './constants'



const addNewDeck = (deck) => ({
    type: ADD_NEW_DECK,
    deck
})

const addNewQuestion = (deck, question) => ({
    type: ADD_NEW_QUESTIONS,
    deck,
    question,
    
})

const setQuizRezult = (deck, result, status) => ({
    type: SET_QUIZ_REZULT,
    deck,
    result,
    status,
    
})

export {addNewDeck, addNewQuestion, setQuizRezult}