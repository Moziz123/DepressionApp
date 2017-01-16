<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Welcome</title>

    <!-- Bootstrap -->
    <link href="{{URL:: asset('css/bootstrap-cerulean.css') }}" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]><![endif]-->
	
      <script src="js/html5shiv.min.js"></script>
      <script src="js/respond.min.js"></script>
  </head>

  <body>	
<div class="panel panel-default">                  
    <div class="panel-body">
    @if ($errors->has())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

                     
    <form action="{{ route('register') }}" method="post">
        <div class="row">
		
            
             <div class="col-xs-12 col-sm-4"> 
                <div class="form-group {{ $errors->has('user_name') ? 'has-error' : '' }}">   
                <label for="username">Create username*&nbsp;
                <input type="text" class="form-control" name="username" placeholder="Username" value="{{ Request::old('user_name') }}"</label> 
                </div><!--End of form-group-->
            </div><!--End of col-xs-12 col-sm-4-->  
  
            <div class="col-xs-12 col-sm-4"> 
                <div class="form-group {{ $errors->has('password') ? 'has-error' : '' }}">
                <label for="password">Create password*&nbsp;
                <input type="password" class="form-control" name="password" placeholder="Password" value="{{ Request::old('password') }}"></label>
                </div><!--End of form-group-->
             </div><!--End of col-xs-12 col-sm-4-->  
  
                <div class="form-group {{ $errors->has('password_again') ? 'has-errorpwd
' : '' }}">
                <label for="password">Confirm password*
                <input type="password" class="form-control" name="passwordAgain" placeholder="Password" value="{{ Request::old('password_again') }}"></label>
                </div><!--End of form-group-->

                
            
                

            
	       <button id="btn" type="submit" class="btn btn-info btn-md">Done &nbsp;<span class="glyphicon glyphicon-thumbs-up">
                
        </div><!--End of row-->
<input type="hidden" name="_token" value="{{ Session::token() }}"> 
                
    </form>
    </div><!--End of panel-body-->
</div><!--End of panel panel-default--> 
</body>
</html>