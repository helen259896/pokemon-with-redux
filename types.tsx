export type pokeman = {
    pokeman: {
        name: string;
        url: string;
        imgAlt: string;
        imgUrl?: string;
    },
    key: string,
  }

  export type Pokemon = {
    name: string;
    count: number;
    next: string;
    previous: string | null;
    results: [object];
  }

  export type pokemonDetails = {
    abilities: [{}],
    cries: {},
    forms: [{}],
    sprites: {
      other: {
        'official-artwork': {
            front_default: string,
            front_shiny: string,
        } },
    },
    moves: [],
    types: [],
    stats: [],
    name: string,
  }