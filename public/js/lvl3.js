$(function(){

   $("nav .ui-grid-a ul li a").each(function () {
      var day = $(this).text().split(" ").pop();
      
 
      if(day == sessionStorage.getItem('day')){
         $(this).addClass("ui-btn-active"); 
      }
   });

   $("#friend1_error").hide();
   $("#friend2_error").hide();
   $("#friend3_error").hide();
   $("#friend4_error").hide();
   $("#friend5_error").hide();
   
   $("#activity1_error").hide();
   $("#activity2_error").hide();
   $("#activity3_error").hide();
   $("#activity4_error").hide();
   $("#activity5_error").hide();
   
   $("#option1_error").hide();
   $("#option2_error").hide();
   $("#option3_error").hide();
   $("#option4_error").hide();
   $("#option5_error").hide();


   var error_friend1 = false;
   var error_friend2 = false;
   var error_friend3 = false;
   var error_friend4 = false;
   var error_friend5 = false;

   var error_activity1 = false;
   var error_activity2 = false;
   var error_activity3 = false;
   var error_activity4 = false;
   var error_activity5 = false;
   
   var error_option1 = false;
   var error_option2 = false;
   var error_option3 = false;
   var error_option4 = false;
   var error_option5 = false;

   function check_ans(a, b){
       var ans_length = a.length;
       if (ans_length < 1){
           var x = b.slice(0, -1);
           if(x == "friend"){
               $("#" + b + "_error").html("Please input a friend.");                
           }else if(x == "activity"){
               $("#" + b + "_error").html("Please input an activity."); 
           }else{
               $("#" + b + "_error").html("Please input an activity for your friend.");                
           }
           $("#" + b + "_error").show();
           eval("error_" + b + " = true");           
       }else{
           $("#" + b + "_error").hide();
       } 

   }

   $('a#ansbtn1').click(function(){
       if(sessionStorage.getItem('activity1') != null){
                               var data1 = sessionStorage.getItem('activity1');
                               var data2 = sessionStorage.getItem('activity2');
                               var data3 = sessionStorage.getItem('activity3');
                               var data4 = sessionStorage.getItem('activity4');
                               var data5 = sessionStorage.getItem('activity5');                             
                               
                               var index1 = data1.indexOf(" ");
                               var index2 = data2.indexOf(" ");
                               var index3 = data3.indexOf(" ");
                               var index4 = data4.indexOf(" ");
                               var index5 = data5.indexOf(" ");

                               var friend1 = data1.substr(0, index1);
                               var activity1 = data1.substr(index1 + 1);

                               var friend2 = data2.substr(0, index2);
                               var activity2 = data2.substr(index2 + 1);
                             
                               var friend3 = data3.substr(0, index3);
                               var activity3 = data3.substr(index3 + 1);
 
                               var friend4 = data4.substr(0, index4);
                               var activity4 = data4.substr(index4 + 1);
  
                               var friend5 = data5.substr(0, index5);
                               var activity5 = data5.substr(index5 + 1);                               

                               $('input#friend1').val(friend1); 
                               $('input#friend2').val(friend2);
                               $('input#friend3').val(friend3);
                               $('input#friend4').val(friend4);
                               $('input#friend5').val(friend5);

                               $('input#activity1').val(activity1); 
                               $('input#activity2').val(activity2);
                               $('input#activity3').val(activity3);
                               $('input#activity4').val(activity4);
                               $('input#activity5').val(activity5); 


               $("input#friend1").text(sessionStorage.getItem('Lvl3ans1'));
       }  
   });


   $('a#ansbtn2').click(function(){
       $('a#ansbtn2').attr("href", "http://depressionapp1.westeurope.cloudapp.azure.com/lvl3.html#step3");
       error_friend1 = false;
       error_friend2 = false;
       error_friend3 = false;
       error_friend4 = false;
       error_friend5 = false;

       check_ans($("#friend1").val(), 'friend1');
       check_ans($("#friend2").val(), 'friend2');
       check_ans($("#friend3").val(), 'friend3');
       check_ans($("#friend4").val(), 'friend4');
       check_ans($("#friend5").val(), 'friend5');
      

       if(error_friend1 == true || error_friend2 == true || error_friend3 == true || error_friend4 == true || error_friend5 == true){
           $('a#ansbtn2').removeAttr("href");
       }
   });

   $('a#ansbtn3').click(function(){
       $('a#ansbtn3').attr("href", "http://depressionapp1.westeurope.cloudapp.azure.com/lvl3.html#step4");
       error_activity1 = false;
       error_activity2 = false;
       error_activity3 = false;
       error_activity4 = false;
       error_activity5 = false;

       check_ans($("#activity1").val(), 'activity1');
       check_ans($("#activity2").val(), 'activity2');
       check_ans($("#activity3").val(), 'activity3');
       check_ans($("#activity4").val(), 'activity4');
       check_ans($("#activity5").val(), 'activity5');
      

       if(error_activity1 == true || error_activity2 == true || error_activity3 == true || error_activity4 == true || error_activity5 == true){
           $('a#ansbtn3').removeAttr("href");
       }
       if(error_activity1 == false && error_activity2 == false && error_activity3 == false && error_activity4 == false && error_activity5 == false){
           $("#f1").append($("#friend1").val());
           $("#f2").append($("#friend2").val());  
           $("#f3").append($("#friend3").val());
           $("#f4").append($("#friend4").val());  
           $("#f5").append($("#friend5").val());

           var myOptions = {
               v1 : $("#activity1").val(),
               v2 : $("#activity2").val(),
               v3 : $("#activity3").val(),
               v4 : $("#activity4").val(),
               v5 : $("#activity5").val()
           };
           var mySelect1 = $('#mySelect1');
           $.each(myOptions, function(key, val) {
              mySelect1.append($('<option></option>').val(key).html(val));
           });
           
           var mySelect2 = $('#mySelect2');
           $.each(myOptions, function(key, val) {
              mySelect2.append($('<option></option>').val(key).html(val));
           });
           
           var mySelect3 = $('#mySelect3');
           $.each(myOptions, function(key, val) {
              mySelect3.append($('<option></option>').val(key).html(val));
           });
       
           var mySelect4 = $('#mySelect4');
           $.each(myOptions, function(key, val) {
              mySelect4.append($('<option></option>').val(key).html(val));
           });
          
           var mySelect5 = $('#mySelect5');
           $.each(myOptions, function(key, val) {
              mySelect5.append($('<option></option>').val(key).html(val));
           });

           
       }
   });

   

   $('a#ansbtn4').click(function(){

       $('a#ansbtn4').attr("href", "http://depressionapp1.westeurope.cloudapp.azure.com/welcome.html");
       var a = $("#mySelect1 option:selected").text();
       var b = $("#mySelect2 option:selected").text();
       var c = $("#mySelect3 option:selected").text();
       var d = $("#mySelect4 option:selected").text();
       var e = $("#mySelect5 option:selected").text();
 
       error_option1 = false;
       error_option2 = false;
       error_option3 = false;
       error_option4 = false;
       error_option5 = false;

       check_ans(a, 'option1');
       check_ans(b, 'option2');
       check_ans(c, 'option3');
       check_ans(d, 'option4');
       check_ans(e, 'option5');

       if(error_option1 == true || error_option2 == true || error_option3 == true || error_option4 == true || error_option5 == true){
           $('a#ansbtn4').removeAttr("href");
       }else{
           var y = {'activity1' : $("#f1").text() + ' ' + a, 'activity2' : $("#f2").text() + ' ' + b, 'activity3' : $("#f3").text() + ' ' + c, 'activity4' : $("#f4").text() + ' ' + d, 'activity5' : $("#f5").text() + ' ' + e};
           var answers = JSON.stringify(y);
           var data = [answers, 3, sessionStorage.getItem('id'), sessionStorage.getItem('updated_at')];           
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
