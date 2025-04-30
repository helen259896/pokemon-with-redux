// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { notFound } from 'next/navigation';

// import 'server-only';
'use server'

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}

export async function getPokeMenList(offset:number, limit=30) {
  const res = await fetch( //pokemon?offset=20&limit=20",
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  );

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const {count, next, previous, results} = (await res.json());
  // console.log('getPokeMen', results);
  // const results = (await res.json());
  if (results.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    // notFound();
    return 'not found'
  }
  const resultMap = results.map((item: any) => ({
       name: item.name,
       url: item.url,
       imgAlt: item.name + ' artwork',
       imgUrl: `https://img.pokemondb.net/artwork/large//${item.name}.jpg`,
  }))

  return {count, next, previous, results: resultMap};
  // return results;
}

// export async function getPokeMenn(offset:number, limit=30) {
//   const res = await fetch( //pokemon?offset=20&limit=20",
//     `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
//   );

//   if (!res.ok) {
//     // Render the closest `error.js` Error Boundary
//     throw new Error('Something went wrong!');
//   }

//   const {count, next, previous, results} = (await res.json());
//   if (results.length === 0) {
//     // Render the closest `not-found.js` Error Boundary
//     notFound();
//   }
//   const resultMap = results.map((item: any) => ({
//        name: item.name,
//        url: item.url,
//        imgAlt: item.name + ' artwork',
//        imgUrl: `https://img.pokemondb.net/artwork/large//${item.name}.jpg`,
//   }))

//   return {count, next, previous, resultMap};
// }

export async function searchPokeMen(pokemonName: string) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  );

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    return null;
    // throw new Error('Something went wrong!');
  }

  const results = (await res.json());
  if (results.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    // notFound();
    return null;
  }
  // console.log('search pokeman', pokemonName);
  // console.log('search pokeman', results);
  return results;
}


export async function getAllPokeMen() {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon`,
  );

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }
  const {count} = (await res.json());

  const allResult = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${count}`,
  );
  const allPokemen = (await allResult.json());
  const pokemenList = allPokemen?.results.map((item: any) => item.name)
  return allPokemen;
}


export async  function fetchUserData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if(!response) {
      throw Error('Response status: fetch data error');
  }
  const json = await response.json();
  return json;
}