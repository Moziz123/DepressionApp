<?php

namespace App\Http\Controllers;
use App\Answer;
use App\User;
use App\DateCompare;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Authenticable;
use DB;



class UserController extends Controller{

   public function getWelcome1ab(Request $request){
         
         return view('welcome1ab');
   }  

   public function getWelcome1a(Request $request){
         
         return view('welcome1a');
   } 
   
   public function getWelcome1(Request $request){
         
         return view('welcome1');
   }  
   public function getWelcome(Request $request){
         
         return view('welcome');
   } 

   public function getWelcome2(Request $request){
          
         return view('lvl1');
   }



   
  


   public function postRegister(Request $request){
   
       $data = $request->all();        
       $answers = serialize($data['dataname'][0]);      
       $answer = new Answer();
       $now = time();
       $timeNow = date("Y-m-d H:i:s", $now);

       if($data['dataname'][3] == 'noData'){
          $answer->user_id = $data['dataname'][2];       
          $answer->answers = $answers;
          $answer->level = $data['dataname'][1];             
          $answer->save();
       }else{
          Answer::where('level', $data['dataname'][1])->where('user_id', $data['dataname'][2])->where('updated_at', $data['dataname'][3])->update(['answers' => $answers, 'updated_at' => $timeNow]);

       }
       
       return response("Thanks for filling in the answers for today!");

   }







