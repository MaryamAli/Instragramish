import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import PicList from './views/home';
import DetailComponent from './views/detailspage';
import AddComponent from './views/add';
import EditComponent from './views/edit';
import SpinnerComponent from './views/spinner';
import SmallPic from './views/details';
import AllPics from './allPics.js';
import PicModel from './newPicModel.js';


export default Backbone.Router.extend({



  routes: {
        "" : "home",
    "pics/:id" : "showDetails",
    "addView"    : "showAdd",
    "editView"   : "showEdit",
    "images/:id"   : "showImage"

  },

  initialize: function(appElement) {
    this.el = appElement;

    // this.model = new PicModel();
    this.photos = new AllPics();
    this.router = this;

  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

//if you want to replace React.Dom on line 39
  render(component) {
    ReactDom.render(component, this.el);
  },

//see comment above


  home() {

    
    
    this.photos.fetch().then(() => {
      this.render(
        <PicList 
          onPicSelect={this.selectPic.bind(this)} 
          data={this.photos.toJSON()}
          onAddClick={() => this.goto('add')}
          onEditClick={() => this.goto('edit')}/>
      );
    });
  },

    showEditView() {
    this.render(
      <EditComponent
      onHomeClick={() => this.goto('')}
      onDetailClick={() => this.goto('details')}
      onEditClick={() => this.goto('edit')}
      onAddClick={() => this.goto('add')}/>
      
    );
  },

    showAddView() {
    this.render(
      <AddComponent
      onHomeClick={() => this.goto('')}
      onEditClick={() => this.goto('edit')}
      onAddClick={() => this.goto('add')}
      onSubmitClick={() => this.goto('')}/>
    );

    $('#submit').click(function() {
      var newPic = new PicModel ({
        name: $('#name').val(),
        info: $('#info').val(),
        picURL: $('#picURL').val(),
        address: $('#address').val(),
      });
      newPic.save();
    });
  },

    selectPic(id) {
    let pic = this.photos.toJSON().find(item => item.objectId === id);
    this.navigate('pics/' + id, {trigger: true});

    this.render(
        <Detailspage
          onHomeClick={() => this.goto('')}
          onPicSelect={this.selectPic.bind(this)} 
          onAddClick={() => this.goto('add')}
          onEditClick={() => this.goto('edit')}
          src={pic.photoURL}
          imageName={pic.name}
          picAbout={pic.ipsum}
          imageAddress={pic.address}/>
      )
  },
  showPic(id) {
    let image = this.photos.toJSON().find(item => item.objectId === id);

    ReactDom.render(<PreviewImage src={pic.photoURL}/>, this.el);
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



