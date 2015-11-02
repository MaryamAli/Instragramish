import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import { HomeComponent,
DetailComponent,
AddComponent,
EditComponent,
SpinnerComponent} from './views';
import { allPics,
  picModel
} from './modules';

export default Backbone.Router.extend({



  routes: {
        "" : "showHomeView",
    "detailView/:id" : "showDetailView",
    "addView"    : "showAddView",
    "editView"   : "showEditView",
    "pic/:id"   : "showPic"

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
      onDetailClick={() => this.goto('detailView')}
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
    this.navigate('pic/' + id, {trigger: true});

    this.render(
        <DetailComponent
          onHomeClick={() => this.goto('')}
          onPicSelect={this.selectPic.bind(this)} 
          onAddClick={() => this.goto('add')}
          onEditClick={() => this.goto('edit')}
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



