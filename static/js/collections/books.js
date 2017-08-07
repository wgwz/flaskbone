var app = app || {};

(function () {
  'use strict';

  app.Books = Backbone.Collection.extend({
    url: '/books',
    model: app.Book,
    parse: function(data){
      return data.books;
    }
  });
    
  app.books = new app.Books();

})();