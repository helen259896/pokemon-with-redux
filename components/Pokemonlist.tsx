"use client"
import React, { FC } from 'react';
// import Link from 'next/link';

import PokemonCard from './PokemonCard';
import {PokemonList} from '@/types';
// import useScrollPosition from '@/hooks/useScrollPosition';


// const limit = 30;
const PokemonList: FC<PokemonList> = ({pokemonlist, count}) => {
  // console.log('list!', pokemonlist);
  return (
    <div>
        <div>There are {count} pokemon characters </div>
        {pokemonlist.map(listItem => (
            <PokemonCard pokemon={listItem} key={listItem.name} />
        ))} 
    </div>
    
  );
};

export default PokemonList;
