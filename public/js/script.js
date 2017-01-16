
$(function(){
   $("#username_error").hide();
   $("#password_error").hide();
   $("#password_confirmation_error").hide();

   var error_username = false;
   var error_password = false;
   var error_password_confirmation = false;
   

   $("#username").focusout(function(){
       check_username();
   }); 

   $("#password").focusout(function(){
       check_password();
   }); 
   
   $("#password_confirmation").focusout(function(){
       check_password_confirmation();
   }); 

   function check_username(){
       var username_length = $("#username").val().length;
       error_username = false;
       if (username_length < 6){
            $("#username_error").html("Username should be a minimum of 6 characters");
            $("#username_error").show();
            error_username = true;
       }else{
           $("#username_error").hide();

           var url = "http://depressionapp1.westeurope.cloudapp.azure.com/index.php/welcome1";
           var details = [$("#username").val(), 'username'];
           
          
           
            $.ajax({
               url: url,
               type: 'POST',
               async: false,
               data: {dataname: details},               
               success: function(result){
                   if(result){
                      $("#result").append(result);              
                      error_username  = true;

                  
                   }else{
                      $("#result").empty();
                      

                   }            
                   
               }               

            });                        
            
           
       }
    
 

   }

   function check_password(){
       var password_length = $("#password").val().length;
       if (password_length < 8){
            $("#password_error").html("Password should be a minimum of 8 characters");
            $("#password_error").show();
            error_password = true;
       }else{
            $("#password_error").hide();
       } 

   }

   function check_password_confirmation(){
       var password = $("#password").val();
       var password_confirmation = $("#password_confirmation").val();
       
       if (password != password_confirmation){
           $("#password_error_confirmation").html("Passwords don't match");
           $("#password_error_confirmation").show();
            error_password_confirmation = true;
       }else{
            $("#password_error_confirmation").hide();
       }
        
        

   }
   $('a#register1').click(function(){

        $('a#register1').attr("href", "http://depressionapp1.westeurope.cloudapp.azure.com/register.html#page3");
        error_username = false;
        error_password = false;
        error_password_confirmation = false; 
        


               
        check_username();
        check_password();
        check_password_confirmation();


        if(error_username == false && error_password == false && error_password_confirmation == false){ 
            sessionStorage.setItem("username", $("#username").val());
            sessionStorage.setItem("password", $("#password").val());
            sessionStorage.setItem("password_confirmation", $("#password_confirmation").val()); 
            
             
               
        }else{
            $('a#register1').removeAttr("href");
  
        }

        
       
    });
   
   
});
