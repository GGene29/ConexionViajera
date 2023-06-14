import { useState } from 'react';
import './App.css';
import Goals from './components/Goals';
import Vision from './components/Vision';
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
			<div>
				<Nav />
				<Header />
			</div>			
			<div className="card">
				<Target />
			</div>
			<div className="card">
				<Goals />
			</div>
			<div className="card">
				<Vision />
			</div>
			<div className="card">
				<Founders />
			</div>
			<div className="card">
				<Content />
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path fill="#000000" fill-opacity="1" d="M0,160L80,186.7C160,213,320,267,480,266.7C640,267,800,213,960,197.3C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
			</svg>
			<div className="card">
				<Footer />
			</div>

		</>
	);
};

export default App;