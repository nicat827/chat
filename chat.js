    $.ajax ({

      type:'POST',
      url:"/send",
      data:{
            message:$('#message').val(),
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
            

      },
      
      
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
            {	var date = response.messages[key].date;	
                var date_correct = date.slice(11,-8);
            	if (response.messages[key].value.length <= 100 && response.messages[key].value.trim() != '') {
                    var temp="<li class='container'>"+response.messages[key].value+"</li><div class='time-left'>"
                    +date_correct+"</div>";

                    $("#messages-show").append(temp);
                    

                }
                

            
                
            }
        },
        error: function(response){
            //alert(response)
        }
    });
},1000);
})
