import { useState } from 'react';
import './App.css';
import Goals from './components/Goals';
import Target from './components/Target';
import Founders from './components/Founders';
import Content from './components/Content';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h2>Esta es una prueba</h2>
			<div>
				<Nav />
			</div>
			<div>
				<Header />
			</div>
			<div className="card">
				<Target />
			</div>
			<div className="card">
				<Goals />
			</div>
			<div className="card">
				<Founders />
			</div>
			<div className="card">
				<Content />
			</div>
			<div className="card">
				<Footer />
			</div>

			<p className="read-the-docs">
				Te gusta lo que ves?
			</p>
		</>
	);
};

export default App;