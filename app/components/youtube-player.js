import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    setTimeout(_ => {
      this._player = new YT.Player(this.elementId + '-player', {
        height: '390',
        width: '640',
        videoId: this.videoId,
        events: {
          onReady: () => {
            this.set('isLoaded', true);
          },
          onStateChange: () => {
            debugger;
          }
        }
      });
    }, 500);
  }
});
