var app = app || {};

(function () {
  'use strict';

  app.Book = Backbone.Model.extend({
    defaults: {
      title: '',
      author: ''
    }
  });

})();