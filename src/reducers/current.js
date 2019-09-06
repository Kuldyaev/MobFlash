import {SET_CURRENT_DECK, ADD_NEW_DECK} from '../actions/constants'

const questions = (state = {deck: 0,
                            question: 0
                    

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
    default:
      return state
  }
}

export default questions