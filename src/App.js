import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Contact from './components/Contact';
import Post from './components/Post';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Navbar />
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                        <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
                        <Route path={process.env.PUBLIC_URL + '/search'} component={Search} />
                        <Route path='/contact' component={Contact} />
                        <Route path={process.env.PUBLIC_URL + '/:post_id'} component={Post} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
