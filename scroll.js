// document.getElementById('audio');
function scrollto(elem){
  audio.addEventListener('playing', function() {
    document.getElementById(elem).scrollIntoView({behavior: 'smooth'});
      
    });
}


