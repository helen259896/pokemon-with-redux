import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Reducer = {
    numberSlice: {anotherCounter: number},
    pokemonSlice: {},
    usersSlice: {},
  }
export type pokeman = {
    pokemon: {
        name: string;
        url: string;
        imgAlt: string;
        imgUrl?: string | StaticImport | null;
    },
    key: string,
  }


export type basePokemon = {
    name: string;
    url: string;
  }

export type pokemanCardDetail = {
    name: string;
    url: string;
    imgAlt: string;
    imgUrl?: string;
  }

  export type Pokemon = {
    name: string;
    count: number;
    next: string;
    previous: string | null;
    results: [object];
  }
  export type pokemonList = {
    pokemonlist: pokemanCardDetail[];
    count: number;
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
    type: basePokemon,
    // {
    //   name: string,
    //   url: string,
    // },
  }

  export type pokemonDetailsStats = {
    base_stat: number,
    effort: number,
    stat: basePokemon,
  }

  export type pokemonDetailsAbilities = {
    slot: number,
    is_hidden: boolean,
    ability: basePokemon,
  }

   export type pokemonDetailsMoves = {
    version_group_details: [{}],
    move: basePokemon,
  }

   export type user = {
    id: string,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {},
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string,
    },
  }

  export type users = {
    users: user[],
  };