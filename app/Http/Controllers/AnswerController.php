<?php

namespace App\Http\Controllers;
use App\Answer;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use DB;



class AnswerController extends Controller{

     public function createAnswer(){

          $answer = new Answer();
          $post->answer = $request['ans']; 
     }

     public function postInitialAnswers(Request $request){
         $data = $request->all();
         return response($data);
         /*$initialAnswers = serialize($ans);
         $answer = new Answer();
         $answer->answers = $initialAnswers;
         $request->user()->answers()->save($answer); 
         return redirect('/welcome2');*/
     }

     public function getInitialAnswers(Request $request){
         return view('initialAnswers');
     }

     

     public function postAnswers(Request $request){
        $data = $request->all();
        return response(var_dump($data));
     }

     public function getLevel1a(Request $request){
          
         return view('Level1a');
   }



}
?>