import {ADD_NEW_DECK,  ADD_NEW_QUESTIONS} from '../actions/constants'

const questions = (state = {id: ["Main page"],
                    decks: { 
                        react: {id: "React",
                                passed: 'no',
                                questions: {dfsdfsd:{Qtext: "Это правда?",
                                                     Atext: "Да, правда!" ,  
                                                     yes: 1,
                                                      no: 0,
                                                  answer: 'empty',
                                                     },
                                            dfsfdsf:{Qtext: "Это неправда?",
                                                     Atext: "Да, неправда!" ,
                                                     yes: 1,
                                                      no: 0,
                                                  answer: 'empty',
                                                     },
                                             ddddd:{Qtext: "Это ложь?",
                                                    Atext: "Да, ложь" ,
                                                     yes: 1,
                                                      no: 0,
                                                  answer: 'empty',
                                                     }}},
                        python: {id: "Python",
                                passed: 'no',
                                    questions: {dfsdfsd:{Qtext: "Это правда?",
                                                     Atext: "Да, правда!" ,  
                                                     yes: 1,
                                                      no: 0,
                                                  answer: 'empty',
                                                     },
                                            dfsfdsf:{Qtext: "Это неправда?",
                                                     Atext: "Да, неправда!" ,
                                                     yes: 1,
                                                      no: 0,
                                                  answer: 'empty',
                                                     },
                                             ddddd:{Qtext: "Это ложь?",
                                                    Atext: "Да, ложь" ,
                                                     yes: 1,
                                                      no: 0,
                                                  answer: 'empty',
                                                     }}},
                        flags: {id: "Flags", 
                                passed: 'no',                        
                                     questions: {dfsdfsd:{Qtext: "Это правда?",
                                                     Atext: "Да, правда!" ,  
                                                     yes: 1,
                                                      no: 0,
                                                  answer: 'empty',
                                                     },
                                            dfsfdsf:{Qtext: "Это неправда?",
                                                     Atext: "Да, неправда!" ,
                                                     yes: 1,
                                                      no: 0,
                                                  answer: 'empty',
                                                     },
                                             ddddd:{Qtext: "Это ложь?",
                                                    Atext: "Да, ложь" ,
                                                     yes: 1,
                                                      no: 0,
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
    case  ADD_NEW_QUESTIONS:
      return {
          ...state,
          ['decks']:{...state['decks'], 
            [action.deck]:{...state.decks[action.deck],
               ['questions'] :{...state.decks[action.deck].questions,
                ...action.question 
               }    
            }
        }
      } 
    default:
      return state
  }
}

export default questions



