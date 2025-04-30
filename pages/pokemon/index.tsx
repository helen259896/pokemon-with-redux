'use client'
import React, {useEffect} from 'react';
import { GetServerSideProps } from 'next';

import {NextPage} from 'next';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import {pokemonList, clearPokemonList} from '@/store/action';
// import {State} from '../components/reducer';
import {wrapper} from '@/store/store';
import type {Pokemon} from '@/types';
import {getPokeMenList, getAllPokeMen} from '../api/route';
import PokemonList from '@/components/Pokemonlist';
import s from './pokemon.module.css';


// const pokemonOffset = 5;

type Repo = {
    name: string
    stargazers_count: number
  }

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({params}) => {
//     // console.log('getServerSideProps from other second page', params);
//     // const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pokemonOffset}&limit=${pokemonOffset}`);
//     // const pokemon: Repo = await res.json();
//     const pokemon = await getPokeMenList(pokemonOffset, pokemonOffset);
//     // await store.dispatch(getPokemon(pokemon))
//     // await store.dispatch({type: 'GET_POKEMON', payload: pokemon})
//     return {props: {pokemon}};
// });
// export const getServerSideProps: GetServerSideProps = async (context) => {
    // const pokemon = await getPokeMenList(pokemonOffset, pokemonOffset);
//     console.log('getServerSideProps xxxxxxxxxxxxxxxx', context);
//     return {props: {}}
// }


const Pokemon: NextPage = () => {
    const dispatch = useAppDispatch();
    const pokemonOffset = useAppSelector(state => {
        // console.log('pokemen page pokemen page pokemen page 2', state);
        return state?.pokemonSlice?.offset;
    });
    
    useEffect(() => {
        const offset_in_localstorage  = Number(window.localStorage.getItem('offset'));
        // console.log('useEffect useEffect useEffect', offset_in_localstorage);
        (async () => {
            let pokemon = null;
            if(offset_in_localstorage > 0) {
                pokemon = await getPokeMenList(offset_in_localstorage, offset_in_localstorage) as Pokemon;
            }
             else {
                 pokemon = await getPokeMenList(pokemonOffset, pokemonOffset) as Pokemon;
                 window.localStorage.setItem('offset', pokemonOffset);
             }
             dispatch(pokemonList(pokemon));
                
          })();

         return () => {
            clearPokemonList();
             } 
      }, [])
    
    // const {count, results} = useAppSelector(state => {
    const {count, results}  = useAppSelector(state => {
        // console.log('pokemen page pokemen page pokemen page 1', state);
        return state?.pokemonSlice?.pokemon;
    });
    const changePokemonList = async (offset: number) => {
        const pokemon_more = await getPokeMenList(offset, offset) as Pokemon;
        // console.log('getMorePokemon getMorePokemon getMorePokemon', pokemon_more);
        dispatch(pokemonList(pokemon_more))
        window.localStorage.setItem('offset', offset);
    }

    

    return (
        <div className={s.pokemon_page}>
             {/* <button onClick={() => dispatch(bump('update some message'))}> */}
             <div>show number of pokemon: {pokemonOffset}</div>
             <div className={s.pokemon_page_button}>
                <div>
                    <button 
                      className={s.show_more_pokemon}
                      onClick={() => changePokemonList(5)}
                      >
                        show 5 pokemon characters
                    </button>
                </div>
                <div>
                    <button 
                      className={s.show_more_pokemon}
                      onClick={() => changePokemonList(pokemonOffset+1)}
                      >
                        show more pokemon characters
                    </button>
                </div>
                <div>
                    <button
                      className={s.show_less_pokemon}
                      onClick={() => changePokemonList(pokemonOffset-1)}
                    >
                        show less pokemon characters
                    </button>
                </div>
                <div>
                    <button
                      className={s.show_all_pokemon}
                      onClick={() => changePokemonList(100)}
                    >
                        show 100 pokemon characters
                    </button>
                </div>
             </div>
            {results &&
                <div className={s.pokemon_list}>
                    <PokemonList pokemonlist={results} count={count}/>
                </div>
            }
            

        </div>
    );
};

export default Pokemon;