import { Beer, ContentWrapper } from '@/components/Content/Content.styles'
import { ContentContext } from '@/providers/ContentProvider'
import { IContentContext } from '@/types/Beer'
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

  return (
    <ContentWrapper>
      {beers.length > 0
        ? beers.map(b => (
            <Beer key={b.id}>
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
    </ContentWrapper>
  )
}

export default Content
