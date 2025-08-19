import React from 'react';
import {NextPage} from 'next';
import {useRouter} from 'next/navigation';
// import Title from '../../atoms/Title';
// import Text from '../../atoms/Text';
// import queryClient from '@/lib/queryClient';
// import { styled } from '@/stitches.config';
import classes from './NavBar.module.css';




const NavBar: NextPage= ({}) => {
    // console.log('PokemanCard', pokemon);
    const router = useRouter();
  const clickHandler = (path: string) => {
    router.push('/'+ path);
  }
  return (
      <div  className={classes.navbar}>
        <div>
           NavBar is here
          <button className={classes.home} onClick={() =>clickHandler('')}>
             home 
          </button> 
          <button className={classes.home} onClick={() =>clickHandler('user')}>
             user 
          </button> 
          <button className={classes.home} onClick={() =>clickHandler('pokemon')}>
             pokemon
          </button> 
        </div>
      </div>
    
  );
};

export default NavBar;
