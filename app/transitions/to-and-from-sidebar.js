export default function toAndFromSidebar(opts={}) {
  let flyTo = this.lookup('fly-to');
  return Promise.all([
    // flyTo.call({
    //   oldElement: this.oldElement,
    //   newElement: matchingThumbnail(this.oldElement)
    // }, { duration: opts.duration, movingSide: 'old' }),
    flyTo.call({
      oldElement: matchingThumbnail(this.newElement),
      newElement: this.newElement
    }, { duration: opts.duration, movingSide: 'new' })
  ]);
}

function matchingThumbnail(image) {
  let videoId;
  if (image) {
    videoId = image.attr('data-video-id');
  }
  if (videoId) {
    return $(`.thumb[data-video-id=${videoId}]`);
  }
}
