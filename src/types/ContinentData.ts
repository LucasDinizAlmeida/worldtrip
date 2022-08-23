interface City {
  name: string,
  image: string,
  country: string
}

export interface Cities {
  city_1: City,
  city_2: City,
  city_3: City,
  city_4: City,
  city_5: City
}

export interface ContinentData {
  id: number,
  slug: string,
  title: string,
  image: string,
  description: string,
  citys: Cities
}