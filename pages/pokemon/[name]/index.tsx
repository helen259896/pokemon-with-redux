import { useRouter } from 'next/router';
import {useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import Image from 'next/image';

// import {searchPokeMen} from '../api/route';
import {pokemonDetail, clearPokemonDetail} from '@/store/action';
import {searchPokeMen, fetchUserData} from '@/pages/api/route';
import { GetServerSideProps } from 'next';
import {pokemonDetails} from '@/types';
import NotFound from './not-found';
import ErrorBoundary from '../error';
// type NoteIdProps = {
//   params: { name: string }
// }
type name = string;



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
  pokemon, users
}: {
  pokemon: pokemonDetails,
  users: any,
}) {
  const pokemonDetails = pokemon;
  const dispatch = useAppDispatch();
  
  if (!pokemonDetails) {
    //handle error
    return <ErrorBoundary />
    // return (
    //   <div><NotFound/></div>
    // );
  } 
  const imgUrl = pokemonDetails.sprites.other['official-artwork']?.front_default;
  const pokemonTypes = pokemonDetails.types.map((type: any) => type.type.name).join(', ');
  const pokemonStats = pokemonDetails.stats.slice(0, 7).map((stats: any) => stats.stat.name).join(', ')
  const pokemonAbilities = pokemonDetails.abilities.slice(0, 7).map((ability: any) => ability.ability.name).join(', ');
  const pokemonMoves = pokemonDetails.moves.slice(0, 7).map((move: any) => move.move.name).join(', ');
  
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
      <div><strong>Abilities: </strong>{pokemonAbilities}</div>
      <div><strong>Some Moves: </strong>{pokemonMoves}</div>
    </div>
    
  )
}
