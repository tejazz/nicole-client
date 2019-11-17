import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './app/pages/HomePage/HomePage';
import AuthPage from './app/pages/AuthPage/AuthPage';
import ProductListPage from './app/pages/ProductListPage/ProductListPage';
import SingleProductPage from './app/pages/SingleProductPage/SingleProductPage';
import AboutPage from './app/pages/AboutPage/AboutPage';
import ProfilePage from './app/pages/ProfilePage/ProfilePage';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductListPage} />
        <Route path="/product/:id" component={SingleProductPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/auth" component={AuthPage} />
        <Redirect from="/**" to="/" />
    </Switch>
);
