
let lastScrollTop = 0

window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
       console.log('Scrolling down...', st);
   } else {
      console.log('Scrolling up...', st);
   }
   lastScrollTop = st <= 0 ? 0 : st; 
}, false);
