import s from './DecksList.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDecksTC } from '../decks-thunks.ts'
import { AppDispatch, AppRootState, useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { decksApi, FetchDecksResponse, Deck } from '../decks-api.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { selectDecks } from '../decks-selectors.ts'

export const DecksList = () => {
  const decks = useSelector(selectDecks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    /*dispatch(getDecksTC())*/
    decksApi.getDecks().then((res) => dispatch(setDecksAC(res.data.items)))
  }, [])
  return (
    <ul className={s.list}>
      {decks.map((deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
