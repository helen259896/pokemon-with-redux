import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { useSelector, useDispatch } from 'react-redux';
import {NextPage} from 'next';

import {Provider} from 'react-redux';
import {wrapper} from '@/store/store';
import './globals.scss';
// import NavBar from "@/components/NavBar";
// import Footer from '@/components/Footer';


const App: NextPage <AppProps> = ({ Component, pageProps }: AppProps) => {
	const {store, props} = wrapper.useWrappedStore(pageProps);

  return (
		<Provider store={store}>
			{/* <NavBar/> */}
			<Component {...props} />
			{/* <Footer/> */}
		</Provider>
	);
}

export default App;