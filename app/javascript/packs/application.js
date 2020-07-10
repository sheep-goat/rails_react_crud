/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../book/index';
import Create from "../book/create";
import Update from '../book/update'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div id="App">
                <Header />
                <Switch>
                    <Route exact path='/books' component={ Index }/>
                    <Route exact path='/books/create' component={ Create } />
                    <Route exact path='/books/update/:id' component={ Update } />
                </Switch>
            </div>
        </Router>
    );
}

const Header = () => (
    <div>
        <nav>
            <div className="nav-wrapper">
                <Link to="/books">Bookshelf</Link>
                <ul id="nav-mobile" className="right">
                    <li>
                        <Link to="/books/create">本の登録</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
)

export default App;

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.getElementById('example-app')
    )
})