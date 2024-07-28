import { Dispatch } from 'redux'
import { decksApi } from './decks-api.ts'
import { getDecksAC } from './decks-reducer.ts'

export const getDecksTC = () => {
  return (dispatch: Dispatch) => {
    decksApi.getDecks().then((res) => dispatch(getDecksAC(res.data)))
  }
}
