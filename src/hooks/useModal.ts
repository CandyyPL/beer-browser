import { beerInitial, IBeer } from '@/types/Beer'
import { useState } from 'react'

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [beer, setBeer] = useState<IBeer>(beerInitial)

  const handleOpenModal = () => setIsOpen(true)
  const handleCloseModal = () => setIsOpen(false)

  return { isOpen, handleOpenModal, handleCloseModal, beer, setBeer }
}

export default useModal
