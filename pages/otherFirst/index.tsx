import React from 'react';
import {NextPage} from 'next';
import Link from 'next/link';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '@/hooks/storeHooks';
// import {State} from '../components/reducer';
// import {wrapper} from '@/store/store';

// export const getStaticProps = wrapper.getStaticProps(store => async ({previewData}) => {
//     store.dispatch({
//         type: 'PAGE',
//         payload: 'page message: here is the page ',
//     });
//     return {props: {}};
// });

type Repo = {
    name: string
    stargazers_count: number
  }
export const getServerSideProps = ( async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const repo: Repo = await res.json();
    return {props: {repo}};
});

const OtherFirst: NextPage = (props) => {
    console.log('Other Page Other Page Other Page', props);
    // const {message1} = useSelector(state => {
    const {message1} = useAppSelector(state => {
        // console.log('Other Page state', state);
       return state.usersSlice;
    });
    const dispatch = useDispatch();
    const bump = () => dispatch({type: 'BUMP'});
    return (
        <div className="other">
            <p>Using Next.js default prop in a wrapped component.</p>
            {/* <pre>{JSON.stringify({page}, null, 2)}</pre> */}
            <nav>
                <button onClick={bump}>bump</button>
                <div>{message1}</div>
                <div>
                    <Link href="/otherSecond">Navigate to other second</Link>
                </div>
            </nav>
        </div>
    );
};

export default OtherFirst;