
window.onfocus = () => {
    //video çalıştır
    vp=document.getElementById('video_html5_api');
    vp.play();
};
window.onblur = () => {
    //video durdur
    vp=document.getElementById('video_html5_api');
    vp.play();
};

vp=document.getElementById('video_html5_api');
console.log(vp);
vp.setAttribute('muted','true');
vp.setAttribute('autoplay','true');
var url=window.location.href;
if(url=='https://www.oba.gov.tr/egitim/oynatma/uzman-ogretmenlik-egitim-programi-semineri-meb-personeli-286') {
  var playList=document.getElementsByClassName("mdi mdi-check-circle progress-check-icon");
  url=url+'/'+(3736+parseInt(playList.length));
  console.log(url);
}
linkNo=url.substr(url.length-4,4);
var link='content_'+linkNo;
var sonrakiLink='content_'+(parseInt(linkNo)+1);
var icon='icon_'+linkNo;
console.log(icon);
console.log(document.getElementById(icon).className);
setInterval(() => {

  if(document.getElementsByClassName('vjs-remaining-time-display')[0].innerHTML=='-0:01') {
      document.getElementById(sonrakiLink).click();
  //  console.log(document.getElementsByClassName('vjs-remaining-time-display')[0].innerHTML);

  }
}, 1000);
