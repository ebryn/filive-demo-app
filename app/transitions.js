export default function(){
  this.transition(
    // this.fromRoute('videos'),
    // this.toRoute('video'),
    this.childOf('body'),
    this.use('explode', {
      matchBy: 'data-video-id',
      use: ['fly-to', { duration: 300, easing: 'spring'}]
    }),
    this.debug()
  );
};