   public function postLogin(Request $request){
       $data = $request->all();
       $result = DB::table('users')->select('user_id')->where('username', $data['dataname'][0])->get();
       $user = $result[0];       
 
       $indexTimestamp = '';     
       $returnedData = array();
       $id = $user->user_id;
 
       /*$returnedData will hold max 8 values; 1st is $auth (yes/No/done), 2nd is $id = $id,
       3rd is their $level and 4th is their current $day, 5th is $sameDay entry = 'yes/No', 
       6th is the $message and a 7th (optional) $answers, and 8th (optional) )$updated_at*/

       if(Auth::attempt(['username' => $data['dataname'][0], 'password' => $data['dataname'][1]])){
                          
             //append 1st two values in $returnedData, ie. $auth = yes and their $id.
             array_push($returnedData, 'yes');
             array_push($returnedData, $id);


             $count = Answer::where('user_id', $id)->where('level', '<>', 0)->count();
            

             //if the user has already started using the app 
             if($count){
              

                $now = time();
                $currentLevel = Answer::where('user_id', $id)->max('level'); 
                $entriesOnLevel = Answer::where('level', $currentLevel)->where('user_id', $id)->count('*');
               
                //if the user has finished the level
                if($entriesOnLevel == 5){
                   ++$currentLevel;
                  
                   //if the user has finished all levels
                   if($currentLevel == 4){
                        $returnedData[0] = 'done';
                   }else{
                        array_push($returnedData, $currentLevel);
                        array_push($returnedData, 1);
                        array_push($returnedData, 'no');
                   }
           
                //if the user is still on that level
                }else{
                   array_push($returnedData, $currentLevel);

                   $maxTimestamp = Answer::where('level', $currentLevel)->where('user_id', $id)->max('updated_at');
                   $maxTime = strtotime($maxTimestamp);
                   $dateCompare = new DateCompare($now, $maxTime);
                   $daysSinceLastLogin = $dateCompare->daysMissed();
                   
                   /*If the user has not logged in for over 2 days, then start the level 
                   again at day 1 and ignore all previous entries*/

                   if ($daysSinceLastLogin >= 3){
                       Answer::where('level', $currentLevel)->where('user_id', $id)->update(['level' => NULL]);
                       $message = "You did not complete the current Level in time.  This Level commences today and must be completed within 7 days.";
                      
                       array_push($returnedData, 1);
                       array_push($returnedData, 'no');
                       array_push($returnedData, $message);
    
                   //If the user has logged in on the same day, then return the entries for that day

                   }else if($daysSinceLastLogin == -1){
                       $a = DB::table('answers')->select('answers')->where('level', $currentLevel)->where('user_id', $id)->where('updated_at', $maxTimestamp)->get();
                       $answers = unserialize($a[0]->answers);
                       $message = "You have already filled in the answers for today.  You can edit your answers.";
                       array_push($returnedData, $entriesOnLevel);
                       array_push($returnedData, 'yes');
                       array_push($returnedData, $message); 
                       array_push($returnedData, $answers);
                       array_push($returnedData, $maxTimestamp);

                   /*Otherwise make checks to see when the 1st entry for that level 
                   should be based on the number of days missed*/

                   }else{
                       $minTimestamp = Answer::where('level', $currentLevel)->where('user_id', $id)->min('updated_at');
                       $minTime = strtotime($minTimestamp); 
                       $dateCompare = new DateCompare($now, $minTime);
                       $daysInLevel = ($dateCompare->daysMissed()) + 1;
                       $difference = $daysInLevel - $entriesOnLevel;
                       

                       /*Real checks are done here, meaning the user is not on scedule to complete
                       the 5 steps within 7 days, so we need to figure out, the user's new start date on that level*/

                       if ($difference >= 3){
                           $count = 0;
                           $daysMissed = 0;
                           $days;
                           $timestampBefore = $minTime;                          
                           $allTimestamps = array();
                           $timestamps1 = DB::table('answers')->select('updated_at')->where('level', $currentLevel)->where('user_id', $id)->orderBy('updated_at')->get();
                           
      
                           foreach($timestamps1 as $timestamp){
                               $realTimestamp = strtotime($timestamp->updated_at);
                               $allTimestamps[] = $realTimestamp;                           
                           }
                           $allTimestamps[] = $now;
                           foreach($allTimestamps as $timestamp){
                              $dateCompare = new DateCompare($timestamp, $timestampBefore);
                              $days = $dateCompare->daysMissed();
                              $timestampBefore = $timestamp;
                              if($days >= 1 && $days < 3){
                                  $count += 1;
                                  if($count == 1){
                                      $indexTimestamp = date("Y-m-d H:i:s", $timestamp);
                                      
                                  } 
                                  $daysMissed += $days;   
                              }
                              if ($daysMissed >= 3){ 
                                  // The last entry is ignored                       
                                  Answer::where('level', $currentLevel)->where('user_id', $id)->where('updated_at', '<', $indexTimestamp)->update(['level' => NULL]);
                                  //The current day has been updated
                                  array_push($returnedData, $entriesOnLevel);
                                  array_push($returnedData, 'no');
                                  $message = "You have been moved back to day " . $entriesOnLevel . " due to not being on sceduled to complete the level within 7 days";
                                  array_push($returnedData, $message);
 
                                  
                              }    

                           }                 

                       }else{
                           ++$entriesOnLevel;
                           array_push($returnedData, $entriesOnLevel);
                           array_push($returnedData, 'no');
                       }
                    }

                }//end if the user is still on that level              
                

             //if the user has not started using the app
             
              
             }else{
                 //the user's Level is 0
                array_push($returnedData, 0);
                array_push($returnedData, 0);
                array_push($returnedData, 'no');
 
             }   
       // If the user is not authorised.
       }else{
           
            array_push($returnedData, 'no');
       } 
       
       return response($returnedData);
   

   }







    public function postRegister1(Request $request){
         $data = $request->all();
         $result;
         $reply = '';
         if($data['dataname'][1] == 'username'){
             $result = DB::table('users')->select('user_id')->where('username', $data['dataname'][0])->get();
              if($result){
                   $reply = '<span class="error_form" id="username_error">This username is already taken!</span>';
              }else{
                   $reply = "";
              }
         }elseif($data['dataname'][1] == 'email'){
             $result = DB::table('users')->select('user_id')->where('email', $data['dataname'][0])->get();
              if($result){
                   $reply = '<span class="error_form" id="email_error">This email is already taken!</span>';
              }else{
                   $reply = "";
              }

         }else{
             $user = new User();
             $user->username = $data['dataname'][0];       
             $password = $data['dataname'][1]; 
             $user->password = bcrypt($password); 
             $user->gender = $data['dataname'][2]; 
             $user->email = $data['dataname'][3];
             $user->save();

         }
         return response($reply);

         
 
    }

    
}

?>
