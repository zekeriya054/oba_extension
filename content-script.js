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


console.log(url);
linkNo=url.substr(url.length-5,5);
var link='content_'+linkNo;
var sonrakiLink='content_'+(parseInt(linkNo)+1);
var icon='icon_'+linkNo;
console.log(icon);
console.log(sonrakiLink);

setInterval(() => {

  if(document.getElementsByClassName('vjs-remaining-time-display')[0].innerHTML=='-0:01') {
    setTimeout(()=>{document.getElementById(sonrakiLink).click();}, 3000)
      
    //console.log(document.getElementsByClassName('vjs-remaining-time-display')[0].innerHTML);

  }
}, 1000);
