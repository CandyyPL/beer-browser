interface IIngredient {
  name: string
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
  fermentation: {
    temp: {
      value: number
    }
  }
  ingredients: {
    malt: IIngredient[]
    hops: IIngredient[]
    yeast: string
  }
  food_pairing: string[]
  brewers_tips: string
}

export interface IContentContext {
  beers: IBeer[]
  fav: number[]
  favBeers: IBeer[]
  setBeers: (v: IBeer[]) => void
  setFav: (v: number[]) => void
  setFavBeers: (v: IBeer[]) => void
}

const beerInitial: IBeer = {
  id: 0,
  name: '',
  tagline: '',
  first_brewed: '',
  description: '',
  image_url: '',
  abv: 0,
  ph: 0,
  fermentation: {
    temp: {
      value: 0,
    },
  },
  ingredients: {
    malt: [],
    hops: [],
    yeast: '',
  },
  food_pairing: [],
  brewers_tips: '',
}

export const contentInitial: IContentContext = {
  beers: [],
  fav: [],
  favBeers: [],
  setBeers: (v: IBeer[]) => {},
  setFav: (v: number[]) => {},
  setFavBeers: (v: IBeer[]) => {},
}
