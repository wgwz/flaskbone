var app = app || {};

$(function () {
  'use strict';

  // kick things off by creating the `App`
  new app.BooksView({collection: app.books});
});