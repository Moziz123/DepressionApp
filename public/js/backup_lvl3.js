<script>
      $(function(){
        $( "[data-role='header'], [data-role='footer']" ).toolbar();
      }); 
</script>
<script>
//$("#name_of_id").val()


$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrap         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID

	var wrapper         = $(".input_fields_wrapper"); //Fields wrapper
    var add_activities      = $(".add_activities"); //Add button ID
	
	var x = 0; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
           // $(wrap).append('<div><input type="text" name="myFriends[]"><a href="#" class="remove_field" data-role="button">Remove</a></div>'); //add input box
            $(wrap).append('<div class="ui-grid-a"><input class="ui-input-text ui-corner-all ui-shadow-inset friend" type="text" name="myFriends'+x+'" id="myFriends'+x+'" placeholder="Friend"><a href="#" style="float:right" class="remove_field ui-btn ui-corner-all ui-shadow">Delete</a></div>'); //add input box 

        }
    });
	
	var y = 0; //initlal text box count
    $(add_activities).click(function(e){ //on add input button click
        e.preventDefault();
        if(y < max_fields){ //max input box allowed
            y++; //text box increment
           // $(wrapper).append('<div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input type="text" name="myActivities[]"><a href="#" class="remove_field2" data-role="button">Remove</a></div>'); //add input box 
           // $(wrapper).append('<div data-inline="true"><input class="ui-input-text ui-corner-all ui-shadow-inset" type="text" name="myActivities[]"><a href="#" style="float:right" class="remove_field2 ui-btn">Delete</a></div>'); //add input box 
           // $(wrapper).append('<div class="ui-grid-a"><input style="width:60%" class="ui-input-text ui-corner-all ui-shadow-inset" type="text" name="myActivities[]"><a href="#" style="float:right" class="remove_field2 ui-btn ui-corner-all ui-shadow">Delete</a></div>'); //add input box 
// this is working don't touch  $(wrapper).append('<div class="ui-grid-a"><input class="ui-input-text ui-corner-all ui-shadow-inset" type="text" name="myActivities[]" placeholder="Activity"><a href="#" style="float:right" class="remove_field2 ui-btn ui-corner-all ui-shadow">Delete</a></div>'); //add input box 
            $(wrapper).append('<div class="ui-grid-a"><input class="ui-input-text ui-corner-all ui-shadow-inset" type="text" name="myActivities'+y+'" placeholder="Activity"><a href="#" style="float:right" class="remove_field2 ui-btn ui-corner-all ui-shadow">Delete</a></div>'); //add input box 
        }
    });
    
       
    $(wrap).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })

    $(wrapper).on("click",".remove_field2", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); y--;
    })
});

</script>
<script>
    function progress(percent, $element) {
        var progressBarWidth = percent * $element.width() / 100;
        $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "% ");
    }
</script>
<script>
$(document).on('pageinit', '#step1', function(){
        progress(0, $('#progressBar'));});
</script>

<script>
$(document).on('pageinit', '#step2', function(){
        progress(25, $('#progressBar2'));
        });
</script>
<script>
$(document).on('pageinit', '#step3', function(){
        progress(50, $('#progressBar3'));
        });
</script>
<script>
$(document).on('pageinit', '#step4', function(){
        progress(75, $('#progressBar4'));
        });
</script> 



<script>
function friends()
{
sessionStorage.removeItem("myFriends1");
sessionStorage.removeItem("myFriends2");
sessionStorage.removeItem("myFriends3");
sessionStorage.removeItem("myFriends4");
sessionStorage.removeItem("myFriends5");
var name1 = document.getElementById("myFriends1").value;
var name2 = document.getElementById("myFriends2").value;
var name3 = document.getElementById("myFriends3").value;
var name4 = document.getElementById("myFriends4").value;
var name5 = document.getElementById("myFriends5").value;
sessionStorage.setItem("myFriends1", name1 ); 
sessionStorage.setItem("myFriends2", name2 );
sessionStorage.setItem("myFriends3", name3 );
sessionStorage.setItem("myFriends4", name4 );
sessionStorage.setItem("myFriends5", name5 );
/* console.log(sessionStorage.getItem("myFriends1"));
console.log(sessionStorage.getItem("myFriends2"));
console.log(sessionStorage.getItem("myFriends3"));
console.log(sessionStorage.getItem("myFriends4"));
console.log(sessionStorage.getItem("myFriends5")); */


console.log($("#myFriends1").val());

}
</script>

