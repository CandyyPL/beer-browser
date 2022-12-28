import { ModalContent, ModalWrapper } from '@/components/Modal/Modal.styles'
import { IBeer } from '@/types/Beer'
import { FC } from 'react'
import closeImg from '@/assets/close.png'

interface IModalProps {
  beer: IBeer
  isOpen: boolean
  handleClose: () => void
}

const Modal: FC<IModalProps> = ({ beer, isOpen, handleClose }) => {
  const modalRoot = document.getElementById('root') as HTMLElement

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
        </div>
        <div className='info'>
          <div className='name'>
            <span>{beer.name}</span>
          </div>
          <div className='tagline'>
            <span>{beer.tagline.toUpperCase().slice(0, -1)}</span>
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
          </div>
          <div className='description'>
            <span>{beer.description}</span>
          </div>
          <div className='tips'>
            <span>{beer.brewers_tips}</span>
          </div>
          <div className='food'>
            {beer.food_pairing.length > 0 ? beer.food_pairing.map(fp => <span>{fp}</span>) : null}
          </div>
        </div>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
