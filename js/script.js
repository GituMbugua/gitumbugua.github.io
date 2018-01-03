var images = ['comp-blur.png', 'city-blur.jpg', 'office-blur.jpg'];
// $('body').css({'background-image': 'url(img/' + images[Math.floor(Math.random() *      images.length)] + ')'});


// word substitution
var length = $(".scroll-words").length;
var p = 0;
var u = 0;
while(u<10000) {
for(i=0;i<length;i++){
  $( ".scroll-list" ).animate({
    marginTop: "-"+(i*2)+".55em"
  }, 2000 );
  p = i+1;
}

if(p==length){
for(j=p-1;j>=0;j--){
  $( ".scroll-list" ).animate({
    marginTop: "-"+(j*2)+".55em"
  }, 2000 );
}
}
u++;
}

// end of word substitution