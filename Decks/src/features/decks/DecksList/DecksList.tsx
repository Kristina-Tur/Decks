import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './useFetchDecks.ts'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { DeckItemSkeleton } from './DeckItem/DeckItemSkeleton.tsx'

export const DecksList = () => {
  const { decks, isLoading } = useFetchDecks()
//условие с длинной decks.length === 0 значит что эта компонента будет отрисовываться
  //только когда происходит первая загрузка страницы
  return (
    <>
      <ul className={s.list}>
        {isLoading && decks.length === 0 && <DeckItemSkeleton count={10}/>}
        {decks.map((deck) => (
          <DeckItem key={deck.id} deck={deck} />
        ))}
      </ul>
    </>

  )
}
