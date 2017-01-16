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
</head>
<body>


   
<div data-role="header">
<h1>Depression App</h1>
</div>




<div data-role="content">
 <div class="ui-grid-a">
                <div class="ui-block-a">
<a href="#myPanel" data-role="button" data-icon="user" data-iconpos="right">Log in</a>
</div>
<div class="ui-block-b">
<a href="{{ route('welcome1a') }}" data-transition="pop" data-role="button" data-icon="edit" data-iconpos="right">Register</a>
</div>
</div>

</div>

<div data-display="reveal" data-theme ="b" data-role="panel"  id="myPanel">

<form action="{{ route('login') }}" method="post" data-ajax="false">
	
	<div >
  
    <label for="username">Username&nbsp;
    <input type="text" name="username" placeholder="Enter username" id="username "value=""></label> 
	
  </div>
  
  <div >
    <label for="password">Password&nbsp;
    <input type="text"  name="password" placeholder="Enter password" id="password "value=""></label> 
	
   </div> 
   
   <div class="ui-grid-a">
                <div class="ui-block-a">
<a href="" data-role="button" data-icon="arrow-l" data-rel="close" data-iconpos="left">Close</a>
</div>
                <div class="ui-block-b">
<button type="submit" data-icon="arrow-r" data-transition="pop" data-iconpos="right">Submit</button>
</div>
            </div>
  
   
   
  </form>


</div> 

  </div>
   
   
  



</body>
</html>


            


