
$(function(){
    
   
       
   
   $("#username_error1").hide();
   $("#password_error1").hide();
   

   var error_username = false;
   var error_password = false;
   

   $("#username1").focusout(function(){
       check_username1();
   }); 

   $("#password1").focusout(function(){
       check_password1();
   }); 
   
   
function check_username1(){
       var username_length = $("#username1").val().length;
       if (username_length < 6){
            $("#username_error1").html("Username should be a minimum of 6 characters");
            $("#username_error1").show();
            error_username = true;
       }else{
            $("#username_error1").hide();

            var url = "http://depressionapp1.westeurope.cloudapp.azure.com/index.php/welcome1";
            var details = [$("#username1").val(), 'username'];
           
          
           
            $.ajax({
               url: url,
               type: 'POST',
               async: false,
               data: {dataname: details},               
               success: function(result){
                   if(result){
                      $("#result").empty();                 
                   }else{
                     
                      $("#result").append("This username does not exist!");              
                      error_username  = true;


                   }            
                   
               }               

            });      
       } 

   }

   function check_password1(){
       var password_length = $("#password1").val().length;
       if (password_length < 8){
            $("#password_error1").html("Password should be a minimum of 8 characters");
            $("#password_error1").show();
            error_password = true;
       }else{
            $("#password_error1").hide();
       } 

   }

   
   


   $('a#login').click(function(){
        $('a#login').attr("href", "http://depressionapp1.westeurope.cloudapp.azure.com/lvl1.html");
        


        
        error_username = false;
        error_password = false;
       
               
        check_username1();
        check_password1();
        


        if(error_username == false && error_password == false){
           
            var details = [$("#username1").val(),$("#password1").val()];
            var answers = "";
            var level = "";
            
            
            var url = "http://depressionapp1.westeurope.cloudapp.azure.com/index.php/";
            
            $.ajax({
               url: url,
               type: 'POST',
               async: false,
               data: {dataname: details},               
               success: function(result){
                    sessionStorage.clear();
                    
                    //If login was not successful 
                    if(result[0] == 'no'){
                       $("#result").append('Your username and password do not match!');
                       $('a#login').removeAttr("href");
                    
                    //if login was successful   
                    }else if(result[0] == 'yes'){
                      sessionStorage.setItem('id',  result[1]);
                      level = result[2];
                      sessionStorage.setItem('day',  result[3]);
                      if(result[4] == 'yes'){
                        sessionStorage.setItem('updated_at',  result[7]);
                        answers = JSON.parse(result[6]);
                        switch(result[2]){
                           case 1:                                
                               sessionStorage.setItem('Lvl1ans1', answers.ans1);  
                               sessionStorage.setItem('Lvl1ans2', answers.ans2);
                               sessionStorage.setItem('Lvl1ans3', answers.ans3);
                           case 2:                                                              
                               sessionStorage.setItem('Lvl2ans1', answers.stressfulEvent);  
                               sessionStorage.setItem('Lvl2ans2', answers.copingTechnique);                             
                           case 3:
                               sessionStorage.setItem('activity1', answers.activity1); 
                               sessionStorage.setItem('activity2', answers.activity2);
                               sessionStorage.setItem('activity3', answers.activity3);
                               sessionStorage.setItem('activity4', answers.activity4); 
                               sessionStorage.setItem('activity5', answers.activity5);
                        }

                      }else{                         
                         sessionStorage.setItem('updated_at',  'noData');
                      }
                    } 
                }             

             });
            
                   
              


            $('a#login').attr("href", "http://depressionapp1.westeurope.cloudapp.azure.com/lvl" + level + ".html");

      

         



             
               
        }else{
           
           $('a#login').removeAttr("href");

 
        }
       
        


       
    });  
   
   
   
});
