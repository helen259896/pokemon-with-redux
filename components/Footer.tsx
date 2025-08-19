import React from 'react';
import {NextPage} from 'next';

// import Image from 'next/image';
// import Title from '../../atoms/Title';
// import Text from '../../atoms/Text';
// import Link from 'next/link';
// import queryClient from '@/lib/queryClient';
// import { styled } from '@/stitches.config';
import style from './Footer.module.css';




const Footer: NextPage= ({}) => {
    // console.log('PokemanCard', pokemon);
  return (
      <div  className={style.footer}>
        Footer is here
      </div>
    
  );
};

export default Footer;
