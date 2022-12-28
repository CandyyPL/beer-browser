import Content from '@/components/Content/Content'
import Topbar from '@/components/Topbar/Topbar'
import { MainPageWrapper } from '@/pages/Main/MainPage.styles'
import { FC } from 'react'

const MainPage: FC = () => {
  return (
    <MainPageWrapper>
      <Topbar />
      <div className='contentWrapper'>
        <Content />
      </div>
    </MainPageWrapper>
  )
}

export default MainPage
