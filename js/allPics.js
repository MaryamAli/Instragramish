import Backbone from 'backbone';
import PicModel from './newPicModel';

let AllPics = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/MyPeeps',

  model: PicModel,

  parse: function(data) {
    return data.results;
  }

});

export default AllPics;