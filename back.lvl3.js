function hideAddressBar()
{
  if(!window.location.hash)
  {
      if(document.height < window.outerHeight)
      {
          document.body.style.height = (window.outerHeight + 50) + 'px';
      }

      setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
  }
}

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
console.log($("#myFriends1").val());
}

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
}

/*

<!-- <script>document.write("<div >"+sessionStorage.myFriends1+"</div>");</script> -->
<script>document.write("<div >"+$("#myFriends1").val()+"</div>");</script>

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
<script>
function mySelect1(){
var a = document.getElementById("mySelect1");
//var b = a.options[a.selectedIndex].text;
sessionStorage.setItem("mySelect1", a.options[a.selectedIndex].text);
console.log(sessionStorage.getItem("mySelect1"));
//console.log(a.options[a.selectedIndex].text);
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

