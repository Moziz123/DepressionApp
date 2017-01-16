/*
<script>document.write("<div >"+$("#myFriends1").val()+"</div>");</script>

<script>
var myOptions = {
    val1 : sessionStorage.getItem("myActivities1"),
    val2 : sessionStorage.getItem("myActivities2"),
    val3 : sessionStorage.getItem("myActivities3"),
    val4 : sessionStorage.getItem("myActivities4"),
    val5 : sessionStorage.getItem("myActivities5")
};
var mySelect1 = $('#mySelect1');
$.each(myOptions, function(val, text) {
    mySelect1.append(
        $('<option></option>').val(val).html(text)
    );
});
</script>
<script>
function mySelect1(){
var a = document.getElementById("mySelect1");
sessionStorage.setItem("mySelect1", a.options[a.selectedIndex].text);
console.log(sessionStorage.getItem("mySelect1"));
}
</script>



<script>document.write(sessionStorage.myFriends2);</script>
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

function mySelect5(){
var a = document.getElementById("mySelect5");
sessionStorage.setItem("mySelect5", a.options[a.selectedIndex].text);
console.log(sessionStorage.getItem("mySelect5"));
//console.log(a.options[a.selectedIndex].text);
//alert(a.options[a.selectedIndex].text);
}
*/
function step5(){
document.write("<div >"+$("#myFriends1").val()+" > ");
document.write($("#mySelect1 option:selected").text()+"  </div>");
document.write("<div >"+$("#myFriends2").val()+" > ");
document.write($("#mySelect2 option:selected").text()+"  </div>");
document.write("<div >"+$("#myFriends3").val()+" > ");
document.write($("#mySelect3 option:selected").text()+"  </div>");
document.write("<div >"+$("#myFriends4").val()+" > ");
document.write($("#mySelect4 option:selected").text()+"  </div>");
document.write("<div >"+$("#myFriends5").val()+" > ");
document.write($("#mySelect5 option:selected").text()+"  </div>");
}

