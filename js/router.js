import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import HomeComponent from './views/homeView';
import DetailComponent from './views/detailspage';
import AddComponent from './views/addView';
import EditComponent from './views/editView';
import SpinnerComponent from './views/spinner';
import PicList from './views/homeView';
import PreviewPic from './views/details';

import allPics from './modules/allPics';
import picModel from './modules/picModel';


export default Backbone.Router.extend({



  routes: {
        "" : "showHomeView",
    "details/:id" : "showDetails",
    "addView"    : "showAddView",
    "editView"   : "showEditView",
    "pic/:id"   : "showPic"

  },

  initialize(appElement) {
    this.el =appElement;
    this.model = new picModel();
    this.photos = new allPics();
    this.router = this;

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


  showHomeView() {

    
    
    this.photos.fetch().then(() => {
      this.render(
        <picList 
          onPicSelect={this.selectImage.bind(this)} 
          data={this.photos.toJSON()}
          onAddClick={() => this.goto('addView')}
          onEditClick={() => this.goto('editView')}/>
      );
    });
  },

    showEditView() {
    this.render(
      <EditComponent
      onHomeClick={() => this.goto('')}
      onDetailClick={() => this.goto('details')}
      onEditClick={() => this.goto('editView')}
      onAddClick={() => this.goto('addView')}/>
      
    );
  },

    showAddView() {
    this.render(
      <AddComponent
      onHomeClick={() => this.goto('')}
      onEditClick={() => this.goto('editView')}
      onAddClick={() => this.goto('addView')}
      onSubmitClick={() => this.goto('')}/>
    );

    $('#submit').click(function() {
      var newPic = new picModel ({
        name: $('#name').val(),
        info: $('#info').val(),
        picURL: $('#picURL').val(),
        address: $('#address').val(),
      });
      newPic.save();
    });
  },

    selectPic(id) {
    let pic = this.pics.toJSON().find(item => item.objectId === id);
    this.navigate('pics/' + id, {trigger: true});

    this.render(
        <Detailspage
          onHomeClick={() => this.goto('')}
          onPicSelect={this.selectPic.bind(this)} 
          onAddClick={() => this.goto('addView')}
          onEditClick={() => this.goto('editView')}
          src={image.photoURL}
          imageName={image.name}
          picAbout={image.ipsum}
          imageAddress={image.address}/>
      )
  },
  showPic(id) {
    let image = this.pics.toJSON().find(item => item.objectId === id);

    ReactDom.render(<Picture src={pic.photoURL}/>, this.el);
  },



  showSpinner () {
    ReactDom.render(<SpinnerComponent/>);
  },


  start: function (){
    Backbone.history.start();
  }
});

export default Router;



  //showHome

  //show Detail

  //show Add
  //show Edit



