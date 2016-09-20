import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home-page', {path: "/"});

  this.route('my-blog');
});

export default Router;
