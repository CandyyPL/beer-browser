import { MenuButton, TopbarWrapper } from '@/components/Topbar/Topbar.styles'
import { ContentContext } from '@/providers/ContentProvider'
import { IContentContext } from '@/types/Beer'
import { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Topbar: FC = () => {
  const { fav } = useContext<IContentContext>(ContentContext)

  const navigate = useNavigate()

  return (
    <TopbarWrapper>
      <div className='left' />
      <div className='middle'>
        {window.location.pathname == '/' ? <span>BEER BROWSER</span> : null}
        {window.location.pathname == '/fav' ? <span>FAVORITE BEERS</span> : null}
      </div>
      <div className='right'>
        {window.location.pathname == '/' ? (
          <>
            <MenuButton onClick={() => navigate('/fav')}>Favorites</MenuButton>
            <div className={`favCount ${fav.length > 0 ? 'active' : ''}`}>
              {fav.length > 0 ? fav.length : '1'}
            </div>
          </>
        ) : null}
        {window.location.pathname == '/fav' ? (
          <>
            <MenuButton onClick={() => navigate('/')}>Home</MenuButton>
          </>
        ) : null}
      </div>
    </TopbarWrapper>
  )
}

export default Topbar
