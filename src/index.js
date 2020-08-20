import React from 'react';
import ReactDOM from 'react-dom';

import { RecoilRoot } from 'recoil';
import RecoilLogger from 'recoil-logger'

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
		<RecoilLogger />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root')
);
