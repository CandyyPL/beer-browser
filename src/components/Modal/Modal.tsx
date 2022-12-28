import { ModalContent, ModalWrapper } from '@/components/Modal/Modal.styles'
import { IBeer, IContentContext } from '@/types/Beer'
import { FC, useContext } from 'react'
import closeImg from '@/assets/close.png'
import { ContentContext } from '@/providers/ContentProvider'

interface IModalProps {
  beer: IBeer
  isOpen: boolean
  handleClose: () => void
}

const Modal: FC<IModalProps> = ({ beer, isOpen, handleClose }) => {
  const modalRoot = document.getElementById('root') as HTMLElement

  const { fav, setFav } = useContext<IContentContext>(ContentContext)

  const handleAddFav = (id: number) => {
    if (!fav.includes(id)) {
      const newFav = [...fav, id]
      setFav(newFav)
      return
    }

    const newFav = fav.filter(i => i !== id)
    setFav(newFav)
  }

  return (
    <ModalWrapper
      isOpen={isOpen}
      style={{ overlay: { backgroundColor: '#444444dd' } }}
      appElement={modalRoot}>
      <button className='close' onClick={handleClose}>
        <img src={closeImg} alt='close' />
      </button>
      <ModalContent>
        <div className='image'>
          <img src={beer.image_url} alt='beer' />
          <button className='fav' onClick={() => handleAddFav(beer.id)}>
            {fav.includes(beer.id) ? 'Delete from Favorites' : 'Add to Favorites'}
          </button>
        </div>
        <div className='info'>
          <div className='name'>
            <span>{beer.name}</span>
          </div>
          <div className='tagline'>
            <span>{beer.tagline.toUpperCase()}</span>
          </div>
          <div className='details'>
            <div className='first'>
              <span>First brewed: {beer.first_brewed}</span>
            </div>
            <div className='abv'>
              <span>ABV: {beer.abv}%</span>
            </div>
            <div className='ph'>
              <span>pH: {beer.ph}</span>
            </div>
            <div className='temp'>
              <span>Fermentation temp: {beer.method.fermentation.temp.value}°C</span>
            </div>
          </div>
          <div className='description'>
            <span>{beer.description}</span>
          </div>
          <div className='ingredients'>
            <span className='title'>
              INGREDIENTS (for {beer.volume.value} {beer.volume.unit} volume)
            </span>
            <div className='ingredientsDetails'>
              <div className='malt'>
                <span className='title'>MALT</span>
                {beer.ingredients.malt.map(m => (
                  <span className='group'>
                    <span>{m.name}</span>
                    <span className='amount'>{m.amount.value} kg</span>
                  </span>
                ))}
              </div>
              <div className='hops'>
                <span className='title'>HOPS</span>
                {beer.ingredients.hops.map(h => (
                  <span className='group'>
                    <span>{h.name}</span>
                    <span className='amount'>{h.amount.value} kg</span>
                    <span>add on {h.add}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className='yeast'>Yeast: {beer.ingredients.yeast}</div>
        </div>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
