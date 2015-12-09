import Backbone from 'Backbone';

let PicModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/MyPeeps',

  idAttribute: 'objectId'

});

export default PicModel;