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
    default:
      return state
  }
}

export const setDecksAC = (decks: Deck[]) => {
  return { type: 'SET-DECKS', decks } as const
}

type DecksActions = ReturnType<typeof setDecksAC>