<script>
function activities()
{
sessionStorage.removeItem("myActivities1");
sessionStorage.removeItem("myActivities2");
sessionStorage.removeItem("myActivities3");
sessionStorage.removeItem("myActivities4");
sessionStorage.removeItem("myActivities5");
var act1 = document.getElementById("myActivities1").value;
var act2 = document.getElementById("myActivities2").value;
var act3 = document.getElementById("myActivities3").value;
var act4 = document.getElementById("myActivities4").value;
var act5 = document.getElementById("myActivities5").value;
sessionStorage.setItem("myActivities1", act1 );
sessionStorage.setItem("myActivities2", act2 );
sessionStorage.setItem("myActivities3", act3 );
sessionStorage.setItem("myActivities4", act4 );
sessionStorage.setItem("myActivities5", act5 );
console.log(sessionStorage.getItem("myActivities1"));
console.log(sessionStorage.getItem("myActivities2"));
console.log(sessionStorage.getItem("myActivities3"));
console.log(sessionStorage.getItem("myActivities4"));
console.log(sessionStorage.getItem("myActivities5"));
}
</script>



<!-- <script>document.write("<div >"+sessionStorage.myFriends1+"</div>");</script> -->
<script>document.write("<div >"+$("#myFriends1").val()+"</div>");</script>

<div style="float:right">
<select id="mySelect1" onChange="mySelect1();"> <!--  onchange="sessionStorage.setItem("mySelect1",this.value)"> -->
<option></option>
<script>
var myOptions = {
    v1 : sessionStorage.getItem("myActivities1"),
    v2 : sessionStorage.getItem("myActivities2"),
    v3 : sessionStorage.getItem("myActivities3"),
    v4 : sessionStorage.getItem("myActivities4"),
    v5 : sessionStorage.getItem("myActivities5")
}; 
var mySelect1 = $('#mySelect1');
$.each(myOptions, function(val, text) {
    mySelect1.append(
        $('<option></option>').val(val).html(text)
    );
});
</script>
</select>  
<script>
function mySelect1(){
var a = document.getElementById("mySelect1");
//var b = a.options[a.selectedIndex].text;
sessionStorage.setItem("mySelect1", a.options[a.selectedIndex].text);
console.log(sessionStorage.getItem("mySelect1"));
//console.log(a.options[a.selectedIndex].text);
//alert(a.options[a.selectedIndex].text);
}
</script>



<script>document.write(sessionStorage.myFriends2);</script>
<select id="mySelect2" onChange="mySelect2();">
<option></option>
<script>
var myOptions = {
    val1 : sessionStorage.getItem("myActivities1"),
    val2 : sessionStorage.getItem("myActivities2"),
    val3 : sessionStorage.getItem("myActivities3"),
    val4 : sessionStorage.getItem("myActivities4"),
    val5 : sessionStorage.getItem("myActivities5")
};
var mySelect2 = $('#mySelect2');
$.each(myOptions, function(val, text) {
    mySelect2.append(
        $('<option></option>').val(val).html(text)
    );
});
</script>
</select>  
<script>
function mySelect2(){
var a = document.getElementById("mySelect2");
sessionStorage.setItem("mySelect2", a.options[a.selectedIndex].text);
console.log(sessionStorage.getItem("mySelect2"));
//console.log(a.options[a.selectedIndex].text);
//alert(a.options[a.selectedIndex].text);
}
</script>

