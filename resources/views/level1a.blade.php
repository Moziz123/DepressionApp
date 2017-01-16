<!DOCTYPE html>
<html>
<head>
<title>Welcome</title>


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
$(document).on('pageinit', '#page5', function(){
	progress(60, $('#progressBar4'));
	});
</script>
>

<style>
    #progressBar4{
        width: 300px;
        height: 22px;
        border: 1px solid #111;
        background-color: #292929;
    }
    #progressBar4 div{
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
<div data-role="page" data-theme ="a" id="page5">
<div data-role="main" class="ui-content">
<div class="ui-grid-solo">
<div class="ui-block-a">
<div id="progressBar4"><div></div></div>
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
<form action="{{ route('register3') }}" method="post" data-ajax="false">
<h3>What three things would you like to get out of this app?</h3>
<label for="textarea-1"></label>
<textarea name="ans2" id="textarea-1" value="{{ Request::old('ans2') }}">

</textarea>
<div class="ui-grid-a">
                <div class="ui-block-a">
<a href="{{ URL::to('welcome2') }}" data-role="button" data-icon="arrow-l" data-iconpos="left" data-transition="pop">Back</a>
</div>
                <div class="ui-block-b">
<button type="submit" data-icon="arrow-r" data-iconpos="right" data-transition="pop">Next</button>
</div>
</div>
</div>
</div>

</body>
</html>