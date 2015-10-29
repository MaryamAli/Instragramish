import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import HomeComponent from './views/homeView';
import DetailComponent from './views/detailView';
import AddComponent from './views/addView';
import EditComponent from './views/editView';
import SpinnerComponent from './views/spinner';

export default Backbone.Router.extend({



  routes: {
        "" : "showHomeView",
    "detailView" : "showDetailView",
    "addView"    : "showAddView",
    "editView"   : "showEditView"

  },

  initialize(appElement) {
    this.el =appElement;
  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },
//if you want to replace React.Dom on line 39
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

  //show Detail

  //show Add
  //show Edit



