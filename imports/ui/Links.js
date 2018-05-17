import React, { Component } from 'react';
import {Links} from '../api/links';
import {Meteor} from 'meteor/meteor'
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader'
import AddLink from './AddLink'


export default () =>{

    return(
        <div>
         <PrivateHeader title="Short Links"/>
         <AddLink/>              
         <LinksList/>
        </div>
    );
}

