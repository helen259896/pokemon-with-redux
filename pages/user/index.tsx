import React from "react";
import {GetStaticPaths, InferGetStaticPropsType, NextPage} from "next";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter, tick } from "@/store/action";
// import { usersSlice } from "@/store/usersSlice";
import {wrapper} from '@/store/store';
import {getUser, bump} from "@/store/action";



// const fetchData = async () =>
//   await axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((res) => ({
//       error: false,
//       users: res.data,
//     }))
//     .catch(() => ({
//       error: true,
//       users: null,
//     }));

interface user {
    address: Object;
    company: Object;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
  }

interface UserProps {
    users: user[];
    foo: string;
};

async  function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response) {
        throw Error('Response status: fetch data error');
    }
    const json = await response.json();
    
    // console.log('fetch data is here', json);
    return json;
}
  
    

// const Users : NextPage<InferGetStaticPropsType<typeof getStaticProps>>  = ({users}: UserProps) => {
const Users : NextPage<InferGetStaticPropsType<typeof getStaticProps>>  = ({}) => {
//   console.log('here is the user page');
  // console.log('my user is here', props);
  const dispatch: any = useDispatch();
 
  const {counter, message, users} = useSelector((state: any) => {
    console.log('user 2222222 user 2222222 user 2222222',  state);
      return state.usersSlice?.usersSlice
});

  // console.log('user 2222222 user 2222222 user 2222222',  counter, users);
  
  return (
    <section>
      <header>
        <h1>USERS PAGE</h1>
        <h1>GLOBAL COUNTER: {counter}</h1>
        <div>{message}</div>
        <button onClick={() => dispatch(bump('update some message'))}>bump
        </button>
        <div>
            <button onClick={() => {
                dispatch(incrementCounter(counter));
                // dispatch(usersSlice.actions.incrementCounter(counter));
            } 
            }>
            Users Increment +
            </button>
        </div>
        {"  "}
        <div>
            <button onClick={() => dispatch(decrementCounter(counter))}>
            {/* <button onClick={() => dispatch(usersSlice.actions.decrementCounter(counter))}> */}
            Users Decrement -
            </button>
        </div>
        <br />
        
      </header>
      {/* {error && <div>There was an error.</div>} */}
      {users && (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
	const users = await fetchData();
  console.log('getServerSideProps', users);
  await store.dispatch(getUser(users));
  return {
        props: {},
      };
  // await store.dispatch(usersSlice.actions.getUser(users));
});

export default Users;
