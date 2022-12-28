import Content from '@/components/Content/Content'
import { FavoritesWrapper } from '@/pages/Favorites/Favorites.styles'
import { ContentContext } from '@/providers/ContentProvider'
import { IContentContext } from '@/types/Beer'
import { FC, useContext } from 'react'

const Favorites: FC = () => {
  const { favBeers } = useContext<IContentContext>(ContentContext)

  console.log(favBeers)

  return (
    <FavoritesWrapper>
      <div className='contentWrapper'>
        <Content beers={favBeers} />
      </div>
    </FavoritesWrapper>
  )
}

export default Favorites
