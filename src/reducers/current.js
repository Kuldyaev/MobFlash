import {SET_CURRENT_DECK, SET_CURRENT_QUESTION} from '../actions/constants'

const questions = (state = {deck: 0,
                            question: 0
                    

                }, action) => {
  switch (action.type) {
    case SET_CURRENT_DECK:
      return {
          ...state,
      ['deck']:action.payload
          
      }
    case SET_CURRENT_QUESTION:
      return {
          ...state,
      ['question']:action.payload
          
      }
    default:
      return state
  }
}

export default questions