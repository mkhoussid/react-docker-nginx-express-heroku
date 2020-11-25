import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';

import Container from '@material-ui/core/Container';

const App = () => {
	return (
		<Container maxWidth='lg'>
			<Switch>
				<Route exact path={'/'} component={Home} />
				<Route exact path={'/login'} component={Login} />
				<Route exact path={'/contact'} component={Contact} />
			</Switch>
		</Container>
	);
};

export default App;
