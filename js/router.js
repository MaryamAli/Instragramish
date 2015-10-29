import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import HomeComponent from './views/home';
import FormComponent from './views/formplay';
import SpinnerComponent from './views/spinner';

export default Backbone.Router.extend({



  routes: {
        "" : "showHome",
    "form" : "showForm"

  },

  initialize(appElement) {
    this.el =appElement;
  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },
//if you want to replace React.Dom on line 39+46
// render (component) {
//   ReactDom.render(component, this.el);
// },
//see comment above
start() {
  Backbone.history.start();
  return this;
},

  showSpinner () {
    ReactDom.render(<SpinnerComponent/>);
  },

  //showHome

  //showForm