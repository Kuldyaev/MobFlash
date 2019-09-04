import {ADD_NEW_DECK, RECEIVE_DECKS} from '../actions/constants'

const questions = (state = {id: ["Main page"],
                    decks: { 
                        react: {id: "React",
                                passed: 'no',
                                questions: {dfsdfsd:{text: "Это правда?",
                                                     yes: 1,
                                                      no: 0,
                                                  answer: 'empty',
                                                     },
                                            dfsfdsf:{text: "2+2=4",
                                                     yes: 1,
                                                      no: 0,
                                                  answer: 'empty',
                                                     },
                                             ddddd:{text: "Век -- 100 лет",
                                                     yes: 1,
                                                      no: 0,
                                                  answer: 'empty',
                                                     }}},
                        python: {id: "Python",
                                passed: 'no',
                               questions: {dfsfdfsd:{text: "Тебе 10 лет?",
                                                     yes: 0,
                                                      no: 1,
                                                  answer: 'empty',
                                                     },
                                            dfsdfdsf:{text: "2+2=5",
                                                     yes: 0,
                                                      no: 1,
                                                  answer: 'empty',
                                                     },
                                             dddsdd:{text: "Век -- 99 лет",
                                                     yes: 0,
                                                      no: 1,
                                                  answer: 'empty',
                                                     }}},
                        flags: {id: "Flags", 
                                passed: 'no',                        
                                questions: {dfsfdqqfsd:{text: "Тебе 20 лет?",
                                                     yes: 0,
                                                      no: 1,
                                                  answer: 'empty',
                                                     },
                                            qdfsdfdsf:{text: "2+2=3",
                                                     yes: 0,
                                                      no: 1,
                                                  answer: 'empty',
                                                     },
                                             dddsdqd:{text: "Век -- 1000 лет",
                                                     yes: 0,
                                                      no: 1,
                                                  answer: 'empty',
                                                     }}},
                        
                    },

                }, action) => {
  switch (action.type) {
    case ADD_NEW_DECK:
      return {
          ...state,
      ['decks']:{...state['decks'], ...action.deck}
          
      }
    case RECEIVE_DECKS:
      return {
          ...state,
          ...action.decks
          
      } 
    default:
      return state
  }
}

export default questions



