export type rootSlice = {
    numberSlice: {},
    pokemonSlice: {},
    usersSlice: {},
  }
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

  export type pokemonDetailsType = {
    slot: number,
    type: {
      name: string,
      url: string,
    },
  }

  export type pokemonDetailsStats = {
    base_stat: number,
    effort: number,
    stat: {
      name: string,
      url: string,
    },
  }

  export type pokemonDetailsAbilities = {
    slot: number,
    is_hidden: boolean,
    ability: {
      name: string,
      url: string,
    },
  }

   export type pokemonDetailsMoves = {
    version_group_details: [{}],
    move: {
      name: string,
      url: string,
    },
  }