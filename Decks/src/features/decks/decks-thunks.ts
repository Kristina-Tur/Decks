import { Dispatch } from 'redux'
import { AddDeckParams, decksApi } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => {
  return (dispatch: Dispatch) => {
    decksApi.getDecks().then((res) => dispatch(setDecksAC(res.data.items)))
  }
}
export const addDeckTC = async (params: AddDeckParams) => {
  return (dispatch: Dispatch) => {
    return decksApi.addDeck(params).then((res) => dispatch(addDeckAC(res.data)))
  }
}
