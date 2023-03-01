import React, { useEffect, useState } from 'react';
import { useStateContext } from '../context/ContextProvider';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Container = ({ Component, pageProps }) => {
	const [loaded, setLoaded] = useState(false);
	const ctx = useStateContext();

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user?.accessToken && typeof window !== "undefined") {
				if (sessionStorage.getItem('user')) {
					const data = JSON.parse(sessionStorage.getItem('user'));
					ctx?.setUserData({ 
						...data,
						accessToken: user.accessToken
					});
				}
			}
			setLoaded(true)
		});
		
	}, [])

	if (!loaded) return <div></div>
	return (
		<div>
			<Component {...pageProps} />
		</div>
	);
};

export default Container