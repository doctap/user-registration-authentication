import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageAuthentication from './components/pages/pageAuthentication/PageAuthentication';
import PageRegistration from './components/pages/pageRegistration/PageRegistration';
import NoPage from './components/pages/NoPage';
import PageHome from './components/pages/pageHome/PageHome';

function App() {



	return (
		<Routes>
			<Route>
				<Route path='/' element={<PageHome />} />
				<Route path='/authentication' element={<PageAuthentication />} />
				<Route path='/registration' element={<PageRegistration />} />
				<Route path='*' element={<NoPage />} />
			</Route>
		</Routes>
	);
}

export default App; 