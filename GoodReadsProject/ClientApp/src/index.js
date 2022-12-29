import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BookList } from './components/MyBookList';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { Info } from './components/Info';
import { Contacts } from './components/Contacts';
import { Register } from './components/RegisterForm';
import { Login } from './components/Login';
import { Auth } from './components/Auth';
import { AddBook } from './components/AddBook';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
        <App />
        <Route path='/myBookList' component={BookList} />
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/info' component={Info} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Auth} />
        <Route path="/auth" component={Auth} />
        <Route path="/addBook" component={AddBook} />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

