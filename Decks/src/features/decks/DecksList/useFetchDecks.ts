import { useSelector } from 'react-redux'
import { selectDecks } from '../decks-selectors.ts'
import { useAppDispatch } from '../../../app/store.ts'
import { useEffect } from 'react'
import { fetchDecksTC } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const decks = useSelector(selectDecks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])
  return {
    decks,
  }
}
