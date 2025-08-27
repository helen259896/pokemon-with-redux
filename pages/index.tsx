// import Image from "next/image";
// import { useState, useEffect } from 'react'
import { Geist, Geist_Mono } from "next/font/google";
// import { useSelector, useDispatch } from 'react-redux';
// import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { useAppDispatch} from '@/hooks/storeHooks';

import Link from 'next/link';
import { tickUp, tickDown } from '../store/action';
// import {pageSlice} from "@/store/numberReducer";
// import {usersSlice} from "@/store/usersSlice";
import {wrapper} from '@/store/store';
import Users from './user';
import OtherFirst from "./otherFirst";
import {fetchUserData} from '@/pages/api/route';
// import {RootState} from '@/store/store';
import {users} from '@/types';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


function Home({users} : users) {
  const dispatch = useAppDispatch();
  dispatch({type: 'UPDATE_USER', payload: users});
  const counter = users.length;
  // const counter = useAppSelector((state:RootState) => {
  //   console.log('home 1ß11', state);
  //   return state.numberSlice.anotherCounter;
  // });


  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>hello new app</div>
        <div>counter: {counter}</div>
        <Link href="/otherFirst">Navigate To OtherFirst Page</Link>
        <button onClick={() => {
          console.log('click the tick on home page');
          dispatch(tickUp(counter))
          }}>
          index Increment +
        </button> 
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button onClick={() => dispatch(tickDown(counter))}>
            index Decrement -
          </button>
        </div>
        <Users users={users}/>
        <OtherFirst />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}

// export const getStaticProps = wrapper.getStaticProps((store) => async ({req, res, ...etc}) => {
export const getStaticProps = wrapper.getStaticProps(() => async () => {
  const users = await fetchUserData();
  return {props: {users}}
  // return {props: {}}
});


export default Home
