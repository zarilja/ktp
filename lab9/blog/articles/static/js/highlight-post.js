$(document).ready(function(){
 $('.archive img').hover(function(event){
 console.log("Навели");
 }, function(event){
 console.log("Вывели");
 });
});

$(document).ready(function()
{
 $('.one-post').hover(function(event)
 {
 $(event.currentTarget).find('.one-post-shadow').animate({opacity:
'0.1'}, 300);
 }, function(event)
 {
$(event.currentTarget).find('.one-post-shadow').animate({opacity: '0'},
300);
 })
});

$(document).ready(function()
{
 $('.archive img').hover(function(event)
 {
 $(event.currentTarget).animate({width:
'338px'}, 300);
 }, function(event)
 {
$(event.currentTarget).animate({width: '318px'},
300);
 })
});
	 



