//About Page Transition
function expand(){
  $(this).toggleClass("on");
  $(".aboutContent").toggleClass("active");
};
$("#about").on('click', expand);

//Projects Page Transition
function expand(){
  $(this).toggleClass("on");
  $(".aboutContent").toggleClass("active");
};
$("#projects").on('click', expand);

//Contact Page Transition
function expand(){
  $(this).toggleClass("on");
  $(".aboutContent").toggleClass("active");
};
$("#contact").on('click', expand);

//Menu Transition
function expand(){
  $(this).toggleClass("on");
  $(".menu").toggleClass("active");
};
$(".button").on('click', expand);