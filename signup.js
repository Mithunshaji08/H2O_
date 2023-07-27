document.addEventListener("DOMContentLoaded", function(event) {
  var spanElement = document.querySelector('.fade-in');
  spanElement.classList.add('fade-in-active');
});


function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    event.currentTarget
}

function checkemail()
{
  var email = document.getElementsByName('email')[0].value;
  if(email)
  {
    $.ajax({
      type: 'post',
      url: 'signup_php.php',
      data: {
       user_email:email,
      },
      success: function (response) {
       $( '#email_status' ).html(response);
       if(response=="OK")	
       {
        return true;	
       }
       else
       {
        return false;	
       }
      }
      }); 
  }
}