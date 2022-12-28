import { Beer, ContentWrapper } from '@/components/Content/Content.styles'
import Modal from '@/components/Modal/Modal'
import useModal from '@/hooks/useModal'
import { ContentContext } from '@/providers/ContentProvider'
import { IBeer, IContentContext } from '@/types/Beer'
import { FC, useContext } from 'react'

const Content: FC = () => {
  const { beers, fav, setFav } = useContext<IContentContext>(ContentContext)

  const { isOpen, handleOpenModal, handleCloseModal, beer, setBeer } = useModal()

  const openModal = (beer: IBeer) => {
    setBeer(beer)
    handleOpenModal()
  }

  return (
    <ContentWrapper>
      {beers.length > 0
        ? beers.map(b => (
            <Beer key={b.id} onClick={() => openModal(b)}>
              <div className='image'>
                <img src={b.image_url} alt='beer' />
              </div>
              <div className='title'>{b.name}</div>
            </Beer>
          ))
        : null}
      <Modal isOpen={isOpen} handleClose={handleCloseModal} beer={beer} />
    </ContentWrapper>
  )
}

export default Content
