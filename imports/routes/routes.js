import { Meteor } from 'meteor/meteor';
import React from 'react';
import Login from '../ui/Login';
import SignUp from '../ui/SignUp';
import NotFound from '../ui/NotFound';
import Link from '../ui/Links';
import { Route, Router, browserHistory } from 'react-router';

const OnEnterPublicPage = () => {

    if (Meteor.userId()) {
        browserHistory.replace('/links')
    }
}
const OnEnterPrivatePage = () => {

    if (!Meteor.userId()) {
        browserHistory.replace('/')
    }
}
const unAutenticatedPages = ['/', '/signup'];
const autenticatedPages = ['/links'];

export const onAuthChange = (isAutenticated) => {
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnAutenticatedPage = unAutenticatedPages.includes(pathname);
    const isAutenticatedPage = autenticatedPages.includes(pathname);

    if (isUnAutenticatedPage && isAutenticated) { //if user visits the unautenticated page and is logged in
        browserHistory.replace("/links")
    } else if (isAutenticatedPage && !isAutenticated) {  //if user visits the autenticated page and is not logged in
        browserHistory.replace('/')
    }
}
export const routes = (

    <Router history={browserHistory}>
        <Route path="/" component={Login} onEnter={OnEnterPublicPage} />
        <Route path="/links" component={Link} onEnter={OnEnterPrivatePage} />
        <Route path="/signup" component={SignUp} onEnter={OnEnterPublicPage} />
        <Route path="*" component={NotFound} />
    </Router>


)



