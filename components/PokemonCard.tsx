import React, { FC } from 'react';
import Image from 'next/image';
// import Title from '../../atoms/Title';
// import Text from '../../atoms/Text';
import Link from 'next/link';
// import queryClient from '@/lib/queryClient';
// import { styled } from '@/stitches.config';
import {pokeman} from '@/types';
import style from './PokemonCard.module.css';




const PokemonCard: FC<pokeman> = ({pokemon}) => {
    // console.log('PokemanCard', pokemon);
    const path = '/pokemon/' + pokemon.name;
  return (
      <div key={pokemon.name} className={style.card}>
        <div className={style.card_image_with_link}>
          <Image  
              width={130} 
              height={130} 
              alt={pokemon.imgAlt} 
              priority={true} 
              src={pokemon.imgUrl}
              className={style.cardImage}
            />
            <Link href={path} className={style.cardLink}>{pokemon.name}</Link>
        </div>
      </div>
    
  );
};

export default PokemonCard;
