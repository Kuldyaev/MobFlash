import {SET_CURRENT_DECK, SET_NOTIFICATION_STATUS} from '../actions/constants'



const setCurrentDeck = (deck) => ({
    type: SET_CURRENT_DECK,
    payload: deck
})
const setNotificationStatus = (status, data) => ({
    type: SET_NOTIFICATION_STATUS,
    status,
    data
})
export {setCurrentDeck, setNotificationStatus}