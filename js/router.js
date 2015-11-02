import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import HomeComponent from './views/homeView';
import DetailComponent from './views/detailView';
import AddComponent from './views/addView';
import EditComponent from './views/editView';
import SpinnerComponent from './views/spinner';
import { allPics,
  picModel
} from './modules.js';

export default Backbone.Router.extend({



  routes: {
        "" : "showHomeView",
    "detailView/:id" : "showDetailView",
    "addView"    : "showAddView",
    "editView/:id"   : "showEditView"

  },

  initialize(appElement) {
    this.el =appElement;
    this.model = new picModel();
    this.set = new allPics();

  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },
//if you want to replace React.Dom on line 39
render (component) {
  ReactDom.render(component, this.el);
},
//see comment above

show Detail(id) {
  let photo =this.set.get(id);
  this.render (
    <DetailComponent
    )
}

showHomeView() {
  this.showSpinner();
 
},


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



