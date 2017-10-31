/*Week@ND Java-Script File
 *Author: Team Skyhook
 *script.js
 */

/*Open HTML Document in this Directory*/
$(function(){
  $("#trendingcarousel").load("libraries/tinycarousel/responsive/tinycarousel.html");
});
$(function(){
  $("#todaycarousel").load("libraries/tinycarousel/responsive/todaycarousel.html");  
});
$(function(){
  $("#artscarousel").load("libraries/tinycarousel/responsive/artscarousel.html");  
});
$(function(){
  $("#sportscarousel").load("libraries/tinycarousel/responsive/sportscarousel.html");  
});
$(function(){
  $("#faithcarousel").load("libraries/tinycarousel/responsive/faithcarousel.html");  
});
$(function(){
  $("#lecturescarousel").load("libraries/tinycarousel/responsive/lecturescarousel.html");  
});
$(function(){
  $("#educationcarousel").load("libraries/tinycarousel/responsive/educationcarousel.html");  
});
$(function(){
  $("#healthcarousel").load("libraries/tinycarousel/responsive/healthcarousel.html");  
});

/*SOCIAL MEDIA API's*/
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
 
 /*Disable Enter Button*/
 function stopRKey(evt) { 
  var evt = (evt) ? evt : ((event) ? event : null); 
  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
  if ((evt.keyCode == 13) && (node.type=="text"))  {return false;} 
} 
document.onkeypress = stopRKey; 

/*Dylans Magic Search*/
var searchStyle = document.getElementById('search_style');