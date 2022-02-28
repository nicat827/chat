let btn = document.querySelector('.hide-chat');

let p = document.querySelector('.chat-main');

let header = document.querySelector('.chat-header');

let icon = document.querySelector('.icon-chat');

	btn.addEventListener("click", function (event) {
		event.preventDefault();
		p.classList.toggle("hidden");
		header.classList.toggle("hidden");
		icon.addEventListener("click", function(evt) {
			evt.preventDefault();
			p.classList.remove("hidden");
			header.classList.remove("hidden");


		});

	});

$(document).on('submit','#post-form', function(e) {
    e.preventDefault();

    $.ajax ({
      type:'POST',
      url:"/send",
      data:{
          message:$('#message').val(),
        	csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
      },
      success: function(data){
         //alert(data)
      }
    });
    document.getElementById('message').value = ''
  });
	

$(document).ready(function(){

setInterval(function(){
    $.ajax({
        type: 'GET',
        url : "/getMessages",
        success: function(response){
            //console.log(response);
            $("#messages-show").empty();
            
            
            for (var key in response.messages)
            {		
            		console.log(response.messages[key].date)
                var temp="<div class='container darker'><b>"+response.messages[key].value+"</p><span class='time-left'>"
                +response.messages[key].date+"</span></div>";
                $("#messages-show").append(temp);
            }
        },
        error: function(response){
            //alert('An error occured')
        }
    });
},1000);
})