import { Beer, ContentWrapper } from '@/components/Content/Content.styles'
import Modal from '@/components/Modal/Modal'
import useModal from '@/hooks/useModal'
import { ContentContext } from '@/providers/ContentProvider'
import { IBeer, IContentContext } from '@/types/Beer'
import { FC, useContext } from 'react'

interface IContentProps {
  beers: IBeer[]
}

const Content: FC<IContentProps> = ({ beers }) => {
  const { fav } = useContext<IContentContext>(ContentContext)

  const { isOpen, handleOpenModal, handleCloseModal, beer, setBeer } = useModal()

  const openModal = (beer: IBeer) => {
    setBeer(beer)
    handleOpenModal()
  }

  return (
    <ContentWrapper>
      {beers.length > 0 ? (
        beers.map(b => (
          <Beer key={b.id} onClick={() => openModal(b)} fav={fav.includes(b.id)}>
            <div className='image'>
              <img src={b.image_url} alt='beer' />
            </div>
            <div className='title'>{b.name}</div>
          </Beer>
        ))
      ) : (
        <h1 style={{ fontSize: '30px', fontFamily: 'Nunito', color: '#111' }}>Nothing here!</h1>
      )}
      <Modal isOpen={isOpen} handleClose={handleCloseModal} beer={beer} />
    </ContentWrapper>
  )
}

export default Content
