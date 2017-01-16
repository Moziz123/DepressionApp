
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
   $("#ans4_error").hide();
 

   var error_ans1 = false;
   var error_ans2 = false;
   var error_ans3 = false;
   var error_ans4 = false;


   
   function check_ans1(){
       var ans1_length = $("#lvl2ans1").val().length;
       if (ans1_length < 1){
            $("#ans1_error").html("Please fill in the answer.");
            $("#ans1_error").show();
            error_ans1 = true;
       }else{
            $("#ans1_error").hide();
       } 

   }

   function check_ans2(){
       
       if ($("#MakePlans").is(':checked') || $("#SeekOutInformation").is(':checked') || $("#ApproachTheStessor").is(':checked') || $("#BalancedPerspective").is(':checked') || $("#SeekSocialSupport").is(':checked') || $("#SupressCompetingActivities").is(':checked')){
            $("#ans2_error").hide();            
       }else{
            $("#ans2_error").html("You must select a coping technique.");
            $("#ans2_error").show();
            error_ans2 = true;
       } 

   }

   function check_ans3(){
       
       if ($("#SeekSupport").is(':checked') || $("#PositiveReinterpretation").is(':checked') || $("#Acceptance").is(':checked') || $("#Religion").is(':checked') || $("#Humor").is(':checked') || $("#Meditation").is(':checked') || $("#Relaxation").is(':checked') || $("#Exercise").is(':checked')){
            $("#ans3_error").hide();            
       }else{
            $("#ans3_error").html("You must select a coping technique.");
            $("#ans3_error").show();
            error_ans3 = true;
       } 

   }

   function check_ans4(){
       
       if ($("#DenyEventHasHappened").is(':checked') || $("#DisengageMentally").is(':checked') || $("#BehaviorallyDisengage").is(':checked') || $("#FocusOnVentingOfEmotions").is(':checked') || $("#SubstanceUse").is(':checked')){
            $("#ans4_error").hide();            
       }else{
            $("#ans4_error").html("You must select a coping technique.");
            $("#ans4_error").show();
            error_ans4 = true;
       } 

   }


   $('a#lvl2Next').click(function(){
       if(sessionStorage.getItem('Lvl2ans1') != null){
               $("textarea#lvl2ans1").text(sessionStorage.getItem('Lvl2ans1'));
       }  
   });



   $('a#ans1btn').click(function(){
       $('a#ans1btn').attr("href", "http://depressionapp1.westeurope.cloudapp.azure.com/lvl2.html#step3");
       error_ans1 = false;
       check_ans1();
       if(error_ans1 == true){
           $('a#ans1btn').removeAttr("href");
       }else{
         var values = sessionStorage.getItem('Lvl2ans2').split(',');
         $.each(values, function(i, v){
             
         $(':input[type="checkbox"]').each( function(){
            if(v == $(this).attr('id')){
                $(this).attr('checked', true);            } 
         });
         
         });
         
       }
   });

   $('a#ans2btn').click(function(){
       $('a#ans2btn').attr("href", "http://depressionapp1.westeurope.cloudapp.azure.com/lvl2.html#step4");
       error_ans2 = false;
       check_ans2();
       if(error_ans2 == true){
           $('a#ans2btn').removeAttr("href");
       }
   });

   $('a#ans3btn').click(function(){
       $('a#ans3btn').attr("href", "http://depressionapp1.westeurope.cloudapp.azure.com/lvl2.html#step5");
       error_ans3 = false;
       check_ans3();
       if(error_ans3 == true){
           $('a#ans3btn').removeAttr("href");
       }
   });

  
   $('a#ans4btn').click(function(){
       $('a#ans4btn').attr("href", "http://depressionapp1.westeurope.cloudapp.azure.com/welcome.html");

       error_ans4 = false;
       check_ans4();
      

       if(error_ans4 == true){
           $('a#ans4btn').removeAttr("href");
       }else{
           var c = $('input:checked').map(function(){
        
               return $(this).val();
        
           });
           var c1 = c.get();
           var choices = c1.join();
           var a  = {'stressfulEvent': $("#lvl2ans1").val(), 'copingTechnique': choices}; 
           var answers = JSON.stringify(a);            
           var data = [answers, 2, sessionStorage.getItem('id'), sessionStorage.getItem('updated_at')];
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
