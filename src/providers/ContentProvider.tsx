import { IContentContext, contentInitial, IBeer } from '@/types/Beer'
import axios from 'axios'
import { FC, createContext, useState, useEffect } from 'react'

interface Props {
  children: JSX.Element
}

export const ContentContext = createContext<IContentContext>(contentInitial)

const baseUrl = 'https://api.punkapi.com/v2/beers'

const ContentProvider: FC<Props> = ({ children }) => {
  const [beers, setBeers] = useState<IBeer[]>([])
  const [fav, setFav] = useState<number[]>([])
  const [favBeers, setFavBeers] = useState<IBeer[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    ;(async () => {
      const page = Math.floor(Math.random() * 10) + 1
      const beers = await axios.get(`${baseUrl}?page=1&per_page=40`)
      setBeers(beers.data)
      setLoading(false)
    })()
  }, [])

  useEffect(() => {
    fav.forEach(async id => {
      const beer = await axios.get(`${baseUrl}/${id}`)
      const newFavBeers = [...favBeers, beer.data[0]]
      setFavBeers(newFavBeers)
    })

    if (fav.length == 0) setFavBeers([])
  }, [fav])

  const provide = { beers, fav, favBeers, setBeers, setFav, setFavBeers }

  return (
    <ContentContext.Provider value={provide}>{loading ? null : children}</ContentContext.Provider>
  )
}

export default ContentProvider
