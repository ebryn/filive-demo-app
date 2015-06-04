export default function(){
  this.transition(
    // this.fromRoute('videos'),
    // this.toRoute('video'),
    this.use('explode-from-parent', {
      matchBy: 'data-video-id',
      parentSelector: '.layout',
      childSelector: '.sidebar [data-video-id]',
      use: ['fly-to', { duration: 300, easing: 'spring'}]
    }),
    this.debug()
  );
};