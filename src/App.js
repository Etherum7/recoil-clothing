import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/shop/hats" component={()=>(<h1>HATS PAGE</h1>)} />
			</Switch>
		</div>
	);
}

export default App;
