import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._loadingTimeout = setTimeout(_ => {
      this._loadingTimeout = null;
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
  },

  willDestroyElement() {
    if (this._loadingTimeout) {
      clearTimeout(this._loadingTimeout);
    }
  }
});
