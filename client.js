var ReactDOM = require('react-dom');
var React = require('react');
var Redux = require('redux');
var Provider = require('react-redux').Provider;
var BrowserRouter = require('react-router-dom').BrowserRouter;
var App = require('./views/app.jsx');

var store = Redux.createStore((state) => state, window.PROPS);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document
);
