import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { DataProvider } from './GlobalState';
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
				<DataProvider>
					<Routes>
						<Route path="/" element={<PrincipalLayout/>}>
							<Route index element={<Home/>}/>
							<Route path='about' element={<About/>}/>
							<Route path='sites' element={<Places/>}/>
							<Route path='reviews' element={<Reviews/>}/>
						</Route>
					</Routes>
				</DataProvider>
			</BrowserRouter>
		</>
	);
};

export default App;