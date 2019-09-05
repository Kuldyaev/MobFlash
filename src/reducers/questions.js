import {ADD_NEW_DECK,  ADD_NEW_QUESTIONS} from '../actions/constants'

const questions = (state = {id: ["Main page"],
                    decks: { 
                        react: {id: "React",
                                passed: 'no',
                                result: 0,
                                questions: {dfsdfsd:{Qtext: "Это правда?",
                                                     Atext: "Да, правда!" ,  
                                                     },
                                            dfsfdsf:{Qtext: "Это неправда?",
                                                     Atext: "Да, неправда!" ,
                                                     },
                                             ddddd:{Qtext: "Это ложь?",
                                                    Atext: "Да, ложь" ,
                                                     }}},
                        python: {id: "Python",
                                passed: 'no',
                                result: 0,
                                    questions: {dfsdfsd:{Qtext: "Это правда?",
                                                     Atext: "Да, правда!" ,  
                                                     },
                                            dfsfdsf:{Qtext: "Это неправда?",
                                                     Atext: "Да, неправда!" ,
                                                     },
                                             ddddd:{Qtext: "Это ложь?",
                                                    Atext: "Да, ложь" ,
                                                     }}},
                        flags: {id: "Flags", 
                                passed: 'no', 
                                result: 0,
                                questions: {dfsdfsd:{Qtext: "Это правда?",
                                                     Atext: "Да, правда!" ,  
                                                     },
                                            dfsfdsf:{Qtext: "Это неправда?",
                                                     Atext: "Да, неправда!" ,
                                                     },
                                             ddddd:{Qtext: "Это ложь?",
                                                    Atext: "Да, ложь" ,
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



