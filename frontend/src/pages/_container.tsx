import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useStateContext } from '../context/ContextProvider';

const Container = ({ Component, pageProps }: AppProps) => {
	const [loaded, setLoaded] = useState(false);
	const context = useStateContext();

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (sessionStorage.getItem('user')) {
				const data = JSON.parse(sessionStorage.getItem('user'))
				context?.saveUserSession(data);
			}
			setLoaded(true)
		}
	}, [])

	if (!loaded) return <div></div>
	return (
		<div>
			<Component {...pageProps} />
		</div>
	);
};

export default Container