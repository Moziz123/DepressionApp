@extends('layouts.master')

@section('title')
   Register!
@endsection

@section('content')

@includes('includes.header')

@section('title')
   Register!
@endsection

<div data-role="page" id="page1">
<div data-role="main" class="ui-content">
<form method="post" action="" data-ajax="false">

<label for="firstname">Firstname : <span>*</span></label>
<input type="text" name="firstname" id="firstname" placeholder="Enter firstname">

<label for="lastname">Lastname : <span>*</span></label>
<input type="text" name="lastname" id="lastname" placeholder="Enter lastname">

<fieldset data-role="controlgroup">
<legend>Gender:</legend>
<label for="male">Male</label>
<input type="radio" name="gender" id="male" value="male">
<label for="female">Female</label>
<input type="radio" name="gender" id="female" value="female">
</fieldset>

<label for="email">Email: <span>*</span></label>
<input type="email" id="email" name="email" placeholder="Email">

<div class="ui-grid-a">
                <div class="ui-block-a">
<a href="welcome.blade.php" data-role="button" data-icon="arrow-l" data-iconpos="left">Back</a>
</div>
                <div class="ui-block-b">
<a href="#step2" data-role="button" data-icon="arrow-r"  data-iconpos="right">Next</a>
</div>
            </div>
</form>
</div>
</div>
@endsection