<script>document.write(sessionStorage.myFriends3);</script>
<select id="mySelect3" onChange="mySelect3();">
<option></option>
<script>
var myOptions = {
    val1 : sessionStorage.getItem("myActivities1"),
    val2 : sessionStorage.getItem("myActivities2"),
    val3 : sessionStorage.getItem("myActivities3"),
    val4 : sessionStorage.getItem("myActivities4"),
    val5 : sessionStorage.getItem("myActivities5")
};
var mySelect3 = $('#mySelect3');
$.each(myOptions, function(val, text) {
    mySelect3.append(
        $('<option></option>').val(val).html(text)
    );
});
</script>
</select>  
<script>
function mySelect3(){
var a = document.getElementById("mySelect3");
sessionStorage.setItem("mySelect3", a.options[a.selectedIndex].text);
console.log(sessionStorage.getItem("mySelect3"));
//console.log(a.options[a.selectedIndex].text);
//alert(a.options[a.selectedIndex].text);
}
</script>

<script>document.write(sessionStorage.myFriends4);</script>

<select id="mySelect4" onChange="mySelect4();">
<option></option>
<script>
var myOptions = {
    val1 : sessionStorage.getItem("myActivities1"),
    val2 : sessionStorage.getItem("myActivities2"),
    val3 : sessionStorage.getItem("myActivities3"),
    val4 : sessionStorage.getItem("myActivities4"),
    val5 : sessionStorage.getItem("myActivities5")
};
var mySelect4 = $('#mySelect4');
$.each(myOptions, function(val, text) {
    mySelect4.append(
        $('<option></option>').val(val).html(text)
    );
});
</script>
</select>  
<script>
function mySelect4(){
var a = document.getElementById("mySelect4");
sessionStorage.setItem("mySelect4", a.options[a.selectedIndex].text);
console.log(sessionStorage.getItem("mySelect4"));
//console.log(a.options[a.selectedIndex].text);
//alert(a.options[a.selectedIndex].text);
}
</script>

<script>document.write(sessionStorage.myFriends5);</script>
<select id="mySelect5" onChange="mySelect5();">
<option></option>
<script>
var myOptions = {
    val1 : sessionStorage.getItem("myActivities1"),
    val2 : sessionStorage.getItem("myActivities2"),
    val3 : sessionStorage.getItem("myActivities3"),
    val4 : sessionStorage.getItem("myActivities4"),
    val5 : sessionStorage.getItem("myActivities5")
};
var mySelect5 = $('#mySelect5');
$.each(myOptions, function(val, text) {
    mySelect5.append(
        $('<option></option>').val(val).html(text)
    );
});
</script>
</select>  
<script>
function mySelect5(){
var a = document.getElementById("mySelect5");
sessionStorage.setItem("mySelect5", a.options[a.selectedIndex].text);
console.log(sessionStorage.getItem("mySelect5"));
//console.log(a.options[a.selectedIndex].text);
//alert(a.options[a.selectedIndex].text);
}
</script>

<script>document.write("<div >"+sessionStorage.myFriends1+"</div>");</script>
<script>document.write("<div >"+sessionStorage.mySelect1+"</div>");</script>
<script>document.write("<div >"+sessionStorage.myFriends2+"</div>");</script>
<script>document.write("<div >"+sessionStorage.mySelect2+"</div>");</script>
<script>document.write("<div >"+sessionStorage.myFriends3+"</div>");</script>
<script>document.write("<div >"+sessionStorage.mySelect3+"</div>");</script>
<script>document.write("<div >"+sessionStorage.myFriends4+"</div>");</script>
<script>document.write("<div >"+sessionStorage.mySelect4+"</div>");</script>
<script>document.write("<div >"+sessionStorage.myFriends5+"</div>");</script>
<script>document.write("<div >"+sessionStorage.mySelect5+"</div>");</script>
