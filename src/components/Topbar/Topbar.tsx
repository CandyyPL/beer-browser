import { Favorite, TopbarWrapper } from '@/components/Topbar/Topbar.styles'
import { ContentContext } from '@/providers/ContentProvider'
import { IContentContext } from '@/types/Beer'
import { FC, useContext } from 'react'

const Topbar: FC = () => {
  const { fav } = useContext<IContentContext>(ContentContext)

  return (
    <TopbarWrapper>
      <div className='left' />
      <div className='middle'>
        <span>BEER BROWSER</span>
      </div>
      <div className='right'>
        <Favorite>Favorites</Favorite>
        <div className={`favCount ${fav.length > 0 ? 'active' : ''}`}>
          {fav.length > 0 ? fav.length : '1'}
        </div>
      </div>
    </TopbarWrapper>
  )
}

export default Topbar
