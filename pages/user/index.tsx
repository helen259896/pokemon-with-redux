import React, {useEffect} from "react";
import {InferGetStaticPropsType, GetStaticProps} from "next";
import { useAppSelector, useAppDispatch} from '@/hooks/storeHooks';
// import {  } from '@/hooks/storeHooks';
import {fetchUserData} from '@/pages/api/route';

// import axios from "axios";
// import {useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "@/store/action";
import {users, user} from '@/types';
// import { usersSlice } from "@/store/usersSlice";
// import {wrapper} from '@/store/store';
import { bump} from "@/store/action";



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



// interface UserProps {
//     users: user[];
//     foo: string;
// };

// async  function fetchData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if(!response) {
//         throw Error('Response status: fetch data error');
//     }
//     const json = await response.json();
    
//     // console.log('fetch data is here', json);
//     return json;
// }
  
    

// const Users : NextPage<InferGetStaticPropsType<typeof getStaticProps>>  = ({users}: UserProps) => {
function Users ({users} : users) : React.ReactElement<InferGetStaticPropsType<GetStaticProps>> {
  // console.log('here is the user page', users);
  const dispatch = useAppDispatch();

  
  // dispatch({type: 'UPDATE_USER', payload: users});

  useEffect(() => {
    async function fetchMyUser() {
      const usersRepList = await fetchUserData();
      dispatch({type: 'UPDATE_USER', payload: usersRepList});
      console.log('my user is here in fetch function', usersRepList);
    }

    if (!users) {
      fetchMyUser();
    } 

    }, [users, dispatch])
    
  const {counter, message} = useAppSelector((state) => {
          console.log('user 2222222 user 2222222 user 2222222',  state);
          return state.usersSlice
        });
  const mylist = useAppSelector((state) => {
    return state.usersSlice.users
  })
  const  userList = users || mylist;
  
    

  console.log('user 2222222 user 333333333 user 3333333333',  userList);
  
  return (
    <section>
      <header>
        <h1>USERS PAGE</h1>
        <h1>GLOBAL COUNTER: {counter}</h1>
        <div>{message}</div>
        {/* <div>{users?.length}</div> */}
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
      {!userList && (<div>Users is not loaded</div>)}
      {userList && (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user : user, index : number) => (
              <tr key={index}>
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

//should not dispatch action from getServerSidePorps. Instead pass data as props and initiate dispatch action inside the component
// export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
// 	//be able to fetch multiple data here and pass as props
//   //after app start, then dispatch action to initiate redux store.
//   const users = await fetchData();
//   console.log('getServerSideProps', users);
//   return {
//         props: {users},
//       };
// });

// export default Users;
export default Users;