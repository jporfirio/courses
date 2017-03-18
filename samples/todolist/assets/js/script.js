// toggle dashed class when clicked
$('ul').on('click', 'li', function(){
  $(this).toggleClass('dashed');
});
// fadeout and remove li when clicking span
$('ul').on('click', 'span', function(evt){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  evt.stopPropagation();
});
// insert new li when user presses enter
$('input[type="text"]').on('keypress', function(evt){
  if(evt.which == 13){
    $('#todos').append('<li><span><i class="fa fa-trash"></i></span>' + $(this).val() + '</li>');
    $(this).val('');
  }
});
// hide input on toggle plus icon
$('.fa-plus').click(function(){
  $('input').fadeToggle();
});
