import {SET_CURRENT_DECK} from '../actions/constants'



const setCurrentDeck = (deck) => ({
    type: SET_CURRENT_DECK,
    payload: deck
})

export {setCurrentDeck}