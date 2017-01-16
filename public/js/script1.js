$(function(){
   $("#gender_error").hide();
   $("#email_error").hide();
   

   var error_gender = false;
   var error_email = false;
   
   $("#gender").focusout(function(){
       check_gender();
   }); 

   $("#email").focusout(function(){
       check_email();
   }); 

   function check_gender(){
       var gender_length = $("#gender").val().length;
       if (gender_length < 4){
            $("#gender_error").html("You must select a gender.");
            $("#gender_error").show();
            error_gender = true;
       }else{
            $("#gender_error").hide();
       } 

   }

   function check_email(){
       var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
       error_email = false;
 
       if(pattern.test($('#email').val())){
           $("#email_error").hide();


           var url = "http://depressionapp1.westeurope.cloudapp.azure.com/index.php/welcome1";
           var details1 = [$("#email").val(), 'email'];
           
          
           
            $.ajax({
               url: url,
               type: 'POST',
               async: false,
               data: {dataname: details1},               
               success: function(result){
                   if(result){
                      
                          $("#result1").append(result);              
                          error_email = true;
                          

                      }else{
                          $("#result1").empty();
                          


                      }            
                   
               }               

            });               
 
           

            
       }else{
            $("#email_error").html("Invalid email address.");
            $("#email_error").show();
            
            error_email = true;
       }
   }

   $("a#register2").click(function(event){
        $('a#register2').attr("href", "http://depressionapp1.westeurope.cloudapp.azure.com/welcome.html");


        

        error_gender = false;
        error_email = false;
         
       

        check_gender();
        check_email();
        

         
        if(error_gender == false && error_email == false){
            
            
            
            var details = [sessionStorage.getItem("username"),
                                    sessionStorage.getItem("password"),
                                    $("#gender").val(),
                                    $("#email").val()];
            
            
            var url = "http://depressionapp1.westeurope.cloudapp.azure.com/index.php/welcome1";
            
            $.ajax({
               url: url,
               type: 'POST',
               data: {dataname: details},               
               success: function(result){
                   

               }
                

               

            });
           
           


            
        }else{

           $('a#register2').removeAttr("href");

        }
        

        
       
   });
});

    
