import { FetchDecksResponse, Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return { ...state, decks: action.decks }
    case 'ADD-DECK': {
      return { ...state, decks: [action.deck, ...state.decks] }
    }

    default:
      return state
  }
}

export const setDecksAC = (decks: Deck[]) => {
  return { type: 'SET-DECKS', decks } as const
}
export const addDeckAC = (deck: Deck) => {
  return { type: 'ADD-DECK', deck } as const
}

type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>
