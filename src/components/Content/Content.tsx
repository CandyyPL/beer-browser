import { Beer, ContentWrapper } from '@/components/Content/Content.styles'
import Modal from '@/components/Modal/Modal'
import useModal from '@/hooks/useModal'
import { ContentContext } from '@/providers/ContentProvider'
import { IBeer, IContentContext } from '@/types/Beer'
import { FC, useContext } from 'react'

const Content: FC = () => {
  const { beers, fav, setFav } = useContext<IContentContext>(ContentContext)

  const handleAddFav = (id: number) => {
    if (!fav.includes(id)) {
      const newFav = [...fav, id]
      setFav(newFav)
      return
    }

    const newFav = fav.filter(i => i !== id)
    setFav(newFav)
  }

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
              <div className='fav' onClick={() => handleAddFav(b.id)}>
                <span className={`material-symbols-outlined ${fav.includes(b.id) ? 'active' : ''}`}>
                  favorite
                </span>
              </div>
            </Beer>
          ))
        : null}
      <Modal isOpen={isOpen} handleClose={handleCloseModal} beer={beer} />
    </ContentWrapper>
  )
}

export default Content
