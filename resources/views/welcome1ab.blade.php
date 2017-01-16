<!DOCTYPE html>
<html>
<head>
<title>Welcome</title>
<meta http-equiv="Content-Type" content="text/html; chartset= UTF-8">

<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />

<script src="https://code.jquery.com/jquery-1.12.4.js"
integrity="sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU="
crossorigin="anonymous"></script>

<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"
integrity="sha256-DI6NdAhhFRnO2k51mumYeDShet3I8AKCQf/tf7ARNhI="
crossorigin="anonymous"></script>
  
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<meta name="viewport" content="width=device-width" />
<meta name="_token" content="{!! csrf_token() !!}"/>
<script type="text/javascript">
$(function(){
$.ajaxSetup({
    headers: {'X-CSRF-Token' : $('meta[name=_token]').attr('content')}
});
});
</script>

  <script>
      $(function(){
        $( "[data-role='header'], [data-role='footer']" ).toolbar();
      }); 
</script>

<script>
    function progress(percent, $element) {
        var progressBarWidth = percent * $element.width() / 100;
        $element.find('div').animate({ width: progressBarWidth }, 1000).html(percent + "% ");
    }
</script>
<script>
$(document).on('pageinit', '#page2', function(){
	progress(0, $('#progressBar'));});
</script>



<style>
    #progressBar{
        width: 300px;
        height: 22px;
        border: 1px solid #111;
        background-color: #292929;
    }
    #progressBar div{
        height: 100%;
        color: #fff;
        text-align: right;
        line-height: 22px; /* same as #progressBar height if we want text middle aligned */
        width: 0;
        background-color: #0099ff;
    }
    
</style>

</head>
<body>
 
   <div data-role="page" id="page2">
<div data-role="main" class="ui-content">

<div class="ui-grid-solo">
<div class="ui-block-a">
<div id="progressBar"><div></div></div>
</div>
</div>

<br>
@if(count($errors) > 0)
<div data-role="listview">
    <ul>
         @foreach($errors->all() as $error)
              <li>{{ $error }}</li>
         @endforeach
    </ul>
</div>
@endif



<form  id="register_form"action="{{ URL::to('welcome1ab') }}" method="post" data-ajax="false">


<label for="username">Username : <span></span></label>
<input type="text" name="username" id="username" placeholder="Enter username">

<label for="password">Create password : <span></span></label>
<input type="password" name="password" id="password" placeholder="Enter password">

<label for="passwordAgain">Confirm password : <span></span></label>
<input type="password" name="password_confirmation" id="password_confirmation" placeholder="Enter password again">

<div class="ui-grid-a">
                <div class="ui-block-a">
<a href="" data-role="button" data-icon="arrow-l" data-iconpos="left" data-transition="pop">Back</a>
</div>
                <div class="ui-block-b">
<button type="button" id="register" data-icon="arrow-r" data-iconpos="right" data-transition="pop">Next</button>
</div>
            </div>




</form>


</div>
</div>
<script type="text/javascript">
$(document).ready(function(){
   $('#register').on('click', function(){
       var register_form = $('#register_form').serializeArray();
       var url = $('#register_form').attr('action');
        
       $.post(url, register_form, function(data){
           
       });
   });
});
</script>
</body>
</html>
