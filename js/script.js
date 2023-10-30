
$('button').click(function (e) { 
  let email = $('#email').val();
  if(isEmail(email) == false){
    $('.error').removeClass('hidden');
    $('.error-text').removeClass('hidden');
  } else {
    $('.error').addClass('hidden');
    $('.error-text').addClass('hidden');
  }
});


function isEmail(mail){
  var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if(!regex.test(mail)){
    return false
  } else {
    return true
  }
}