import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let videos = this.modelFor('videos');
    return videos.items.findBy('id.videoId', params.videoId);
  }
});
