import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import Home from './pages/Home.jsx';
import PrincipalLayout from './layouts/PrincipalLayout.jsx';
import About from './pages/About.jsx';
import Places from './pages/Places.jsx';
import Reviews from './pages/Reviews';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<PrincipalLayout/>}>
						<Route index element={<Home/>}/>
						<Route path='acerca-de' element={<About/>}/>
						<Route path='sitios' element={<Places/>}/>
						<Route path='resenas' element={<Reviews/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;