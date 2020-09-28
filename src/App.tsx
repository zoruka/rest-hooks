import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/footer';
import NavigationBar from './components/navigation-bar';
import { RouterPaths } from './utils/constants';

const AppElement = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	min-height: 100vh;
	padding-bottom: 60px;
`;

const App = (): JSX.Element => {
	return (
		<AppElement>
			<Router>
				<NavigationBar />

				<Switch>
					<Route component={RouterPaths.GetPage.component} path={RouterPaths.GetPage.path} />
					<Route component={RouterPaths.HomePage.component} path={RouterPaths.HomePage.path} />:
				</Switch>
			</Router>

			<Footer />
		</AppElement>
	);
}

export default App;
