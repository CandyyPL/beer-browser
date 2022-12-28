import { MouseEventHandler } from 'react'

interface IIngredient {
  name: string
  add: string
  amount: {
    value: number
    unit: string
  }
}

export interface IBeer {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ph: number
  method: {
    fermentation: {
      temp: {
        value: number
      }
    }
  }
  volume: {
    value: number
    unit: string
  }
  ingredients: {
    malt: IIngredient[]
    hops: IIngredient[]
    yeast: string
  }
}

export interface IContentContext {
  beers: IBeer[]
  fav: number[]
  favBeers: IBeer[]
  setBeers: (v: IBeer[]) => void
  setFav: (v: number[]) => void
  setFavBeers: (v: IBeer[]) => void
}

export const beerInitial: IBeer = {
  id: 0,
  name: '',
  tagline: '',
  first_brewed: '',
  description: '',
  image_url: '',
  abv: 0,
  ph: 0,
  method: {
    fermentation: {
      temp: {
        value: 0,
      },
    },
  },
  volume: {
    value: 0,
    unit: '',
  },
  ingredients: {
    malt: [],
    hops: [],
    yeast: '',
  },
}

export const contentInitial: IContentContext = {
  beers: [],
  fav: [],
  favBeers: [],
  setBeers: (v: IBeer[]) => {},
  setFav: (v: number[]) => {},
  setFavBeers: (v: IBeer[]) => {},
}
