import {ADD_NEW_DECK, RECEIVE_DECKS} from './constants'



const addNewDeck = (deck) => ({
    type: ADD_NEW_DECK,
    deck
})

const receiveDecks = (decks) => ({
    type: ADD_INIT_QUESTIONS,
    decks
    
})

export {addNewDeck, receiveDecks}