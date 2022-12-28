import Content from '@/components/Content/Content'
import Topbar from '@/components/Topbar/Topbar'
import { MainPageWrapper } from '@/pages/Main/MainPage.styles'
import { ContentContext } from '@/providers/ContentProvider'
import { IContentContext } from '@/types/Beer'
import { FC, useContext } from 'react'

const MainPage: FC = () => {
  const { beers } = useContext<IContentContext>(ContentContext)

  return (
    <MainPageWrapper>
      <div className='contentWrapper'>
        <Content beers={beers} />
      </div>
    </MainPageWrapper>
  )
}

export default MainPage
