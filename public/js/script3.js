
$(function(){

   $("nav .ui-grid-a ul li a").each(function () {
      var day = $(this).text().split(" ").pop();
      
 
      if(day == sessionStorage.getItem('day')){
         $(this).addClass("ui-btn-active"); 
      }
   });

   $("#ans1_error").hide();
   $("#ans2_error").hide();
   $("#ans3_error").hide();

   var error_ans1 = false;
   var error_ans2 = false;
   var error_ans3 = false;

   $("#ans1").focusout(function(){
       check_ans($("#ans1").val(), 'ans1');
   }); 

   $("#ans2").focusout(function(){
       check_ans($("#ans2").val(), 'ans2');
   }); 
   
   $("#ans3").focusout(function(){
       check_ans($("#ans3").val(), 'ans3');
   }); 

   function check_ans(a, b){
       var ans_length = a.length;
       if (ans_length < 1){
           $("#" + b + "_error").html("Please fill in the answer.");

            $("#" + b + "_error").show();
            eval("error_" + b + " = true");
           
            
       }else{
            $("#" + b + "_error").hide();
       } 

   }

   $('a#ans0btn').click(function(){
       if(sessionStorage.getItem('Lvl1ans1') != null){
               $("textarea#ans1").text(sessionStorage.getItem('Lvl1ans1'));
       }  
   });

   $('a#ans1btn').click(function(){
       $('a#ans1btn').attr("href", "http://depressionapp1.westeurope.cloudapp.azure.com/lvl1.html#step3");
       error_ans1 = false;
       check_ans($("#ans1").val(), 'ans1');
       if(error_ans1 == true){         
          $('a#ans1btn').removeAttr("href");
       }
       if(error_ans1 == false){           
            if(sessionStorage.getItem('Lvl1ans2') != null){
               $("textarea#ans2").text(sessionStorage.getItem('Lvl1ans2'));
            }        
       }
   });

   $('a#ans2btn').click(function(){
       $('a#ans2btn').attr("href", "http://depressionapp1.westeurope.cloudapp.azure.com/lvl1.html#step4");
       error_ans2 = false;
       check_ans($("#ans2").val(), 'ans2');
       if(error_ans2 == true){
           $('a#ans2btn').removeAttr("href");
       }
       if(error_ans2 == false){           
            if(sessionStorage.getItem('Lvl1ans3') != null){
               $("textarea#ans3").text(sessionStorage.getItem('Lvl1ans3'));
            }        
       }
   });

   $('a#ans3btn').click(function(){
       $('a#ans3btn').attr("href", "http://depressionapp1.westeurope.cloudapp.azure.com/welcome.html");
       error_ans3 = false;
       check_ans($("#ans3").val(), 'ans3');
       if(error_ans3 == true){
           $('a#ans3btn').removeAttr("href");
       }else{
           var a = {'ans1': $("#ans1").val(), 'ans2': $("#ans2").val(), 'ans3': $("#ans3").val()};
           var answers = JSON.stringify(a);
           var data = [answers, 1, sessionStorage.getItem('id'), sessionStorage.getItem('updated_at')];
           var url = "http://depressionapp1.westeurope.cloudapp.azure.com/index.php/welcome1a";
            
            $.ajax({
               url: url,
               type: 'POST',
               data: {dataname: data},               
               success: function(result){
                     console.log(result);

               }
                

               

            });        
           
           
       }
       
   });




   


   
   
   
});
