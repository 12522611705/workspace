
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from 'react-router-dom';

// redux
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { routeReducer } from 'redux-simple-router';
import reducers from './reducers';

import { Ajax } from './utils/global';
import { config } from './utils/config';

import App from './App';
import Home from './routers/Home';
import Login from './routers/Login';
import Reg from './routers/Reg';
import Product from './routers/Product';
import Infomation from './routers/Infomation';
import Join from './routers/Join';
import Help from './routers/Help';

import './css/index.css';
import './css/iconfont/iconfont.css';
// import registerServiceWorker from './registerServiceWorker';

// 用户信息，路由信息
const reducer = combineReducers(Object.assign({}, reducers, {
	routing: routeReducer
}));

// Store
const store = createStore(reducer);

ReactDOM.render((
	<Provider store={store}>
		<HashRouter>
			<Switch>
				<Route exact path="/" component={App}/>
				<Route path="/login.html" component={Login}/>
				<Route path="/reg.html" component={Reg}/>
				<Route path="/product.html" component={Product}/>
				<Route path="/infomation.html" component={Infomation}/>
				<Route path="/join.html" component={Join}/>
				<Route path="/help.html" component={Help}/>
			</Switch>
		</HashRouter>
	</Provider>
), document.getElementById('root'));

// registerServiceWorker();
