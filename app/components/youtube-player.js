/* globals YT */

import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._loadingTimeout = setTimeout(() => {
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
