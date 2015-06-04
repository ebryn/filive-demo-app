import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'demo-app/tests/helpers/start-app';

var application;

module('Acceptance | videos', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('visiting / and clicking a video', function(assert) {
  visit('/');
  click(".video-thumb:eq(0)");

  andThen(function() {
    assert.equal(currentURL(), '/video/RgKAFK5djSk');
  });
});
