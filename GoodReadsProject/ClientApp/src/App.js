import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
////Icons
//import 'font-awesome/css/font-awesome.min.css';
//import { library } from '@fortawesome/fontawesome-svg-core';
//import {
//    faHeart,
//    faPlus,
//    faInfo,
//    faPhone,
//} from '@fortawesome/free-solid-svg-icons'
//library.add(faHeart)
//library.add(faPlus)
//library.add(faInfo)
//library.add(faPhone)

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
            </Layout>
        );
    };

}
