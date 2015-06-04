let duration = 500;

export default function(){
  this.transition(
    this.hasClass('video-player'),
    this.use('explode', {
      pick: 'img',
      use: ['to-and-from-sidebar', { duration }]
    }, {
      use: ['fade', { duration: duration/2 }]
    })
  );
}
