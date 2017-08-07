var app = app || {};

(function ($) {
  'use strict';

  app.BooksView = Backbone.View.extend({
    el: '#books',
    template: _.template($('#book-template').html()),
    initialize: function(){
      this.listenTo(this.collection, 'sync change', this.render);
      this.collection.fetch();
      this.render();
    },
    render: function(){
      this.$el.html(this.template({
        books: this.collection.toJSON()
      }))
    }
  });
    
})(jQuery);