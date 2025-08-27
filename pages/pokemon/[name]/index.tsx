// import { useRouter } from 'next/router';
// import {useState, useEffect } from 'react';
// import { useAppDispatch } from '@/hooks/storeHooks';
import Image from 'next/image';

// import {searchPokeMen} from '../api/route';
// import {pokemonDetail, clearPokemonDetail} from '@/store/action';
import {searchPokeMen, fetchUserData} from '@/pages/api/route';
import { GetServerSideProps } from 'next';
import {
  pokemonDetails,
  pokemonDetailsType,
  pokemonDetailsStats,
  // pokemonDetailsAbilities,
  pokemonDetailsMoves,
} from '@/types';
// import NotFound from './not-found';
import ErrorBoundary from '../error';
// type NoteIdProps = {
//   params: { name: string }
// }




export const getServerSideProps: GetServerSideProps = async (context) => {
  const {name} = context.query as NodeJS.Dict<string >
  if (name) {
    const [pokemon, users] = await Promise.all([
      searchPokeMen(name),
      fetchUserData(),
    ]);
    return {props: {pokemon, users}}
  }
 
      //   const pokemon = await searchPokeMen(name);
      //   return {props:{ pokemon}};
      return {props: {}}
}


export default function PokemonDetails({
  pokemon,
}: {
  pokemon: pokemonDetails,
}) {
  const pokemonDetails = pokemon;
  console.log('pokemon page', pokemon);
  // const dispatch = useAppDispatch();
  
  if (!pokemonDetails) {
    //handle error
    return <ErrorBoundary />
    // return (
    //   <div><NotFound/></div>
    // );
  } 
  console.log('pokemonDetails', pokemonDetails);
  const imgUrl = pokemonDetails.sprites.other['official-artwork']?.front_default;
  const pokemonTypes = pokemonDetails.types.map((pokemon: pokemonDetailsType) => pokemon.type.name).join(', ');
  const pokemonStats = pokemonDetails.stats.slice(0, 7).map((pokemon: pokemonDetailsStats) => pokemon.stat.name).join(', ')
  // const pokemonAbilities = pokemonDetails.abilities.slice(0, 7).map((pokemon: pokemonDetailsAbilities) => pokemon.ability.name).join(', ');
  const pokemonMoves = pokemonDetails.moves.slice(0, 7).map((pokemon: pokemonDetailsMoves) => pokemon.move.name).join(', ');
  
  // console.log('pokemen page pokemen page pokemen page 1', pokemonDetails);
  return (
    <div>
      <div>My pokemon details: </div>
      <div>
        <Image  
            width={250} 
            height={250} 
            alt={pokemonDetails.name + 'artwork'} 
            priority={true} 
            src={imgUrl}
            className='pokemon-detail-page-image'
        /> 
      </div>
      
      <div><strong>Name: </strong>{pokemonDetails.name}</div>
      <div><strong>Type: </strong>{pokemonTypes}</div>
      <div><strong>Stats: </strong>{pokemonStats}</div>
      {/* <div><strong>Abilities: </strong>{pokemonAbilities}</div> */}
      <div><strong>Some Moves: </strong>{pokemonMoves}</div>
    </div>
    
  )
}
