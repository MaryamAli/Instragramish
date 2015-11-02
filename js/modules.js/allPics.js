import Backbone from 'backbone';
import picModel from './picModel';

let PhotosCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/MyPeeps',

  model: picModel,

  parse: function(data) {
    return data.results;
  }

});

export default allPics;