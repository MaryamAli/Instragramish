import React from 'react';
import ReactDom from 'react-dom';
import Router from './router';
import './ajaxSetup';

let element = document.querySelector('.app');
var router= new Router(element);
router.start();

window.router=router;
console.log('Does this show up?');
// ReactDom.render(< ={}/>, document.querySelector('.app'));