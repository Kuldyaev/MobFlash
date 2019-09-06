import {SET_CURRENT_DECK, ADD_NEW_DECK, SET_NOTIFICATION_STATUS} from '../actions/constants'

const questions = (state = {deck: 0,
                            note: false,
                    

                }, action) => {
  switch (action.type) {
    case SET_CURRENT_DECK:
      return {
          ...state,
      ['deck']:action.payload
          
      }
    case ADD_NEW_DECK:
      return {
          ...state,
      ['deck']: action.name
          
      }
    case SET_NOTIFICATION_STATUS:
      return {
          ...state,
      ['note']: action.status
          
      }    
    default:
      return state
  }
}

export default questions